import { MessageCircle } from "lucide-react";

import { waLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppCtaProps {
  message: string;
  label: string;
  subtext?: string;
  size?: "default" | "large";
  dark?: boolean;
  className?: string;
}

export function WhatsAppCta({
  message,
  label,
  subtext,
  size = "default",
  dark = false,
  className,
}: WhatsAppCtaProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "cta-pulse inline-flex items-center justify-center gap-3 rounded-full bg-whats font-display font-extrabold tracking-tight text-grafite-deep transition-transform duration-200 hover:scale-[1.04] hover:bg-whats-dark hover:text-white",
          size === "large"
            ? "px-8 py-5 text-base sm:px-12 sm:py-6 sm:text-2xl"
            : "px-6 py-4 text-sm sm:px-9 sm:text-lg",
        )}
      >
        <MessageCircle
          className={cn("shrink-0", size === "large" ? "h-7 w-7" : "h-6 w-6")}
          aria-hidden
        />
        <span>{label}</span>
      </a>
      {subtext ? (
        <p
          className={cn(
            "mt-3 text-sm",
            dark ? "text-white/70" : "text-foreground/60",
          )}
        >
          {subtext}
        </p>
      ) : null}
    </div>
  );
}