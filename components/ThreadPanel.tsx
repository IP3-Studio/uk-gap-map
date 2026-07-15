"use client";

import { useState } from "react";
import { useAttempts } from "@/components/AttemptsProvider";
import { postsFor, refOf, REPO, slugifyTeam } from "@/lib/attempts";
import { gapBySlug } from "@/lib/data";

// Per-gap thread. Until the Remark42 instance is live, posts are the claim and
// update record from attempts.json, and replies route to a prefilled GitHub
// issue: no fake guest posts, no invented counts.
export default function ThreadPanel({ slug }: { slug: string }) {
  const gap = gapBySlug.get(slug);
  const { byGap, now, showToast } = useAttempts();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  if (!gap) return null;

  const posts = postsFor(byGap.get(gap.number) ?? [], now);

  const reply = () => {
    const body = text.trim();
    if (!body) {
      showToast("write something first; replies are public");
      return;
    }
    const author = slugifyTeam(name) === "anon" ? "guest" : slugifyTeam(name);
    const issueBody = `Reply to ${refOf(gap.number)} ${gap.title} (https://uk-gap-map.vercel.app/gaps/${gap.slug}/)\n\n**${author}:** ${body}\n`;
    const url = `${REPO}/issues/new?labels=thread&title=${encodeURIComponent(`thread: ${refOf(gap.number)} · ${author}`)}&body=${encodeURIComponent(issueBody)}`;
    window.open(url, "_blank", "noopener");
    setText("");
    showToast("reply opened on GitHub: it lands here once curators merge it");
  };

  return (
    <div className="thread">
      <div className="bar">
        <span className="l">THREAD · {posts.length} POSTS</span>
        <span className="m">remark42 threads launch soon · replies via github until then</span>
        <span className="r">
          <a href={`${REPO}/issues?q=${encodeURIComponent(refOf(gap.number))}`} rel="noopener noreferrer" target="_blank">
            open on github ↗
          </a>
        </span>
      </div>
      {posts.length === 0 && <div className="quiet">// quiet so far. the dossier is the first post: reply below or take the gap.</div>}
      {posts.map((p, i) => (
        <div key={i} className={p.kind === "claim" ? "post claim" : "post"}>
          <div className="head">
            {p.kind === "claim" && <span className="p-badge claim">CLAIM · PINNED</span>}
            {p.kind === "update" && <span className="p-badge update">UPDATE</span>}
            {p.kind === "ship" && <span className="p-badge ship">SHIPPED</span>}
            {p.pending && <span className="p-badge pending">awaiting merge</span>}
            <span className="author">{p.author}</span>
            <span className="when">{p.when}</span>
          </div>
          <div className="body">{p.body}</div>
        </div>
      ))}
      <div className="composer">
        <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name (guest)" />
        <input
          type="text"
          className="reply"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && reply()}
          placeholder="reply as guest, no account…"
        />
        <button className="post-btn" onClick={reply}>
          post
        </button>
      </div>
    </div>
  );
}
