"use client";

import { useEffect, useState } from "react";
import { useAttempts } from "@/components/AttemptsProvider";
import { claimIssueUrl, refOf, slugifyTeam } from "@/lib/attempts";
import { gaps } from "@/lib/data";

type Form = { team: string; link: string; plan: string; milestone: string };
const EMPTY: Form = { team: "", link: "", plan: "", milestone: "" };

// The 90-second claim wizard. No account and no email: the claim posts via a
// prefilled GitHub issue until the Remark42 threads launch, and the visitor's
// own copy shows immediately (pending) via localStorage.
export default function TakeWizard() {
  const { wizardGap, closeTake, addLocalClaim, showToast } = useAttempts();
  const [step, setStep] = useState(1);
  const [f, setF] = useState<Form>(EMPTY);
  const [err, setErr] = useState("");

  const gap = wizardGap == null ? null : gaps.find((g) => g.number === wizardGap) ?? null;
  const open = !!gap;

  useEffect(() => {
    if (open) {
      setStep(1);
      setF(EMPTY);
      setErr("");
    }
  }, [open, wizardGap]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTake();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeTake]);

  if (!gap) return null;

  const set = (patch: Partial<Form>) => {
    setF((prev) => ({ ...prev, ...patch }));
    setErr("");
  };

  const next = () => {
    if (step === 1 && !f.team.trim()) {
      setErr("a team or name is required; it becomes your public handle");
      return;
    }
    if (step === 2 && !f.plan.trim()) {
      setErr("say what will exist in 90 days; vague claims go stale fast");
      return;
    }
    setStep((s) => s + 1);
    setErr("");
  };

  const handle = slugifyTeam(f.team);
  const preview =
    (f.plan.trim() || "your 90-day plan") +
    (f.milestone.trim() ? `. Milestone 1: ${f.milestone.trim()}` : "") +
    (f.link.trim() ? ` → ${f.link.trim()}` : "");

  const post = () => {
    const today = new Date().toISOString().slice(0, 10);
    addLocalClaim({
      gap: gap.number,
      team: handle,
      link: f.link.trim() || undefined,
      plan: f.plan.trim(),
      milestone: f.milestone.trim() || undefined,
      claimed: today,
      state: "active",
    });
    window.open(claimIssueUrl(gap, f), "_blank", "noopener");
    closeTake();
    showToast(`${refOf(gap.number)} claimed by ${handle}: it shows across the map once curators merge your GitHub post.`);
  };

  const stepClass = (n: number) => (step === n ? "s now" : step > n ? "s done" : "s");

  return (
    <div className="overlay" onClick={closeTake} role="dialog" aria-modal="true" aria-label={`Take ${refOf(gap.number)}`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="m-head">
          <span className="cmd">$ take {refOf(gap.number)}</span>
          <span className="slug">{gap.slug}</span>
          <button className="esc" onClick={closeTake}>
            esc ✕
          </button>
        </div>
        <div className="steps">
          <span className={stepClass(1)}>01 WHO</span>
          <span className="lead">──</span>
          <span className={stepClass(2)}>02 PLAN</span>
          <span className="lead">──</span>
          <span className={stepClass(3)}>03 POST</span>
        </div>

        {step === 1 && (
          <div className="m-body">
            <input value={f.team} onChange={(e) => set({ team: e.target.value })} placeholder="team or your name, e.g. High St Futures" autoFocus />
            <input value={f.link} onChange={(e) => set({ link: e.target.value })} placeholder="link: site, repo or LinkedIn (optional)" />
            <div className="rail-note">// no email, no account: your claim posts publicly via GitHub and curators pin it here</div>
          </div>
        )}
        {step === 2 && (
          <div className="m-body">
            <textarea value={f.plan} onChange={(e) => set({ plan: e.target.value })} placeholder="what will exist in 90 days?" rows={3} autoFocus />
            <input value={f.milestone} onChange={(e) => set({ milestone: e.target.value })} placeholder="first milestone + date, e.g. term sheet by 15 sep" />
          </div>
        )}
        {step === 3 && (
          <div className="preview-box">
            <div className="label">PREVIEW · POSTS PUBLICLY TO {refOf(gap.number)}</div>
            <div className="text">
              <b>CLAIM · {handle}</b> · {preview}
            </div>
          </div>
        )}

        {err && <div className="m-err">! {err}</div>}

        <div className="m-foot">
          {step > 1 && (
            <button className="btn-outline" onClick={() => { setStep((s) => s - 1); setErr(""); }}>
              back
            </button>
          )}
          {step < 3 && (
            <button className="btn-green" onClick={next}>
              next
            </button>
          )}
          {step === 3 && (
            <button className="btn-green" onClick={post}>
              post claim
            </button>
          )}
          <span className="note">≈ 90 seconds · update or withdraw any time</span>
        </div>
      </div>
    </div>
  );
}
