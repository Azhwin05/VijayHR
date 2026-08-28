import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import SectionIntro from "@/components/sections/SectionIntro";

type Testimonial = {
  company: string;
  heading?: string;
  paragraphs: string[];
};

export default function ClientTestimonials({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: Testimonial[];
}) {
  return (
    <section className="border-t border-black/[0.06] surface-1">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} center />

        <div className="mx-auto mt-16 flex max-w-[760px] flex-col">
          {items.map((t, i) => (
            <div key={t.company}>
              <Reveal delay={(i % 2) * 0.06} className="py-10">
                <span
                  aria-hidden
                  className="editorial block text-[36px] leading-none"
                  style={{ color: "var(--accent)", opacity: 0.3 }}
                >
                  &ldquo;
                </span>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  {t.company}
                </p>
                {t.heading && (
                  <p className="mt-2 font-display text-[19px] leading-snug text-ink">
                    {t.heading}
                  </p>
                )}

                <div className="mt-4 flex flex-col gap-4">
                  {t.paragraphs.map((para, pi) => (
                    <p key={pi} className="text-[15px] leading-relaxed text-ink/75">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>
              {i < items.length - 1 && <Rule />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
