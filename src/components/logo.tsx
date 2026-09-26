import * as React from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markOnly?: boolean;
}

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Terecode - home"
      className={cn("inline-flex items-center gap-2.5 select-none focus-visible:rounded-md", className)}
    >
      <TMark className="h-6 w-6 sm:h-7 sm:w-7" />
      {!markOnly && (
        <span className="text-foreground font-sans text-[15px] font-medium tracking-tight sm:text-[17px]">
          Terecode
        </span>
      )}
    </Link>
  );
}

/**
 * Geometric "T" monogram, Bauhaus-flat. A vertical stem and a top bar built
 * from uniform strokes; the bar's right segment carries the accent so the mark
 * reads cleanly in both monochrome and color.
 */
export function TMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="28" height="28" rx="7" className="fill-background-elevated" stroke="currentColor" strokeOpacity="0.18" />
      {/* top bar */}
      <rect x="8" y="9" width="16" height="3.2" rx="1.6" fill="currentColor" />
      <rect x="16.8" y="9" width="7.2" height="3.2" rx="1.6" fill="var(--accent)" />
      {/* stem */}
      <rect x="14.4" y="9" width="3.2" height="14" rx="1.6" fill="currentColor" />
    </svg>
  );
}
