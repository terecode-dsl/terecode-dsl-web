import { getTranslations } from "next-intl/server";
import { Container, Section, SectionHeader } from "@/components/ui";

const TARGETS: { name: string; idiom: string }[] = [
  { name: "React", idiom: "hooks · clsx" },
  { name: "Vue", idiom: "SFC · composition" },
  { name: "Svelte", idiom: "runes · snippets" },
  { name: "Solid", idiom: "signals · <For>" },
  { name: "Angular", idiom: "signals · @if" },
  { name: "React Native", idiom: "StyleSheet" },
  { name: "Web Components", idiom: "shadow DOM" },
  { name: "Astro", idiom: "static islands" },
  { name: "Flutter", idiom: "widgets · Dart" },
  { name: "Kotlin", idiom: "Compose" },
];

export async function Targets() {
  const t = await getTranslations("Targets");
  return (
    <Section id="targets" className="bg-background-elevated/40">
      <Container size="wide">
        <SectionHeader eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {TARGETS.map((t) => (
            <div
              key={t.name}
              className="border-border bg-background group flex flex-col gap-1 rounded-xl border p-4 transition-colors hover:border-accent/50"
            >
              <span className="text-foreground font-medium tracking-tight">{t.name}</span>
              <span className="text-muted-foreground font-mono text-[11px]">{t.idiom}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
