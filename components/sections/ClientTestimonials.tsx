"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";

type Testimonial = {
  company: string;
  pullQuote: string;
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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-black/[0.06] surface-1">
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro eyebrow={eyebrow} title={title} description={description} center />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {items.map((t, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={t.company}
                delay={(i % 2) * 0.06}
                className="flex flex-col rounded-[10px] border border-black/[0.06] p-8"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <span
                  aria-hidden
                  className="editorial block text-[36px] leading-none"
                  style={{ color: "var(--accent)", opacity: 0.3 }}
                >
                  &ldquo;
                </span>
                <p className="editorial mt-2 text-[19px] leading-[1.4] text-ink">
                  {t.pullQuote}
                </p>
                <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink/55">
                  {t.company}
                </p>

                {isOpen && (
                  <div className="mt-5 flex flex-col gap-3 border-t border-black/[0.06] pt-5">
                    {t.heading && (
                      <p className="font-display text-[15px] leading-snug text-ink">
                        {t.heading}
                      </p>
                    )}
                    {t.paragraphs.map((para, pi) => (
                      <p key={pi} className="text-[13.5px] leading-relaxed text-ink/70">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="mt-6 w-fit text-[12.5px] font-medium text-[var(--accent)] hover:underline"
                >
                  {isOpen ? "Show less" : "Read full testimonial →"}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
