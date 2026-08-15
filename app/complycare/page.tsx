import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChoose from "@/components/sections/WhyChoose";
import ChallengeSolution from "@/components/sections/ChallengeSolution";
import ProcessSteps from "@/components/sections/ProcessSteps";
import IndustryCards from "@/components/sections/IndustryCards";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "VijayHR ComplyCare — Compliance without Compromise. Payroll without Errors.",
  description:
    "Pan-India labour-law compliance and payroll partner. Accurate statutory coverage and payroll, single-point ownership.",
};

const services = [
  { name: "Labour Law & Statutory Compliance", tagline: "Every applicable central and state obligation — tracked, filed and audit-ready.", href: "/complycare/services/labour-law", image: "/services/labour-law-v2.webp" },
  { name: "Vendor Compliance & Third-Party Governance", tagline: "Protect yourself as Principal Employer from third-party exposure.", href: "/complycare/services/vendor", image: "/services/vendor-v2.webp" },
  { name: "Compliance Audits", tagline: "An independent, risk-classified view of where you truly stand.", href: "/complycare/services/audits", image: "/services/audits-v2.webp" },
  { name: "Employment & HR Documentation", tagline: "Appointment letters, policies and employment records — drafted right and kept current.", href: "/complycare/services/hr-documentation" },
  { name: "Compliance Assessment & Advisory", tagline: "Catch exposure early — with expert guidance on every regulatory change.", href: "/complycare/services/advisory", image: "/services/advisory-v2.webp" },
  { name: "Compliance Training & Capacity Building", tagline: "Build the in-house capability your HR, Admin and Ops teams need.", href: "/complycare/services/training", image: "/services/training-v2.webp" },
  { name: "Factory Compliance & Industrial Support", tagline: "Specialist Factories Act support for manufacturing operations.", href: "/complycare/services/factory", image: "/services/factory-v2.webp" },
  { name: "POSH Compliance", tagline: "Comprehensive workplace protection and POSH compliance — promoting a safe, respectful and compliant workplace.", href: "/complycare/services/posh", image: "/services/posh-v2.webp" },
  { name: "Centralised Systems & Reporting", tagline: "Real-time visibility into compliance across every statute, location and entity.", href: "/complycare/services/systems", image: "/services/systems-v2.webp" },
  { name: "Environmental, Pollution Control & EHS", tagline: "Pollution Control consents and waste management, handled end-to-end.", href: "/complycare/services/ehs", image: "/services/ehs-v2.webp" },
  { name: "Employee Statutory Benefits Management", tagline: "PF, ESI, gratuity and maternity benefits — coverage, contributions and compliance, managed end-to-end.", href: "/complycare/services/statutory-benefits" },
  { name: "Compliance Management", tagline: "One accountable partner managing your entire compliance programme, end-to-end.", href: "/complycare/services/compliance-management" },
];

export default function ComplyCareHome() {
  return (
    <main>
      <Hero
        label="Pan-India Compliance & Payroll Partner"
        heading="Compliance without Compromise."
        emphasis="Payroll without Errors."
        sub="End-to-end statutory compliance and accurate payroll under one accountable partner — built on 20+ years of Vijay Associates' legacy."
        ctas={[
          { label: "Book Assessment →", href: "/complycare/contact" },
          { label: "Our Services", href: "/complycare/services", variant: "outline" },
        ]}
        center
      />

      <ServicesGrid
        eyebrow="What We Do"
        title="12 Service Verticals, One Accountable Partner"
        description="From factory compliance to payroll, audits to representation — everything your organisation needs, under one roof."
        items={services}
        center
      />

      <WhyChoose
        eyebrow="Why Choose Us"
        title="The VijayHR Difference"
        description="Six reasons why enterprises trust us to own their compliance and payroll — not just advise on it."
        center
        items={[
          { title: "Compliance-First philosophy", text: "We eliminate legal exposure before optimising anything else — ownership of the outcome, not advice from a distance." },
          { title: "Single-point ownership", text: "One accountable partner from audit to monitoring to representation. No gaps, no finger-pointing." },
          { title: "20+ years of legacy", text: "Backed by the Vijay Associates Group's uninterrupted track record since 2002." },
          { title: "Audit-ready, always", text: "Structured, documented, inspection-ready records at all times — so you face any authority prepared." },
          { title: "Technology-enabled", text: "Real-time dashboards give complete visibility across statutes, locations and entities." },
          { title: "Scalable model", text: "Single-site to multi-location, multi-entity, multi-sector — delivered Pan-India under central supervision." },
        ]}
      />

      <ChallengeSolution
        eyebrow="Challenges"
        title="The Problem We Solve"
        description="Every problem below has a structured, accountable solution."
        challenges={[
          "Missed statutory deadlines and surprise penalty notices.",
          "Payroll errors, wrong deductions and unhappy employees.",
          "Contractor non-compliance landing on the principal employer.",
          "No single view of compliance across locations.",
          "Scrambling to assemble records when an inspector arrives.",
          "Consultants who file when reminded and vanish in between.",
        ]}
        solutions={[
          "A live compliance calendar with 100% deadline adherence.",
          "Maker-checker payroll validation, paid on time.",
          "Vendor due diligence that shields you from third-party exposure.",
          "Real-time dashboards across every entity and site.",
          "Permanently audit-ready documentation, updated monthly.",
          "One accountable partner, always on call.",
        ]}
      />

      <ProcessSteps
        eyebrow="How We Work"
        title="A Four-Phase Engagement"
        description="From baseline audit to continuous monitoring — a structured journey that builds lasting compliance."
        center
        steps={[
          { title: "Assess", text: "A thorough baseline audit establishes your current landscape, gaps and risks." },
          { title: "Align", text: "We agree corrective actions, ownership, escalation and the monitoring framework." },
          { title: "Implement", text: "Corrective actions, registrations and team training — executed within agreed timelines." },
          { title: "Monitor", text: "Ongoing filings, MIS, dashboards, advisory and periodic re-audits." },
        ]}
      />

      <IndustryCards
        eyebrow="Industries"
        title="Built for Your Sector"
        description="Specialist knowledge across 8 industries — we know what applies to you."
        center
        industries={[
          { name: "Manufacturing & Factories", image: "/industries/manufacturing.webp" },
          { name: "IT, ITeS & Technology", image: "/industries/it.webp" },
          { name: "Construction & Real Estate", image: "/industries/construction.webp" },
          { name: "Logistics & Warehousing", image: "/industries/logistics.webp" },
          { name: "Retail & Multi-location", image: "/industries/retail.webp" },
          { name: "BFSI & Professional Services", image: "/industries/bfsi.webp" },
          { name: "Hospitality & Catering", image: "/industries/hospitality.webp" },
          { name: "Mining & Plantations", image: "/industries/mining.webp" },
        ]}
        ctaLabel="View All Industries"
        ctaHref="/complycare/industries"
      />

      <BenefitsGrid
        eyebrow="Client Benefits"
        title="What You Get"
        description="Six concrete outcomes our clients see when they partner with VijayHR ComplyCare."
        center
        items={[
          { title: "Accurate, on-time pay", text: "Monthly payroll with statutory deductions built in — accurate, 2–3 day turnaround.", icon: "clock" },
          { title: "Lower risk", text: "Penalties, prosecutions and reputational damage avoided before they arise.", icon: "shield" },
          { title: "Freed-up teams", text: "HR and Finance focus on people and strategy, not month-end processing.", icon: "users" },
          { title: "Total visibility", text: "Know your compliance and payroll status by location and entity, in real time.", icon: "eye" },
          { title: "Inspection confidence", text: "Face any authority with complete, ready-to-present documentation.", icon: "check-shield" },
          { title: "Predictable cost", text: "A transparent retainer in place of unpredictable penalty exposure.", icon: "wallet" },
        ]}
        ctaLabel="Get Started →"
        ctaHref="/complycare/contact"
      />

      <CtaBand
        label="Get Started"
        title="Ready to make compliance effortless?"
        sub="Book a no-obligation assessment. A specialist responds within one business day."
        actions={[
          { label: "Book Assessment →", href: "/complycare/contact" },
          { label: "Call +91 94440 21222", href: "tel:+919444021222" },
        ]}
      />
    </main>
  );
}
