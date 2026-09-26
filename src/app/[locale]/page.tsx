import { setRequestLocale } from "next-intl/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/sections/hero";
import { Why } from "@/components/sections/why";
import { Targets } from "@/components/sections/targets";
import { CodeTour } from "@/components/sections/code-tour";
import { Features } from "@/components/sections/features";
import { Install } from "@/components/sections/install";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex flex-col">
        <Hero />
        <Reveal>
          <Why />
        </Reveal>
        <Reveal>
          <Targets />
        </Reveal>
        <Reveal>
          <CodeTour />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
        <Reveal>
          <Install />
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}
