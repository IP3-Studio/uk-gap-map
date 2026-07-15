"use client";

import { useAttempts } from "@/components/AttemptsProvider";

export default function Toast() {
  const { toast } = useAttempts();
  if (!toast) return null;
  return (
    <div className="toast" role="status">
      <span className="tick">✓</span>
      <span className="msg">{toast}</span>
    </div>
  );
}
