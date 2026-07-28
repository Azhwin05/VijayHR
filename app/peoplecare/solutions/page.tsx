import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import { peoplecareSolutions } from "@/lib/data/peoplecare-solutions";

export const metadata: Metadata = {
  title: "HR Solutions & Services | VijayHR PeopleCare",
  description:
    "Ten core HR functions delivered through HR Partners on Demand — from talent acquisition to leadership development, with flexible Bronze / Silver / Gold engagement.",
};

const roles = [
  "HR Business Partners",
  "HR Managers",
  "Talent Management Specialists",
  "Employee Engagement Specialists",
  "Learning & Development Consultants",
  "Organization Development Experts",
  "Talent Acquisition Specialists",
];

const tiers = [
  { name: "Bronze", title: "HR Advisory Retainer", text: "Strategic HR guidance and advisory support, on demand." },
  { name: "Silver", title: "HR Business Partner on Demand", text: "A dedicated, embedded HR Business Partner driving your people agenda.", popular: true },
  { name: "Gold", title: "Complete HR Managed Services", text: "End-to-end ownership of your entire HR function." },
];

export default function SolutionsIndex() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Solutions
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] leading-tight text-ink sm:text-[52px]">
            A Complete People Function, Delivered as One Partnership.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Ten core capabilities, deployed by experienced HR Partners — scaled
            to your needs.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {peoplecareSolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06} className="bg-paper p-8">
              <span className="font-display text-[13px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[18px] leading-snug text-ink">
                {s.name}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {s.tagline}
              </p>
              <div className="mt-6">
                <TextLink href={`/peoplecare/solutions/${s.slug}`}>
                  Learn more →
                </TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Our Delivery Model
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl font-display text-[30px] leading-tight text-ink sm:text-[36px]">
              Smart-Sourced HR Leadership. Lean On-Site Support.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Senior HR leadership and specialists remain part of our team
              while functioning as an integral part of yours. We deploy HR
              Business Partners, HR Managers, and specialists in talent,
              engagement, learning, organization development and talent
              acquisition. A lean operational HR team can be embedded on-site.
              Your employees remain your employees — we help you manage,
              engage, develop and nurture them more effectively.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {roles.map((r) => (
              <span key={r} className="text-[14px] text-ink/75">
                {r}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Engagement & Investment Models
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl font-display text-[30px] leading-tight text-ink sm:text-[36px]">
            Choose Your Level of Partnership
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Commercials are customised by workforce size, locations and
            engagement scope.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08} className="border border-hairline p-8">
              {tier.popular && (
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
                  Most Popular
                </span>
              )}
              <h3 className="mt-2 font-display text-[20px] text-ink">
                {tier.name} — {tier.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {tier.text}
              </p>
              <div className="mt-6">
                <TextLink href="/peoplecare/contact">Find Out More →</TextLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Clear Boundaries
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl font-display text-[26px] leading-tight text-ink">
              What We Don&rsquo;t Manage
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              We focus exclusively on people, culture, talent, learning,
              leadership and organization development — so we do it
              exceptionally well. The rest is covered by the wider Group.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <Rule />
            <div className="mt-6 flex flex-col">
              {[
                { title: "Payroll & statutory compliance", text: "Handled by VijayHR ComplyCare." },
                { title: "Administration & facilities", text: "Handled by Vijay Associates Group." },
                { title: "Core business operations", text: "Remain with you." },
              ].map((item, i, arr) => (
                <div key={item.title}>
                  <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[280px_1fr]">
                    <p className="font-display text-[16px] text-ink">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-muted">{item.text}</p>
                  </div>
                  {i < arr.length - 1 && <Rule />}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        label="Get Started"
        title="Not sure which model fits?"
        sub="Book a free consultation. We recommend only the engagement you actually need."
        actions={[{ label: "Find the Right Model →", href: "/peoplecare/contact" }]}
      />
    </main>
  );
}
