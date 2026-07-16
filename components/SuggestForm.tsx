"use client";

import { useState } from "react";
import { useAttempts } from "@/components/AttemptsProvider";
import { REPO } from "@/lib/attempts";
import { domains } from "@/lib/data";

const vertical = domains.filter((d) => !d.lens);

// Suggest-a-gap: same no-account pattern as claims. The form composes a
// structured GitHub issue; curators verify against primary sources before
// anything reaches the map (unfitting entries land in the Other domain first).
export default function SuggestForm() {
  const { showToast } = useAttempts();
  const [title, setTitle] = useState("");
  const [missing, setMissing] = useState("");
  const [why, setWhy] = useState("");
  const [sources, setSources] = useState("");
  const [place, setPlace] = useState("");
  const [domain, setDomain] = useState("not-sure");
  const [err, setErr] = useState("");

  const submit = () => {
    if (!title.trim()) {
      setErr("name the gap in one line; that becomes the entry title");
      return;
    }
    if (!missing.trim()) {
      setErr("say what is missing; one honest paragraph is enough");
      return;
    }
    const body = [
      `**Suggested gap:** ${title.trim()}`,
      `**Domain guess:** ${domain}`,
      place.trim() ? `**Constituency / place:** ${place.trim()}` : null,
      "",
      "**What is missing:**",
      missing.trim(),
      why.trim() ? `\n**Why it matters:**\n${why.trim()}` : null,
      sources.trim() ? `\n**Sources (links help the verification):**\n${sources.trim()}` : null,
      "",
      "---",
      "Posted from the suggest-a-gap form. Curators: verify against primary sources, then file (Other domain if nothing fits).",
    ]
      .filter((l) => l !== null)
      .join("\n");
    const url = `${REPO}/issues/new?labels=suggestion&title=${encodeURIComponent(`suggest: ${title.trim().slice(0, 80)}`)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener");
    showToast("suggestion opened on GitHub: it reaches the map once curators verify it");
  };

  return (
    <div className="suggest-form">
      <input value={title} onChange={(e) => { setTitle(e.target.value); setErr(""); }} placeholder="the gap in one line, e.g. No public register of X" />
      <textarea value={missing} onChange={(e) => { setMissing(e.target.value); setErr(""); }} rows={4} placeholder="what is missing? be concrete: the instrument, dataset, fund or institution that does not exist" />
      <textarea value={why} onChange={(e) => setWhy(e.target.value)} rows={3} placeholder="why it matters (optional)" />
      <textarea value={sources} onChange={(e) => setSources(e.target.value)} rows={2} placeholder="sources: links that back it up (optional, but they speed up verification)" />
      <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder="constituency or place, if the gap is local (optional): e.g. Hackney North" />
      <select value={domain} onChange={(e) => setDomain(e.target.value)} aria-label="Domain guess">
        <option value="not-sure">domain: not sure / other</option>
        {vertical.map((d) => (
          <option key={d.slug} value={d.slug}>
            domain: {d.shortName.toLowerCase()}
          </option>
        ))}
      </select>
      {err && <div className="m-err" style={{ padding: 0 }}>! {err}</div>}
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <button className="btn-green" onClick={submit}>
          suggest it
        </button>
        <span className="rail-note" style={{ marginTop: 0 }}>
          // no account here; posts via github · verified before it reaches the map
        </span>
      </div>
    </div>
  );
}
