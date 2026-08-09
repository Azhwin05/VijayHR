import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import { complycareCategories, complycareServices } from "@/lib/data/complycare-services";

export const metadata: Metadata = {
  title: "Services — VijayHR ComplyCare",
  description:
    "11 compliance and payroll service verticals across 5 categories. Audit, advisory, factory, EHS and more.",
};

export default function ServicesIndex() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            What We Offer
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] leading-tight text-ink sm:text-[52px]">
            11 Verticals. 5 Categories. One Partner.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            End-to-end statutory compliance and payroll — from audits and
            advisory to factory law, EHS and vendor governance.
          </p>
        </Reveal>
      </section>

      {complycareCategories.map((cat, ci) => (
        <section
          key={cat.name}
          className={`mx-auto max-w-[1280px] px-6 py-16 sm:px-10 ${
            ci > 0 ? "border-t border-hairline" : ""
          }`}
        >
          <Reveal>
            <h2 className="font-display text-[24px] text-ink">{cat.name}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-muted">
              {cat.description}
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {cat.services.map((slug) => {
              const s = complycareServices.find((x) => x.slug === slug)!;
              return (
                <Reveal key={slug} delay={0.05}>
                  <h3 className="font-display text-[18px] text-ink">{s.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {s.tagline}
                  </p>
                  <div className="mt-4">
                    <TextLink href={`/complycare/services/${s.slug}`}>
                      Learn more →
                    </TextLink>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      ))}

      <CtaBand
        label="Get Started"
        title="Not sure which service you need?"
        sub="Book an assessment. We map only what applies to you — no upselling."
        actions={[{ label: "Book Assessment →", href: "/complycare/contact" }]}
      />
    </main>
  );
}
