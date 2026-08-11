import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Industries We Serve | VijayHR PeopleCare",
  description:
    "People practices tuned to your sector — with specialised HR support for manufacturing, plus IT, retail, construction, logistics, BFSI, hospitality and growing enterprises.",
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
            Built for Your Sector.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Deep, specialised support for manufacturing — and proven people
            practices across the sectors we serve.
          </p>
        </Reveal>
      </section>

      <IndustriesGrid
        industries={[
          { name: "Manufacturing & Factories", flagship: true, challenge: "Shopfloor disengagement, supervisor gaps and high workforce churn across shifts.", approach: "Specialised programs: shopfloor engagement, supervisor excellence, workforce stability, recognition, leadership pipelines and culture transformation." },
          { name: "IT, ITeS & Technology", challenge: "Rapid scaling, competitive talent markets and retention pressure.", approach: "Talent acquisition, engagement and career-development frameworks that keep high-demand talent longer." },
          { name: "Construction & Real Estate", challenge: "Project-based teams and dispersed, transient workforces.", approach: "Workforce planning, site-level leadership and retention strategies built for project cycles." },
          { name: "Logistics & Warehousing", challenge: "Dispersed sites and frontline workforce stability.", approach: "Frontline engagement, supervisor development and communication frameworks across sites." },
          { name: "Retail & Multi-location", challenge: "High attrition and inconsistent people practices across outlets.", approach: "Standardised onboarding, engagement and manager enablement across every location." },
          { name: "BFSI & Professional Services", challenge: "Performance culture and leadership-pipeline expectations.", approach: "Performance management, leadership development and succession planning at scale." },
          { name: "Hospitality & Catering", challenge: "Very high churn and service-culture consistency.", approach: "Rapid onboarding, recognition systems and engagement practices that reduce churn." },
          { name: "Growing Enterprises", challenge: "Scaling people processes without a full HR department.", approach: "Embedded HR leadership and org-development frameworks that scale with you." },
        ]}
      />

      <CtaBand
        label="Get Started"
        title="Ready to build a stronger workforce in your sector?"
        sub="Book a consultation — we'll map the people practices that fit your operating reality."
        actions={[
          { label: "Talk to Our Team →", href: "/peoplecare/contact" },
          { label: "View Solutions", href: "/peoplecare/solutions" },
        ]}
      />
    </main>
  );
}
