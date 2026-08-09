import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import { complycareServices } from "@/lib/data/complycare-services";

export const metadata: Metadata = {
  title: "Services — VijayHR ComplyCare",
  description:
    "11 compliance and payroll service verticals. Audit, advisory, factory, EHS and more.",
};

// Compliance-first ordering — payroll last.
const order = [
  "labour-law",
  "audits",
  "advisory",
  "systems",
  "representation",
  "training",
  "factory",
  "multi-sector",
  "ehs",
  "vendor",
  "payroll",
];
const orderedServices = order.map(
  (slug) => complycareServices.find((s) => s.slug === slug)!
);

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
            11 Verticals. One Partner.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            End-to-end statutory compliance and payroll — from audits and
            advisory to factory law, EHS and vendor governance.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {orderedServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <span className="font-display text-[13px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[18px] text-ink">
                {s.name}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {s.tagline}
              </p>
              <div className="mt-4">
                <TextLink href={`/complycare/services/${s.slug}`}>
                  Learn more →
                </TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        label="Get Started"
        title="Not sure which service you need?"
        sub="Book an assessment. We map only what applies to you — no upselling."
        actions={[{ label: "Book Assessment →", href: "/complycare/contact" }]}
      />
    </main>
  );
}
