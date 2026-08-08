import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface ExpandableProps {
  title: ReactNode;
  preview?: ReactNode;
  expandLabel: string;
  collapseLabel?: string;
  children: ReactNode;
}

export function Expandable({
  title,
  preview,
  expandLabel,
  collapseLabel = "Recolher",
  children,
}: ExpandableProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
      >
        <span className="min-w-0">
          <span className="block font-display text-base font-extrabold text-grafite sm:text-lg">
            {title}
          </span>
          {preview ? (
            <span className="mt-2 block text-sm leading-relaxed text-foreground/70">
              {preview}
            </span>
          ) : null}
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-whats-dark">
            {open ? collapseLabel : expandLabel}
          </span>
        </span>
        <ChevronDown
          aria-hidden
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-foreground/50 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 py-5 text-sm leading-relaxed text-foreground/80 sm:px-6 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}