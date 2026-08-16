import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/sections/CtaBand";
import ServiceRows from "@/components/sections/ServiceRows";
import { complycareServices } from "@/lib/data/complycare-services";

const IMAGES: Record<string, string> = {
  "labour-law": "/services/labour-law-v2.webp",
  vendor: "/services/vendor-v2.webp",
  audits: "/services/audits-v2.webp",
  advisory: "/services/advisory-v2.webp",
  training: "/services/training-v2.webp",
  factory: "/services/factory-v2.webp",
  posh: "/services/posh-v2.webp",
  systems: "/services/systems-v2.webp",
  ehs: "/services/ehs-v2.webp",
  payroll: "/services/payroll-v2.webp",
  "hr-documentation": "https://res.cloudinary.com/dmhonzqrm/image/upload/v1786906947/Employee_HR_Documentation_ndsdfn.webp",
  "compliance-management": "https://res.cloudinary.com/dmhonzqrm/image/upload/v1786906946/Compliance_Management_dslp85.webp",
};

export const metadata: Metadata = {
  title: "Services — VijayHR ComplyCare",
  description:
    "12 compliance and payroll service verticals. Audit, advisory, factory, EHS and more.",
};

const order = [
  "labour-law",
  "vendor",
  "audits",
  "hr-documentation",
  "advisory",
  "training",
  "factory",
  "posh",
  "systems",
  "ehs",
  "payroll",
  "compliance-management",
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
            12 Verticals. One Partner.
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
        <ServiceRows
          items={orderedServices.map((s) => ({
            name: s.name,
            tagline: s.tagline,
            href: `/complycare/services/${s.slug}`,
            image: IMAGES[s.slug],
          }))}
        />
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
