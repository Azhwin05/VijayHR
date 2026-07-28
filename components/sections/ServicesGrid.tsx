import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";

type Item = { name: string; tagline: string; href: string };

// Rotating tint surfaces — all drawn from the active brand family, so a
// section reads as one colour world rather than a patchwork.
const TINTS = ["var(--tint-1)", "var(--tint-2)", "var(--paper)", "var(--tint-3)"];

export default function ServicesGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.href}
            delay={(i % 3) * 0.06}
            className={`group flex flex-col rounded-[10px] border border-black/[0.06] p-7 transition-all duration-300 hover:-translate-y-[3px] hover:border-black/[0.1] hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.14)] ${
              // gentle vertical stagger on wide screens — breaks the grid lockstep
              i % 3 === 1 ? "lg:mt-8" : i % 3 === 2 ? "lg:mt-16" : ""
            }`}
            style={{ backgroundColor: TINTS[i % TINTS.length] }}
          >
            <span className="editorial text-[26px] leading-none text-ink/25">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-[19px] leading-snug text-ink">
              {item.name}
            </h3>
            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink/60">
              {item.tagline}
            </p>
            <div className="mt-6">
              <TextLink href={item.href}>Learn more →</TextLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
