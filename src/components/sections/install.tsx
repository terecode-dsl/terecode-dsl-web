import { ArrowRight, Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, Eyebrow, pillButtonStyles } from "@/components/ui";

export async function Install() {
  const t = await getTranslations("Install");
  return (
    <Section id="install" className="border-b-0">
      <Container size="wide">
        <div className="border-border bg-background-elevated relative overflow-hidden rounded-3xl border p-8 sm:p-12 md:p-16">
          {/* Grid background image, faded toward the bottom-right so text stays legible */}
          <div
            className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[length:48px_48px] opacity-[0.18] dark:opacity-[0.12]"
            style={{
              maskImage: "radial-gradient(120% 120% at 0% 0%, #000 0%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(120% 120% at 0% 0%, #000 0%, transparent 75%)",
            }}
            aria-hidden="true"
          />
          {/* Accent glow */}
          <div className="bg-accent-muted/50 absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl" aria-hidden="true" />
          <div className="relative max-w-[680px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="text-foreground mt-3 text-[28px] leading-[1.12] font-medium tracking-tight text-balance sm:text-[36px]">
              {t("title")}
            </h2>
            <p className="text-muted-foreground mt-4 text-[15px] leading-[1.65] md:text-[17px]">
              {t("leadPrefix")} <span className="font-mono text-foreground">.trc</span>{" "}
              {t("leadSuffix")}
            </p>

            <div className="border-border bg-code-background mt-7 overflow-x-auto rounded-xl border p-4 font-mono text-[13px] leading-[1.9]">
              <div><span className="text-muted-foreground/70 select-none">$ </span>npm install -D <span className="text-accent">@terecode/cli</span></div>
              <div><span className="text-muted-foreground/70 select-none">$ </span>terecode build Button.trc <span className="text-accent">-t</span> react,vue,svelte</div>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
              <a href="https://github.com/terecode/terecode" className={pillButtonStyles({ variant: "primary", fullWidth: true, className: "sm:w-auto" })}>
                {t("readDocs")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/terecode/terecode"
                target="_blank"
                rel="noopener noreferrer"
                className={pillButtonStyles({ variant: "secondary", fullWidth: true, className: "sm:w-auto" })}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("star")}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
