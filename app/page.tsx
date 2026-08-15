import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import ClientLogosGrid from "@/components/sections/ClientLogosGrid";
import clientLogos from "@/lib/data/client-logos.json";

export default function GroupHome() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header
        brand="Vijay Associates Group"
        tagline="Compliance & People, Under One Roof"
        homeHref="/"
        nav={[
          { label: "ComplyCare", href: "/complycare" },
          { label: "PeopleCare", href: "/peoplecare" },
        ]}
      />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-60"
            style={{
              background:
                "radial-gradient(120% 70% at 10% 0%, #F7F1E7 0%, transparent 62%), radial-gradient(90% 60% at 92% 6%, #EFF3E8 0%, transparent 60%)",
            }}
          />
          <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 pb-20 pt-24 sm:px-10 sm:pt-32 lg:grid-cols-[1fr_420px] lg:gap-10 xl:grid-cols-[1fr_460px]">
            <div>
              <Reveal as="p" className="mb-7 text-[12px] font-medium uppercase tracking-[0.18em] text-ink/50">
                Since 2002 · Chennai-Headquartered · Pan-India Delivery
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="max-w-4xl text-[42px] leading-[1.03] text-ink sm:text-[66px]">
                  One Group.
                  <br />
                  <span className="editorial italic text-ink/45">
                    Two Ways We Take Care of Your Business.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-ink/65">
                  Vijay Associates Group brings together specialist payroll &amp;
                  compliance management and on-demand HR partnership — so you can
                  hand off the complexity and focus on growth.
                </p>
              </Reveal>

              <Reveal delay={0.24} className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <TextLink href="/complycare">Compliance &amp; Payroll →</TextLink>
                <TextLink href="/peoplecare">HR Partners on Demand →</TextLink>
              </Reveal>

              <Reveal delay={0.3} className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-hairline pt-10">
                {[
                  { value: 20, suffix: "+", label: "Years of Legacy" },
                  { value: 500, suffix: "+", label: "Organisations Served" },
                  { value: 100, suffix: "%", label: "Audit-Ready, Always" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[28px] font-semibold tracking-[-0.02em] text-ink sm:text-[34px]">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-ink/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Duality panel — no group-level photography exists, so the
                "two ways" promise is made visual through the two brand
                accents themselves rather than a generic stock image. */}
            <Reveal delay={0.2} className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[20px] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.28)]">
                <Link
                  href="/complycare"
                  className="group relative flex h-[220px] flex-col justify-between overflow-hidden p-7"
                  style={{ backgroundColor: "#F9F2EF" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-10 text-[150px] font-bold leading-none tracking-tighter text-[#7A2331] opacity-[0.07]"
                  >
                    VHR
                  </span>
                  <span
                    aria-hidden
                    className="block h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: "#7A2331" }}
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#7A2331" }}>
                      Compliance &amp; Payroll
                    </p>
                    <p className="mt-2 text-[22px] leading-snug text-ink">
                      VijayHR ComplyCare
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/60 transition-colors group-hover:text-ink">
                      Explore →
                    </span>
                  </div>
                </Link>

                <Link
                  href="/peoplecare"
                  className="group relative flex h-[220px] flex-col justify-between overflow-hidden p-7"
                  style={{ backgroundColor: "#F1F4EA" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-10 text-[150px] font-bold leading-none tracking-tighter text-[#4B5A34] opacity-[0.07]"
                  >
                    VHR
                  </span>
                  <span
                    aria-hidden
                    className="block h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: "#4B5A34" }}
                  />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#4B5A34" }}>
                      HR Partners on Demand
                    </p>
                    <p className="mt-2 text-[22px] leading-snug text-ink">
                      VijayHR PeopleCare
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink/60 transition-colors group-hover:text-ink">
                      Explore →
                    </span>
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Two brands */}
        <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/45">
              What We Do
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 max-w-xl text-[32px] leading-[1.1] text-ink sm:text-[42px]">
              Two Focused Practices, One Accountable Group
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                accent: "#7A2331",
                tint: "#F9F2EF",
                kicker: "Labour-Law Compliance & Payroll",
                name: "VijayHR ComplyCare",
                body: "Pan-India payroll management and statutory compliance under one accountable partner — accurate, audit-ready, always on time.",
                points: ["12 service verticals", "Pan-India statutory coverage", "Single-point ownership"],
                cta: "Explore ComplyCare →",
                href: "/complycare",
              },
              {
                accent: "#4B5A34",
                tint: "#F1F4EA",
                kicker: "HR Partners on Demand",
                name: "VijayHR PeopleCare",
                body: "Flexible, senior HR partnership — people strategy, culture and operations, delivered exactly when and how your organisation needs it.",
                points: ["Fractional HR leadership", "Talent, culture & operations", "Scales with your team"],
                cta: "Explore PeopleCare →",
                href: "/peoplecare",
              },
            ].map((card, i) => (
              <Reveal
                key={card.href}
                delay={0.1 + i * 0.08}
                className="rounded-[14px] border border-black/[0.06] p-10 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.22)] sm:p-12"
                style={{ backgroundColor: card.tint }}
              >
                <span
                  aria-hidden
                  className="mb-7 block h-[3px] w-10 rounded-full"
                  style={{ backgroundColor: card.accent }}
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: card.accent }}>
                  {card.kicker}
                </p>
                <h3 className="mt-4 text-[28px] leading-snug text-ink">
                  {card.name}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/65">
                  {card.body}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-[13.5px] text-ink/70">
                      <span
                        aria-hidden
                        className="h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: card.accent }}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <TextLink href={card.href}>{card.cta}</TextLink>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <ClientLogosGrid
          eyebrow="Trusted By"
          title="Organisations That Rely On Us"
          description="Across manufacturing, IT, real estate and more — companies trust the Vijay Associates Group for their compliance and people needs."
          logos={clientLogos}
        />

        <CtaBand
          label="Get Started"
          title="Not sure which team you need?"
          sub="Reach out and we'll route you to the right specialists — compliance, people, or both."
          actions={[
            { label: "Contact ComplyCare →", href: "/complycare/contact" },
            { label: "Contact PeopleCare →", href: "/peoplecare/contact" },
          ]}
        />
      </main>

      <Footer
        brand="Vijay Associates Group"
        columns={[
          {
            title: "ComplyCare",
            links: [
              { label: "Services", href: "/complycare/services" },
              { label: "Industries", href: "/complycare/industries" },
              { label: "Contact", href: "/complycare/contact" },
            ],
          },
          {
            title: "PeopleCare",
            links: [
              { label: "Solutions", href: "/peoplecare/solutions" },
              { label: "About", href: "/peoplecare/about" },
              { label: "Contact", href: "/peoplecare/contact" },
            ],
          },
          {
            title: "Group",
            links: [{ label: "About", href: "/" }],
          },
        ]}
        legalLine={`© ${year} Vijay Associates Group. All rights reserved.`}
      />
    </>
  );
}
