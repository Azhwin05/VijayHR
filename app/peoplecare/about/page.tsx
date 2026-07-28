import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import WhyChoose from "@/components/sections/WhyChoose";
import Ecosystem from "@/components/sections/Ecosystem";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About VijayHR PeopleCare | HR Partners on Demand",
  description:
    "The HR, talent and organizational-effectiveness division of Vijay Associates Group — building great workplaces through people, culture and leadership.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            About Us
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[38px] leading-tight text-ink sm:text-[50px]">
            We Build Great Workplaces Through People, Culture &amp; Leadership.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            The Human Resources, Talent Development and Organizational
            Effectiveness division of Vijay Associates Group.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Who We Are
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl font-display text-[28px] leading-tight text-ink sm:text-[34px]">
            An Extension of Your Leadership Team
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-ink/80">
              VijayHR PeopleCare provides strategic HR leadership and
              comprehensive people-management solutions to organizations that
              need experienced HR expertise without maintaining a large
              in-house HR department. We act as an extension of our
              clients&rsquo; leadership teams — providing experienced HR
              professionals, structured people processes and proven talent
              frameworks.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[15px] leading-relaxed text-ink/80">
              Our role goes beyond HR administration: we build cultures that
              inspire people, develop leaders who drive performance, and
              create workplaces where employees thrive and businesses
              succeed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Our Philosophy
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl font-display text-[28px] leading-tight text-ink">
              People First. Growth Always.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink/80">
              Every successful organization is built on the strength of its
              people. Technology, infrastructure and processes support growth
              — but people create innovation, serve customers, solve problems
              and drive sustainable success. When people grow, businesses
              grow. When people thrive, organizations flourish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
        <Reveal>
          <h2 className="max-w-xl font-display text-[24px] leading-tight text-ink">
            HR Partners on Demand
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink/80">
            Our flagship model gives organizations access to experienced HR
            professionals and strategic HR leadership without the cost and
            complexity of a full in-house HR function. We become an
            extension of your leadership team and take ownership of the
            people agenda.
          </p>
        </Reveal>
      </section>

      <WhyChoose
        eyebrow="What We Stand For"
        title="Our Values"
        description="The principles that guide every engagement and every people decision we own."
        items={[
          { title: "People First", text: "People create success. We put them at the centre of every decision." },
          { title: "Growth Always", text: "When people grow, businesses grow. We build capability that compounds." },
          { title: "Ownership", text: "We own the people agenda as an extension of your leadership team." },
          { title: "Expertise", text: "Senior HR leadership, backed by two decades of Group legacy." },
        ]}
      />

      <Ecosystem
        title="The Vijay Associates Group Ecosystem"
        text="PeopleCare handles people, culture, talent and leadership; our companion entity VijayHR ComplyCare handles payroll and statutory compliance; Vijay Associates Group can deploy optional administration and facilities support. One trusted relationship across People, Talent and Compliance."
        pillars={[
          { name: "VijayHR PeopleCare", text: "People, culture, talent and leadership.", current: true },
          { name: "VijayHR ComplyCare", text: "Payroll and statutory compliance — PF, ESI, PT, filings, audits." },
          { name: "Vijay Associates Group", text: "Optional administration and facilities support." },
        ]}
      />

      <CtaBand
        label="Work With Us"
        title="Ready to make people your competitive advantage?"
        sub="Book a free consultation — no obligation, just honest advice."
        actions={[
          { label: "Partner With Us →", href: "/peoplecare/contact" },
          { label: "Explore Solutions", href: "/peoplecare/solutions" },
        ]}
      />
    </main>
  );
}
