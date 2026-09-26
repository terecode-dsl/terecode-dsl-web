import { ArrowRight, Github } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, pillButtonStyles } from "@/components/ui";
import { CodeBlock, kw, str, fn, pn, com } from "@/components/code-block";

export async function Hero() {
  const t = await getTranslations("Hero");
  return (
    <section className="border-border relative overflow-hidden border-b" aria-labelledby="hero-heading">
      <Container size="wide" className="relative py-14 sm:py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          <div className="min-w-0 max-w-[640px]">
            <p className="border-border bg-background-elevated text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] md:text-xs">
              <span className="bg-accent inline-block h-1.5 w-1.5 rounded-full" />
              <span>{t("badge")}</span>
            </p>
            <h1
              id="hero-heading"
              className="text-foreground text-[32px] leading-[1.08] font-medium tracking-tight text-balance sm:text-[44px] md:text-[52px] lg:text-[56px]"
            >
              {t("heading")}
            </h1>
            <p className="text-muted-foreground mt-5 max-w-[560px] text-[15px] leading-[1.65] text-pretty md:mt-6 md:text-[17px]">
              <span className="text-foreground font-medium">Terecode</span> {t("leadPrefix")}{" "}
              <span className="text-foreground">{t("leadHighlight")}</span> {t("leadSuffix")}
            </p>
            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <a href="#install" className={pillButtonStyles({ variant: "primary", fullWidth: true, className: "sm:w-auto" })}>
                {t("getStarted")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/terecode/terecode"
                target="_blank"
                rel="noopener noreferrer"
                className={pillButtonStyles({ variant: "secondary", fullWidth: true, className: "sm:w-auto" })}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                {t("viewGithub")}
              </a>
            </div>
          </div>

          <div className="relative min-w-0 lg:pl-4">
            <div className="bg-accent-muted/40 absolute -inset-x-6 -inset-y-4 -z-10 hidden rounded-3xl blur-3xl lg:block" />
            <CodeBlock filename="Counter.trc" lang="trc">
{kw("component")} {fn("Counter")} {pn("{")}
{"\n  "}{kw("state")} {pn("{")} count{pn(":")} {fn("number")} {pn("=")} {str("0")} {pn("}")}
{"\n"}
{"\n  "}{kw("template")} {pn("{")}
{"\n    "}{pn("<button")} on{pn(":")}click{pn("={")} state.count {pn("+=")} {str("1")} {pn("}>")}
{"\n      "}Clicked {pn("{")}count{pn("}")} times
{"\n    "}{pn("</button>")}
{"\n  "}{pn("}")}
{"\n"}{pn("}")}
            </CodeBlock>
            <p className="text-muted-foreground/80 mt-3 text-center font-mono text-[11px]">
              {com(`// ${t("compilesTo")}`)}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
