import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";

export default function IndustriesTeaser({
  eyebrow,
  title,
  description,
  industries,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  industries: string[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-x-10 gap-y-5">
        {industries.map((name) => (
          <span key={name} className="text-[15px] text-ink/75">
            {name}
          </span>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="mt-10">
        <TextLink href={ctaHref}>{ctaLabel} →</TextLink>
      </Reveal>
    </section>
  );
}
