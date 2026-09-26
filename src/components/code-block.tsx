import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A static, dependency-free code frame: window chrome with a filename, and a
 * monospace body. Children are pre-highlighted using the token helpers below
 * (kw/str/com/fn/pn) so we get a syntax-highlighted look without shipping a
 * highlighter to the client.
 */
export function CodeBlock({
  filename,
  lang,
  children,
  className,
}: {
  filename: string;
  lang?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border bg-code-background overflow-hidden rounded-xl border shadow-sm",
        className,
      )}
    >
      <div className="border-border bg-background-elevated flex items-center gap-2 border-b px-4 py-2.5">
        <span className="flex gap-1.5">
          <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
          <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
          <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
        </span>
        <span className="text-muted-foreground ml-1.5 font-mono text-xs">{filename}</span>
        {lang && (
          <span className="text-muted-foreground/70 ml-auto font-mono text-[10px] tracking-widest uppercase">
            {lang}
          </span>
        )}
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.7] sm:p-5 sm:text-[13px]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

/* Token helpers - semantic colors drawn from the theme (contrast-tuned per mode). */
export const kw = (c: React.ReactNode) => <span className="text-accent">{c}</span>;
export const str = (c: React.ReactNode) => <span className="text-emerald-600 dark:text-emerald-400">{c}</span>;
export const com = (c: React.ReactNode) => <span className="text-muted-foreground/70 italic">{c}</span>;
export const fn = (c: React.ReactNode) => <span className="text-sky-600 dark:text-sky-300">{c}</span>;
export const pn = (c: React.ReactNode) => <span className="text-muted-foreground">{c}</span>;
