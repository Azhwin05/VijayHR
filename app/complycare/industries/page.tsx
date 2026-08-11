import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Industries — VijayHR ComplyCare",
  description:
    "Specialist compliance and payroll support across manufacturing, IT, retail, construction, logistics, BFSI, hospitality and mining.",
};

export default function IndustriesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Industries We Serve
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] leading-tight text-ink sm:text-[52px]">
            Built for Your Sector
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            We know what applies to your industry — sector-specific
            obligations, thresholds and nuances, applied from day one.
          </p>
        </Reveal>
      </section>

      <IndustriesGrid
        industries={[
          { name: "Manufacturing & Factories", challenge: "Factory licensing, registers, safety and a large contract workforce across shifts.", approach: "End-to-end Factories Act compliance, safety audits and contractor oversight under one desk.", image: "/industries/manufacturing.webp" },
          { name: "IT, ITeS & Technology", challenge: "Multi-state Shops & Establishments rules and rapid headcount changes.", approach: "Centralised multi-state registration, payroll and statutory tracking with real-time MIS.", image: "/industries/it.webp" },
          { name: "Construction & Real Estate", challenge: "BOCW cess, CLRA and constantly changing project sites.", approach: "Project-wise BOCW & CLRA registration, cess filing and site-level documentation.", image: "/industries/construction.webp" },
          { name: "Logistics & Warehousing", challenge: "Dispersed sites and a heavily contracted workforce.", approach: "Principal-employer protection, contractor due diligence and unified reporting.", image: "/industries/logistics.webp" },
          { name: "Retail & Multi-location", challenge: "Different state rules at every outlet and high attrition.", approach: "State-wise compliance calendars and standardised registers across all locations.", image: "/industries/retail.webp" },
          { name: "BFSI & Professional Services", challenge: "Establishment compliance and audit-grade documentation expectations.", approach: "Audit-ready registers, payroll precision and assessment support for scrutiny.", image: "/industries/bfsi.webp" },
          { name: "Hospitality & Catering", challenge: "Sector-specific rules, FSSAI and very high staff churn.", approach: "Catering & labour compliance, licensing and rapid onboarding documentation.", image: "/industries/hospitality.webp" },
          { name: "Mining & Plantations", challenge: "Mines Act and Plantation Labour Law with welfare obligations.", approach: "Specialist Mines & Plantation compliance, welfare records and authority liaison.", image: "/industries/mining.webp" },
        ]}
        deliveredTitle="Delivered Wherever You Operate"
        deliveredText="From a single Chennai factory to a multi-location national enterprise — we deliver under one engagement, one engagement manager and one monthly report."
        bullets={[
          "Pan-India delivery through a vetted associate network",
          "Central supervision and quality control from Chennai",
          "Unified reporting across all locations and entities",
          "One engagement manager. One point of accountability.",
        ]}
        stats={[
          { value: 8, label: "Industries served" },
          { value: 40, suffix: "+", label: "Central and state laws managed" },
          { text: "Pan-India", label: "Delivery footprint" },
          { value: 20, suffix: "+", label: "Years of domain expertise" },
        ]}
      />

      <CtaBand
        label="Get Started"
        title="Know your sector. Know your obligations."
        sub="An assessment maps exactly what applies to your industry and locations."
        actions={[
          { label: "Book Assessment →", href: "/complycare/contact" },
          { label: "View Services", href: "/complycare/services" },
        ]}
      />
    </main>
  );
}
