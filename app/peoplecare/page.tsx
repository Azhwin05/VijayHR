import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import DeliverPanel from "@/components/sections/DeliverPanel";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChoose from "@/components/sections/WhyChoose";
import ChallengeSolution from "@/components/sections/ChallengeSolution";
import ProcessSteps from "@/components/sections/ProcessSteps";
import IndustriesTeaser from "@/components/sections/IndustriesTeaser";
import BenefitsGrid from "@/components/sections/BenefitsGrid";
import Ecosystem from "@/components/sections/Ecosystem";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "VijayHR PeopleCare | HR Partners on Demand",
  description:
    "Strategic HR leadership, employee engagement and talent development under one accountable people partner — built on 20+ years of Vijay Associates' legacy.",
};

const solutions = [
  { name: "Talent Acquisition & Workforce Planning", tagline: "Attract and hire the right people, faster.", href: "/peoplecare/solutions/talent-acquisition" },
  { name: "Onboarding & Employee Experience", tagline: "Strong first impressions that improve retention.", href: "/peoplecare/solutions/onboarding" },
  { name: "Performance Management", tagline: "Clarity, accountability and growth at every level.", href: "/peoplecare/solutions/performance-management" },
  { name: "Learning & Development", tagline: "Capability building that compounds.", href: "/peoplecare/solutions/learning-development" },
  { name: "Employee Engagement & Culture", tagline: "Workplaces where people want to stay.", href: "/peoplecare/solutions/engagement-culture" },
  { name: "Leadership Development", tagline: "Managers and supervisors who drive performance.", href: "/peoplecare/solutions/leadership-development" },
  { name: "Organization Development", tagline: "Structures and processes built to scale.", href: "/peoplecare/solutions/organization-development" },
  { name: "Talent Management & Succession Planning", tagline: "Protecting your future leadership.", href: "/peoplecare/solutions/talent-succession" },
  { name: "Employee Communication", tagline: "Alignment from the boardroom to the shopfloor.", href: "/peoplecare/solutions/employee-communication" },
  { name: "Retention & Career Development", tagline: "Keeping your best people, longer.", href: "/peoplecare/solutions/retention-career" },
];

export default function PeopleCareHome() {
  return (
    <main>
      <Hero
        label="HR Partners on Demand"
        heading="Great Workplaces Aren't Hired."
        emphasis="They're Built."
        sub="Strategic HR leadership, employee engagement and talent development under one accountable people partner — built on 20+ years of Vijay Associates' legacy."
        ctas={[
          { label: "Book Consultation →", href: "/peoplecare/contact" },
          { label: "Our Solutions", href: "/peoplecare/solutions", variant: "outline" },
        ]}
        stats={[
          { value: 20, suffix: "+", label: "Years of Group legacy" },
          { value: 10, label: "Core HR functions" },
          { value: 3, label: "Flexible engagement tiers" },
          { value: 90, suffix: "-Day", label: "People transformation" },
        ]}
      />

      <DeliverPanel
        items={[
          { title: "Stronger retention", sub: "Lower attrition, teams that stay." },
          { title: "Leaders who deliver", sub: "Supervisors and managers built to perform." },
          { title: "Faster, better hiring", sub: "Right-fit talent, reduced cycle time." },
          { title: "Engagement you can measure", sub: "Dashboards, reviews and governance." },
        ]}
      />

      <ServicesGrid
        eyebrow="What We Do"
        title="10 Core HR Functions, One People Partner"
        description="From hiring to leadership development, engagement to succession — the entire employee lifecycle under one accountable partner."
        items={solutions}
      />

      <WhyChoose
        eyebrow="Why Choose Us"
        title="The VijayHR PeopleCare Difference"
        description="Six reasons organizations trust us to own their people agenda — not just advise on it."
        items={[
          { title: "People-First philosophy", text: "We build engagement, culture and capability first — ownership of the outcome, not advice from a distance." },
          { title: "Single-point ownership", text: "One accountable HR partner across the full employee lifecycle. No gaps, no hand-offs." },
          { title: "20+ years of Group legacy", text: "Backed by the Vijay Associates Group's uninterrupted track record since 2002." },
          { title: "Smart-sourced HR leadership", text: "Senior HR expertise embedded as part of your team — without full-time HR cost." },
          { title: "Measurable, governed outcomes", text: "Clear targets tracked through monthly, quarterly and annual reviews." },
          { title: "Scalable & flexible", text: "From advisory retainer to fully managed HR; single-site to multi-location." },
        ]}
      />

      <ChallengeSolution
        eyebrow="Challenges"
        title="The Problem We Solve"
        description="Every people challenge below has a structured, accountable solution."
        challenges={[
          "High attrition and the constant cost of re-hiring.",
          "Supervisors and managers promoted without being developed.",
          "Hiring that is slow, ad-hoc and misses on fit.",
          "Low engagement and a culture no one is actively shaping.",
          "No leadership pipeline — succession left to chance.",
          "People decisions made on instinct, with no metrics.",
        ]}
        solutions={[
          "Retention strategies, stay interviews and career pathing that keep your best people.",
          "Supervisor Excellence and first-time-manager tracks that build real leaders.",
          "Structured, workforce-planned hiring with reduced cycle time and better fit.",
          "Engagement surveys, action plans and culture initiatives owned end-to-end.",
          "High-potential development and succession plans that protect your future.",
          "A Business Impact Dashboard and a monthly / quarterly / annual review cadence.",
        ]}
      />

      <ProcessSteps
        eyebrow="How We Work"
        title="A 90-Day People Transformation"
        description="From diagnosis to embedded improvement — a structured journey with measurable deliverables at every phase."
        steps={[
          { title: "Discover & Diagnose", text: "Assess your workforce, culture and people priorities." },
          { title: "Design & Build", text: "Design the frameworks, programs and structures you need." },
          { title: "Implement & Strengthen", text: "Roll out, embed and continuously improve." },
          { title: "Continuous Governance", text: "Monthly leadership reviews, quarterly business reviews and annual people-strategy reviews keep outcomes visible." },
        ]}
      />

      <IndustriesTeaser
        eyebrow="Industries"
        title="Built for Your Sector"
        description="People practices tuned to your operating reality — with deep, specialised support for manufacturing."
        industries={[
          "Manufacturing & Factories",
          "IT/ITeS & Technology",
          "Retail & Multi-location",
          "Construction & Real Estate",
          "Logistics & Warehousing",
          "BFSI & Professional Services",
          "Hospitality & Catering",
          "Growing Enterprises",
        ]}
        ctaLabel="View All Industries"
        ctaHref="/peoplecare/industries"
      />

      <BenefitsGrid
        eyebrow="Client Benefits"
        title="What You Get"
        description="Six concrete outcomes organizations see when they partner with VijayHR PeopleCare."
        items={[
          { title: "Better retention", text: "Lower attrition and a more stable, committed workforce." },
          { title: "Stronger leaders", text: "Supervisors and managers equipped to perform." },
          { title: "Higher engagement", text: "Teams that are connected, motivated and productive." },
          { title: "Faster hiring", text: "Reduced cycle time and better-fit talent." },
          { title: "Enterprise-grade HR, lean cost", text: "Senior expertise without a full HR department." },
          { title: "Total visibility", text: "Engagement and people metrics, tracked in real time." },
        ]}
        ctaLabel="Get Started →"
        ctaHref="/peoplecare/contact"
      />

      <Ecosystem
        title="The Vijay Associates Group Ecosystem"
        text="One trusted relationship across People, Talent and Compliance."
        pillars={[
          { name: "VijayHR PeopleCare", text: "People, culture, talent and leadership.", current: true },
          { name: "VijayHR ComplyCare", text: "Statutory compliance and payroll — PF, ESI, PT, filings, audits." },
          { name: "Vijay Associates Group", text: "Optional administration and facilities support." },
        ]}
      />

      <CtaBand
        label="Get Started"
        title="Ready to build a workplace where people perform and grow?"
        sub="Book a no-obligation consultation. An HR specialist responds within one business day."
        actions={[
          { label: "Book Consultation →", href: "/peoplecare/contact" },
          { label: "Call +91 94440 21222", href: "tel:+919444021222" },
        ]}
      />
    </main>
  );
}
