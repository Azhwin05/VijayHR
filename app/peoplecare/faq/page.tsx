import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import TextLink from "@/components/ui/TextLink";

export const metadata: Metadata = {
  title: "FAQs | VijayHR PeopleCare",
  description:
    "Answers on HR Partners on Demand, our delivery model, engagement tiers and how VijayHR PeopleCare works alongside VijayHR ComplyCare.",
};

const groups = [
  {
    title: "HR Partners on Demand",
    items: [
      { q: "What is “HR Partners on Demand”?", a: "Experienced HR professionals and strategic HR leadership without the cost of a full in-house HR function — we become an extension of your leadership team and own the people agenda." },
      { q: "Do your HR Partners work at our location?", a: "Yes — a lean operational HR team can be embedded on-site, with senior leadership smart-sourced through PeopleCare." },
      { q: "Do our employees become your employees?", a: "No. Your employees remain yours; our HR professionals remain part of the PeopleCare team while embedded with you." },
      { q: "What roles can you deploy?", a: "HR Business Partners, HR Managers, and specialists in talent management, engagement, L&D, organization development and talent acquisition." },
    ],
  },
  {
    title: "Scope & Functions",
    items: [
      { q: "What HR functions do you manage?", a: "Ten core functions across the full employee lifecycle — from talent acquisition to retention and career development." },
      { q: "Do you handle statutory compliance and payroll?", a: "Not within PeopleCare — those are handled by our companion entity VijayHR ComplyCare, so you still get complete coverage from one group." },
      { q: "Do you work with manufacturing organizations?", a: "Yes — with specialised programs for shopfloor engagement, supervisor excellence, workforce stability, recognition, leadership pipelines and culture transformation." },
    ],
  },
  {
    title: "Engagement & Results",
    items: [
      { q: "What engagement models do you offer?", a: "Bronze (Advisory Retainer), Silver (HR Business Partner on Demand) and Gold (Complete HR Managed Services), customised to your size and scope." },
      { q: "How quickly do we see results?", a: "Engagements follow a structured 90-Day Transformation — Discover & Diagnose, Design & Build, Implement & Strengthen — with measurable deliverables and governance reviews." },
      { q: "How do we measure the value you deliver?", a: "Through a Business Impact Dashboard and a governance cadence of monthly, quarterly and annual reviews." },
      { q: "How do we get started?", a: "Book a consultation — we'll understand your priorities, recommend the right model and begin with a diagnosis." },
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
            Answers on HR Partners on Demand, our delivery model, engagement
            tiers and how we work alongside VijayHR ComplyCare. If you
            don&rsquo;t find what you need, talk to our team.
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
            An HR specialist responds within one business day. No call
            centres, no wait times.
          </p>
          <div className="mt-6">
            <TextLink href="/peoplecare/contact">Talk to Our Team →</TextLink>
          </div>
        </div>
      </section>
    </main>
  );
}
