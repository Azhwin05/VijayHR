import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";
import TextLink from "@/components/ui/TextLink";

export default function Timeline({
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: { year: string; title: string; text: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 flex flex-col">
        {items.map((item, i) => (
          <Reveal key={item.year} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[140px_1fr]">
              <span className="editorial text-[30px] leading-none text-ink/35 sm:pt-1 sm:text-right">
                {item.year}
              </span>
              {/* the border on this column *is* the spine */}
              <div
                className={`relative pl-8 ${i === items.length - 1 ? "pb-0" : "pb-10"}`}
                style={{
                  borderLeft:
                    i === items.length - 1
                      ? "1px solid transparent"
                      : "1px solid var(--hairline)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute top-[5px] h-[15px] w-[15px] rounded-full border-[3px]"
                  style={{
                    left: "-8px",
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--paper)",
                  }}
                />
                <h3 className="text-[19px] text-ink">{item.title}</h3>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink/60">
                  {item.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {ctaLabel && ctaHref && (
        <Reveal delay={0.1} className="mt-12">
          <TextLink href={ctaHref}>{ctaLabel}</TextLink>
        </Reveal>
      )}
    </section>
  );
}
