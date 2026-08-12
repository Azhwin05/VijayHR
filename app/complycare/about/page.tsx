import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import Leadership from "@/components/sections/Leadership";
import WhyChoose from "@/components/sections/WhyChoose";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About — VijayHR ComplyCare",
  description:
    "Built on 20+ years of Vijay Associates' legacy. Learn about our mission, vision, leadership and values.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Our Story
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-none font-display text-[40px] leading-tight text-ink sm:whitespace-nowrap sm:text-[52px]">
            Compliance-First — Since 2002
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            VijayHR ComplyCare carries forward two decades of Vijay
            Associates&rsquo; unbroken track record — now as a dedicated
            payroll and labour-law compliance company.
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
          <h2 className="mt-4 max-w-xl font-display text-[30px] leading-tight text-ink sm:text-[36px]">
            India&rsquo;s Accountable Compliance Partner
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-ink/80">
              VijayHR ComplyCare Private Limited is a Pan-India payroll and
              labour-law compliance partner, built on the 20+ year legacy of
              the Vijay Associates Group. We exist to make compliance
              effortless — accurate payroll and complete statutory coverage
              under one accountable partner.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[15px] leading-relaxed text-ink/80">
              We serve mid-to-large enterprises across manufacturing, IT,
              retail, construction, logistics and more — handling the
              obligations that protect your business so your teams can focus
              on growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 gap-12 px-6 py-20 sm:grid-cols-2 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Our Vision
            </span>
            <p className="mt-4 font-display text-[20px] leading-snug text-ink">
              To be India&rsquo;s most trusted compliance and payroll partner
              — the firm enterprises rely on to stay protected, prepared and
              penalty-free.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Our Mission
            </span>
            <p className="mt-4 font-display text-[20px] leading-snug text-ink">
              To deliver accurate payroll and end-to-end statutory compliance
              with single-point ownership, technology-enabled visibility and
              the discipline of a firm that has done this for two decades.
            </p>
          </Reveal>
        </div>
      </section>

      <Leadership
        eyebrow="Leadership"
        title="Our Leadership"
        name="Vijay Kumar E"
        role="Managing Director"
        photo="/brand/vijay-kumar-e.webp"
        bio={[
          "Vijay Kumar E. brings over 25 years of experience in HR, Labour Law, Statutory Compliance, and Management Consulting. As the Managing Director of VijayHR ComplyCare Private Limited, he leads the organization with a vision to help businesses build strong, compliant, and sustainable workplaces.",
          "His expertise encompasses Labour & Employment Law, Statutory Compliance, Payroll Compliance, Industrial Relations, HR Advisory, Compliance Audits, POSH Compliance, Contract Labour, and Regulatory Consulting. Over the years, he has worked closely with organizations across diverse industries, helping them strengthen their compliance frameworks, manage regulatory risks, and improve HR practices.",
          "With a strong understanding of both business and regulatory requirements, he focuses on delivering practical, reliable, and customized solutions that enable organizations to remain compliant while supporting sustainable business growth.",
        ]}
        philosophyLabel="Our Leadership Philosophy"
        philosophy="Building compliant workplaces that enable businesses and people to grow with confidence."
      />

      <WhyChoose
        eyebrow="What We Stand For"
        title="Our Values"
        description="The four principles that guide every engagement, every filing and every client relationship."
        items={[
          { title: "Integrity", text: "We do what is right for the client, even when no one is checking." },
          { title: "Precision", text: "In compliance and payroll, accuracy is not a goal — it is the baseline." },
          { title: "Accountability", text: "We own outcomes end-to-end and stand behind every filing we make." },
          { title: "Expertise", text: "Two decades of domain depth, applied to every engagement." },
        ]}
      />

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Legal Identity
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl font-display text-[26px] leading-tight text-ink">
              Registered Entity
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              VijayHR ComplyCare Private Limited is incorporated under the
              Companies Act, 2013 — giving our clients the assurance of a
              structured, accountable corporate entity.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <Rule />
            <dl className="mt-8 grid grid-cols-1 gap-6 text-[14px] sm:grid-cols-2">
              <div>
                <dt className="text-muted">Registered Name</dt>
                <dd className="mt-1 text-ink">VijayHR ComplyCare Private Limited</dd>
              </div>
              <div>
                <dt className="text-muted">CIN</dt>
                <dd className="mt-1 text-ink">U70200TN2026PTC193066</dd>
              </div>
              <div>
                <dt className="text-muted">GST</dt>
                <dd className="mt-1 text-ink">33AAMCV2147E1ZG</dd>
              </div>
              <div>
                <dt className="text-muted">PAN</dt>
                <dd className="mt-1 text-ink">AAMCV2147E</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-muted">Registered Office</dt>
                <dd className="mt-1 text-ink">
                  No. 106, Kanaga Durga Complex, 2nd Floor, Gangai Amman Koil
                  Street, Vadapalani, Chennai — 600026
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand
        label="Work With Us"
        title="Ready to partner with a firm that owns the outcome?"
        sub="Book an assessment — no obligation, just honest advice."
        actions={[
          { label: "Book Assessment →", href: "/complycare/contact" },
          { label: "Explore Services", href: "/complycare/services" },
        ]}
      />
    </main>
  );
}
