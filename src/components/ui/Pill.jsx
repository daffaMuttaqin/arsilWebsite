import { Sparkles } from "lucide-react";

export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-neutral-600">
      <Sparkles className="w-3.5 h-3.5" /> {children}
    </span>
  );
}
