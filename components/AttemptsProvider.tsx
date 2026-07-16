"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  committedAttempts,
  gapStatus,
  RAW_ATTEMPTS_URL,
  type Attempt,
  type AttemptsFile,
  type GapStatus,
} from "@/lib/attempts";

// Time-dependent values (status, pulse, "day N") are computed against the
// file's generatedAt until mount, then against the real clock — the same
// trick StaleBadge uses so a static host stays truthful over time.
type Ctx = {
  ready: boolean;
  now: Date;
  attempts: Attempt[];
  byGap: Map<number, Attempt[]>;
  statusOf: (n: number) => GapStatus;
  counts: { build: number; shipped: number };
  watched: Record<number, boolean>;
  toggleWatch: (n: number) => void;
  wizardGap: number | null;
  openTake: (n: number) => void;
  closeTake: () => void;
  addLocalClaim: (a: Attempt) => void;
  toast: string;
  showToast: (msg: string) => void;
};

const AttemptsCtx = createContext<Ctx | null>(null);

const WATCH_KEY = "ukgm-watch";
const CLAIMS_KEY = "ukgm-claims";

export default function AttemptsProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [file, setFile] = useState<AttemptsFile>(committedAttempts);
  const [localClaims, setLocalClaims] = useState<Attempt[]>([]);
  const [watched, setWatched] = useState<Record<number, boolean>>({});
  const [wizardGap, setWizardGap] = useState<number | null>(null);
  const [toast, setToast] = useState("");
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setReady(true);
    try {
      setWatched(JSON.parse(localStorage.getItem(WATCH_KEY) ?? "{}"));
      setLocalClaims(JSON.parse(localStorage.getItem(CLAIMS_KEY) ?? "[]"));
    } catch {
      /* fresh visitor */
    }
    // Overlay: the repo is the store; this fetch just closes the deploy lag.
    fetch(RAW_ATTEMPTS_URL, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((remote: AttemptsFile | null) => {
        // strictly newer only: a cached remote copy with the same stamp must
        // never overwrite the fresher committed data this build shipped with
        if (remote && Array.isArray(remote.attempts) && remote.generatedAt > committedAttempts.generatedAt) {
          setFile(remote);
        }
      })
      .catch(() => {
        /* offline or blocked: committed copy stands */
      });
  }, []);

  const now = useMemo(() => (ready ? new Date() : new Date(file.generatedAt)), [ready, file.generatedAt]);

  const attempts = useMemo(() => {
    // A visitor's own un-merged claim shows for them only, marked pending;
    // once curators merge it, the merged copy wins.
    const mergedTeams = new Set(file.attempts.map((a) => `${a.gap}:${a.team}`));
    const pending = localClaims
      .filter((c) => !mergedTeams.has(`${c.gap}:${c.team}`))
      .map((c) => ({ ...c, pending: true }));
    return [...file.attempts, ...pending];
  }, [file, localClaims]);

  const byGap = useMemo(() => {
    const m = new Map<number, Attempt[]>();
    for (const a of attempts) {
      if (!m.has(a.gap)) m.set(a.gap, []);
      m.get(a.gap)!.push(a);
    }
    return m;
  }, [attempts]);

  const statusOf = useCallback((n: number) => gapStatus(byGap.get(n) ?? [], now), [byGap, now]);

  const counts = useMemo(() => {
    let build = 0;
    let shipped = 0;
    for (const [n] of byGap) {
      const s = gapStatus(byGap.get(n)!, now);
      if (s === "build") build += 1;
      if (s === "shipped") shipped += 1;
    }
    return { build, shipped };
  }, [byGap, now]);

  const toggleWatch = useCallback((n: number) => {
    setWatched((w) => {
      const next = { ...w, [n]: !w[n] };
      try {
        localStorage.setItem(WATCH_KEY, JSON.stringify(next));
      } catch {
        /* private mode */
      }
      return next;
    });
  }, []);

  const addLocalClaim = useCallback((a: Attempt) => {
    setLocalClaims((prev) => {
      const next = [...prev, a];
      try {
        localStorage.setItem(CLAIMS_KEY, JSON.stringify(next));
      } catch {
        /* private mode */
      }
      return next;
    });
  }, []);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(msg);
    toastTimer.current = setTimeout(() => setToast(""), 5200);
  }, []);

  const value: Ctx = {
    ready,
    now,
    attempts,
    byGap,
    statusOf,
    counts,
    watched,
    toggleWatch,
    wizardGap,
    openTake: setWizardGap,
    closeTake: () => setWizardGap(null),
    addLocalClaim,
    toast,
    showToast,
  };

  return <AttemptsCtx.Provider value={value}>{children}</AttemptsCtx.Provider>;
}

export function useAttempts(): Ctx {
  const ctx = useContext(AttemptsCtx);
  if (!ctx) throw new Error("useAttempts outside AttemptsProvider");
  return ctx;
}
