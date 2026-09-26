import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  return (
    <footer className="py-12 sm:py-16">
      <Container size="wide" className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{t("tagline")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-2" aria-label="Footer">
          <a href="#why" className="text-muted-foreground hover:text-foreground text-sm transition-colors">{t("why")}</a>
          <a href="#targets" className="text-muted-foreground hover:text-foreground text-sm transition-colors">{t("targets")}</a>
          <a href="#features" className="text-muted-foreground hover:text-foreground text-sm transition-colors">{t("features")}</a>
          <a href="https://github.com/terecode/terecode" className="text-muted-foreground hover:text-foreground text-sm transition-colors">{t("github")}</a>
        </nav>
      </Container>
      <Container size="wide" className="border-border mt-10 border-t pt-6">
        <p className="text-muted-foreground/70 font-mono text-xs">
          © {new Date().getFullYear()} Terecode · {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
