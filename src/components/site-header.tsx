import { Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Container, pillButtonStyles } from "@/components/ui";

const GITHUB_REPO = "https://github.com/terecode/terecode";

export async function SiteHeader() {
  const t = await getTranslations("Nav");
  const nav = [
    { label: t("why"), href: "#why" },
    { label: t("targets"), href: "#targets" },
    { label: t("features"), href: "#features" },
    { label: t("install"), href: "#install" },
  ];
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container size="wide" className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("github")}
            className="text-muted-foreground hover:text-foreground hidden h-9 w-9 items-center justify-center rounded-full transition-colors sm:inline-flex"
          >
            <Github className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <a href="#install" className={pillButtonStyles({ className: "h-9 px-4" })}>
            {t("getStarted")}
          </a>
        </div>
      </Container>
    </header>
  );
}
