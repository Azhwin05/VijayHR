import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";
import Icon from "@/components/ui/Icon";

export default function BenefitsGrid({
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
  center = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: { title: string; text: string; icon?: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  center?: boolean;
}) {
  return (
    <section style={{ backgroundColor: "var(--tint-3)" }}>
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} center={center} />

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-11 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              {item.icon ? (
                <Icon
                  name={item.icon}
                  className="mb-4 h-6 w-6"
                  style={{ color: "var(--accent)" }}
                />
              ) : (
                <span
                  aria-hidden
                  className="mb-4 block h-[2px] w-7 rounded-full"
                  style={{ backgroundColor: "var(--accent)", opacity: 0.55 }}
                />
              )}
              <h3 className="text-[18px] text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/60">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>

        {ctaLabel && ctaHref && (
          <Reveal delay={0.2} className="mt-14">
            <TextLink href={ctaHref}>{ctaLabel}</TextLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
