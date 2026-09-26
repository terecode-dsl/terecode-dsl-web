import {
  Boxes,
  RefreshCw,
  Palette,
  SquareTerminal,
  Sparkles,
  Figma,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeader } from "@/components/ui";

export async function Features() {
  const t = await getTranslations("Features");
  const features = [
    { icon: Boxes, title: t("f1Title"), body: t("f1Body") },
    { icon: Palette, title: t("f2Title"), body: t("f2Body") },
    { icon: RefreshCw, title: t("f3Title"), body: t("f3Body") },
    { icon: SquareTerminal, title: t("f4Title"), body: t("f4Body") },
    { icon: Sparkles, title: t("f5Title"), body: t("f5Body") },
    { icon: Figma, title: t("f6Title"), body: t("f6Body") },
  ];
  return (
    <Section id="features" className="bg-background-elevated/40">
      <Container size="wide">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-6">
              <span className="text-accent inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted">
                <f.icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <h3 className="text-foreground mt-4 font-medium tracking-tight">{f.title}</h3>
              <p className="text-muted-foreground mt-1.5 text-[14px] leading-[1.6]">{f.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
