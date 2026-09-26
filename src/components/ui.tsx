import * as React from "react";
import { cn } from "@/lib/utils";

/* ----------------------------------------------------------------- Container */

export function Container({
  className,
  children,
  size = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: "default" | "prose" | "wide" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "prose" && "max-w-[720px]",
        size === "default" && "max-w-[1080px]",
        size === "wide" && "max-w-[1200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* --------------------------------------------------------------- PillButton */

type Variant = "primary" | "secondary";

const PILL_BASE =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-150 ease-out active:scale-[0.98]";

const PILL_VARIANT: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground hover:scale-[1.02] hover:opacity-90",
  secondary:
    "border border-border bg-background-elevated text-foreground hover:scale-[1.02] hover:border-accent/40",
};

export function pillButtonStyles({
  variant = "primary",
  fullWidth = false,
  className,
}: { variant?: Variant; fullWidth?: boolean; className?: string } = {}) {
  return cn(PILL_BASE, PILL_VARIANT[variant], fullWidth && "w-full", className);
}

/* ------------------------------------------------------------------- Eyebrow */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-accent font-mono text-xs font-medium tracking-widest uppercase">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------- Section */

export function Section({
  id,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("border-border border-b py-16 sm:py-20 md:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[640px]", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-foreground mt-3 text-[26px] leading-[1.15] font-medium tracking-tight text-balance sm:text-[32px] md:text-[38px]">
        {title}
      </h2>
      {lead && (
        <p className="text-muted-foreground mt-4 text-[15px] leading-[1.65] text-pretty md:text-[17px]">
          {lead}
        </p>
      )}
    </div>
  );
}
