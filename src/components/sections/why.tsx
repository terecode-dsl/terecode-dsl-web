import { Layers, FileCode2, Workflow } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeader } from "@/components/ui";

export async function Why() {
  const t = await getTranslations("Why");
  const cards = [
    { icon: Layers, title: t("card1Title"), body: t("card1Body") },
    { icon: FileCode2, title: t("card2Title"), body: t("card2Body") },
    { icon: Workflow, title: t("card3Title"), body: t("card3Body") },
  ];
  return (
    <Section id="why">
      <Container size="wide">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border-border bg-background-elevated rounded-2xl border p-6 transition-colors hover:border-accent/40"
            >
              <span className="bg-accent-muted text-accent inline-flex h-10 w-10 items-center justify-center rounded-xl">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-foreground mt-4 text-lg font-medium tracking-tight">{card.title}</h3>
              <p className="text-muted-foreground mt-2 text-[14.5px] leading-[1.6]">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
