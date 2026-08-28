import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChoose from "@/components/sections/WhyChoose";
import ChallengeSolution from "@/components/sections/ChallengeSolution";
import ProcessSteps from "@/components/sections/ProcessSteps";
import IndustryCards from "@/components/sections/IndustryCards";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
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
  { name: "Employment & HR Documentation", tagline: "Appointment letters, policies and employment records — drafted right and kept current.", href: "/complycare/services/hr-documentation", image: "https://res.cloudinary.com/dmhonzqrm/image/upload/v1786906947/Employee_HR_Documentation_ndsdfn.webp" },
  { name: "Compliance Assessment & Advisory", tagline: "Catch exposure early — with expert guidance on every regulatory change.", href: "/complycare/services/advisory", image: "/services/advisory-v2.webp" },
  { name: "Compliance Training & Capacity Building", tagline: "Build the in-house capability your HR, Admin and Ops teams need.", href: "/complycare/services/training", image: "/services/training-v2.webp" },
  { name: "Factory Compliance & Industrial Support", tagline: "Specialist Factories Act support for manufacturing operations.", href: "/complycare/services/factory", image: "/services/factory-v2.webp" },
  { name: "POSH Compliance", tagline: "Comprehensive workplace protection and POSH compliance — promoting a safe, respectful and compliant workplace.", href: "/complycare/services/posh", image: "/services/posh-v2.webp" },
  { name: "Centralised Systems & Reporting", tagline: "Real-time visibility into compliance across every statute, location and entity.", href: "/complycare/services/systems", image: "/services/systems-v2.webp" },
  { name: "Environmental, Pollution Control & EHS", tagline: "Pollution Control consents and waste management, handled end-to-end.", href: "/complycare/services/ehs", image: "/services/ehs-v2.webp" },
  { name: "Payroll Management", tagline: "Accurate, statutory-integrated payroll — paid right, paid on time, every month.", href: "/complycare/services/payroll", image: "/services/payroll-v2.webp" },
  { name: "Compliance Management", tagline: "One accountable partner managing your entire compliance programme, end-to-end.", href: "/complycare/services/compliance-management", image: "https://res.cloudinary.com/dmhonzqrm/image/upload/v1786906946/Compliance_Management_dslp85.webp" },
];

export default function ComplyCareHome() {
  return (
    <main>
      <Hero
        heading="Compliance without Compromise."
        emphasis="Payroll without Errors."
        sub="End-to-end statutory compliance and accurate payroll under one accountable partner — built on 24+ years of Vijay Associates' legacy."
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
          { title: "24+ years of legacy", text: "Backed by the Vijay Associates Group's uninterrupted track record since 2002." },
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

      <ClientTestimonials
        eyebrow="Client Voices"
        title="What Our Clients Say"
        description="Real feedback from organisations we partner with across compliance and payroll."
        items={[
          {
            company: "Avira Digital",
            pullQuote: "The service was professional, responsive, and well-coordinated throughout.",
            paragraphs: [
              "We opted for PF services from Vijay Associates and had an excellent experience. The service was professional, responsive, and well-coordinated throughout. We truly appreciate the excellent support and coordination extended to Avira Digital.",
              "Wishing Vijay Associates continued success and the very best for their expansion into HR Compliance Care. We look forward to continuing our association.",
            ],
          },
          {
            company: "Swami Vivekananda Rural Development Society (Single Teacher Schools)",
            pullQuote: "Excellent service and support, along with clear guidance and timely assistance throughout our association.",
            paragraphs: [
              "We express our sincere appreciation for the services provided by Vijay Associates. The team has demonstrated excellent service and support, along with clear guidance on the subject and timely assistance throughout our association.",
              "We appreciate the professionalism and commitment of Vijay Associates and look forward to continuing our association.",
            ],
          },
          {
            company: "Seertree Global Services Private Limited",
            pullQuote: "Highly professional, responsive, and dependable in handling our compliance needs.",
            paragraphs: [
              "We have been working with Vijay Associates for managing our statutory compliance requirements. The team has been highly professional, responsive, and dependable in handling our compliance needs.",
              "They provide timely guidance and updates on regulatory changes, ensuring that our statutory obligations are managed efficiently and accurately.",
              "We appreciate their proactive approach, attention to detail, and continued support in helping us maintain smooth and compliant HR operations.",
              "We are happy to recommend Vijay Associates as a reliable partner for statutory and labour law compliance services.",
            ],
          },
          {
            company: "EGUARDIAN Global Services India Limited",
            pullQuote: "More than just a service provider — a trusted partner in our India operations.",
            heading: "A Trusted Partner for Our India Operations",
            paragraphs: [
              "EGUARDIAN Global Services India Limited is a subsidiary of EGUARDIAN Lanka Private Limited, with operations across four countries in the APAC region and an active presence in more than 10 countries.",
              "When we established our operations in India over two years ago, ensuring 100% compliance with Indian labour laws was one of our key priorities. As we were at a start-up stage at the time, navigating the complexities of local statutory and labour requirements was a significant challenge.",
              "That was when we found Ms. Indu and her team at Vijay Associates. Their expertise and proactive support have made our journey towards legal and statutory compliance remarkably seamless.",
              "From A to Z, Vijay Associates has supported us every step of the way. Whether it is providing timely guidance, addressing compliance requirements, or helping us navigate regulatory matters, the team is always accessible and responsive.",
              "What we value most is their commitment to ensuring that we remain compliant and avoid unnecessary penalties or complications arising from missed deadlines.",
              "Vijay Associates has been more than just a service provider to us—they have been a trusted partner in our India operations. We highly recommend their services to any organisation looking for reliable, responsive, and knowledgeable compliance support.",
            ],
          },
        ]}
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
