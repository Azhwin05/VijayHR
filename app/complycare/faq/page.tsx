import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "FAQ — VijayHR ComplyCare",
  description:
    "18 questions answered on compliance, pricing and getting started with VijayHR ComplyCare.",
};

const groups = [
  {
    title: "Compliance",
    items: [
      { q: "Which labour laws apply to my company?", a: "It depends on your industry, employee strength, number of locations and states of operation — India has 40+ central acts plus numerous state rules. We map exactly which apply during onboarding." },
      { q: "How do the new Labour Codes affect my obligations?", a: "India's four Labour Codes came into force on 21 November 2025, consolidating 29 central laws. We help you re-baseline against the new Codes and transition smoothly." },
      { q: "Do you provide a compliance calendar?", a: "Yes — a live compliance calendar tracks every applicable due date with reminders, supported by monthly MIS." },
      { q: "Can you maintain our statutory registers?", a: "Yes — all prescribed registers are maintained, validated and kept inspection-ready." },
      { q: "Do you cover multiple states and entities?", a: "Yes — Pan-India delivery across multiple states and entities, with centralised oversight and unified reporting." },
      { q: "What is a compliance audit and do I need one?", a: "An independent, risk-classified assessment of your true compliance position. It's the recommended starting point for most new engagements." },
      { q: "Do you handle environmental and factory compliance?", a: "Yes — Factories Act, SPCB consents (CTE/CTO) and all major waste-management categories are within our scope." },
      { q: "Are we liable for our contractors' non-compliance?", a: "As Principal Employer you can carry significant liability under CLRA and BOCW. Our vendor compliance service provides structured oversight that protects you." },
      { q: "What happens during a statutory inspection?", a: "You call us. A Nodal Officer responds within 24 hours, prepares documentation and represents you through inspection and resolution." },
      { q: "Do you give real-time visibility into compliance status?", a: "Yes — centralised dashboards show real-time status by statute, location and entity, with monthly MIS and exception reports." },
    ],
  },
  {
    title: "Pricing & Engagement",
    items: [
      { q: "How are your fees structured?", a: "Typically a one-time audit fee plus a monthly retainer scoped to your locations, headcount and applicable services. Final commercials are confirmed in a Schedule of Services and Fees." },
      { q: "Will I get surprise invoices?", a: "No. Scope is fixed at the audit stage. Representation, special audits and training are billed only as agreed; out-of-pocket costs are reimbursed at actuals." },
      { q: "Do I pay for services I don't need?", a: "No — we map only the services that apply to you, so you pay for relevant scope, not a generic bundle." },
      { q: "Is there a long lock-in?", a: "Engagements are structured to be fair to both sides; terms, notice periods and renewals are set out clearly in the agreement." },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { q: "How do we get started?", a: "Book an assessment. We review your current posture, map applicable obligations and give you an honest written assessment — no obligation." },
      { q: "How quickly can you start?", a: "Onboarding and scoping begin in Week 1, with a baseline audit in Week 2 and a gap report by Week 3; ongoing managed services begin from Month 2." },
      { q: "Can you take over from our existing consultant?", a: "Yes — this is the most common starting point. We run a structured transition: baseline audit, register reconciliation and calendar handover, working from your records." },
      { q: "Is your service available across India?", a: "Yes — delivery is Pan-India through our managed associate network, with centralised oversight and reporting from Chennai." },
    ],
  },
];

export default function FaqPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Common Questions
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] leading-tight text-ink sm:text-[52px]">
            Frequently Asked Questions
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            18 answers across compliance, pricing and getting started. If
            you don&rsquo;t find what you need, contact us — a specialist
            responds within one business day.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-24 sm:px-10">
        <FaqAccordion groups={groups} />
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[1280px] px-6 py-20 text-center sm:px-10">
          <h2 className="font-display text-[24px] text-ink">
            Still have questions?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-muted">
            A specialist responds within one business day. No call centres,
            no wait times.
          </p>
          <div className="mt-6">
            <TextLink href="/complycare/contact">Contact Us →</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
