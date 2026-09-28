import { Construction } from "lucide-react";

export function UnderConstructionNotice({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      role="note"
      className="mb-6 flex gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed text-foreground"
    >
      <Construction
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink"
      />
      <div className="space-y-2">{children}</div>
    </div>
  );
}
