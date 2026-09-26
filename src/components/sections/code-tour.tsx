import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeader } from "@/components/ui";
import { CodeBlock, kw, str, fn, pn } from "@/components/code-block";

export async function CodeTour() {
  const t = await getTranslations("CodeTour");
  return (
    <Section id="code-tour">
      <Container size="wide">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <CodeBlock filename="Counter.tsx" lang="react">
{kw("import")} {pn("{")} useState {pn("}")} {kw("from")} {str('"react"')}{pn(";")}
{"\n"}
{"\n"}{kw("export function")} {fn("Counter")}{pn("() {")}
{"\n  "}{kw("const")} {pn("[")}count{pn(",")} setCount{pn("] =")} {fn("useState")}{pn("(")}{str("0")}{pn(");")}
{"\n  "}{kw("return")} {pn("(")}
{"\n    "}{pn("<button")} onClick{pn("={() =>")} {fn("setCount")}{pn("(")}count {pn("+")} {str("1")}{pn(")}>")}
{"\n      "}Clicked {pn("{")}count{pn("}")} times
{"\n    "}{pn("</button>")}
{"\n  "}{pn(");")}
{"\n"}{pn("}")}
          </CodeBlock>

          <CodeBlock filename="Counter.svelte" lang="svelte">
{pn("<script")} lang{pn("=")}{str('"ts"')}{pn(">")}
{"\n  "}{kw("let")} count {pn("=")} {fn("$state")}{pn("(")}{str("0")}{pn(");")}
{"\n"}{pn("</script>")}
{"\n"}
{"\n"}{pn("<button")} onclick{pn("={() =>")} count {pn("+=")} {str("1")}{pn(">")}
{"\n  "}Clicked {pn("{")}count{pn("}")} times
{"\n"}{pn("</button>")}
          </CodeBlock>
        </div>

        <p className="text-muted-foreground mt-6 inline-flex items-center gap-2 font-mono text-xs">
          terecode build Counter.trc -t react,svelte
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          {t("done")}
        </p>
      </Container>
    </Section>
  );
}
