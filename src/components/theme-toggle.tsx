"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Toggles between dark (default) and light by swapping classes on <html>.
 * The initial class is applied pre-paint by the inline script in layout.tsx,
 * so this only needs to read the current state on mount and flip it on click.
 */
export function ThemeToggle() {
  const t = useTranslations("Theme");
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("toLight") : t("toDark")}
      className="text-muted-foreground hover:text-foreground hover:border-accent/40 border-border bg-background-elevated inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
    >
      {theme === "dark" ? (
        <Moon className="h-[18px] w-[18px]" aria-hidden="true" />
      ) : (
        <Sun className="h-[18px] w-[18px]" aria-hidden="true" />
      )}
    </button>
  );
}
