"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, LOCALE_LABELS, type Locale } from "@/i18n/routing";

/**
 * Switches locale while preserving the current path. Uses a native <select>
 * for accessibility and zero extra markup, dressed to match the header chrome.
 */
export function LanguageSwitcher() {
  const t = useTranslations("Lang");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = React.useTransition();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const next = event.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <label className="relative inline-flex items-center" aria-label={t("label")}>
      <Globe className="text-muted-foreground pointer-events-none absolute left-2.5 h-[15px] w-[15px]" aria-hidden="true" />
      <select
        value={locale}
        onChange={onChange}
        disabled={pending}
        className="border-border bg-background-elevated text-foreground hover:border-accent/40 h-9 cursor-pointer appearance-none rounded-full border pl-8 pr-7 text-sm transition-colors focus-visible:outline-none"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-background text-foreground">
            {LOCALE_LABELS[loc]}
          </option>
        ))}
      </select>
      <svg
        className="text-muted-foreground pointer-events-none absolute right-2.5 h-3 w-3"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}
