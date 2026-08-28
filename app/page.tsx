import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import ClientLogosGrid from "@/components/sections/ClientLogosGrid";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
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
          <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-24 text-center sm:px-10 sm:pt-32">
            <Reveal as="p" className="mb-7 text-[12px] font-medium uppercase tracking-[0.18em] text-ink/50">
              Since 2002 · Chennai-Headquartered · Pan-India Delivery
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mx-auto max-w-3xl text-[42px] leading-[1.03] text-ink sm:text-[66px]">
                One Group.
                <br />
                <span className="editorial italic text-ink/45">
                  Two Ways We Take Care of Your Business.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.65] text-ink/65">
                Vijay Associates Group brings together specialist payroll &amp;
                compliance management and on-demand HR partnership — so you can
                hand off the complexity and focus on growth.
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              <TextLink href="/complycare">ComplyCare →</TextLink>
              <TextLink href="/peoplecare">PeopleCare →</TextLink>
            </Reveal>
          </div>
        </section>

        <ClientLogosGrid
          eyebrow="Trusted By"
          title="Organisations That Rely On Us"
          description="Across manufacturing, IT, real estate and more — companies trust the Vijay Associates Group for their compliance and people needs."
          logos={clientLogos}
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
                "We opted for PF services and had an excellent experience. The service was professional, responsive, and well-coordinated throughout. We truly appreciate the excellent support and coordination extended to Avira Digital.",
                "Wishing the team continued success and the very best for their expansion into HR Compliance Care. We look forward to continuing our association.",
              ],
            },
            {
              company: "Swami Vivekananda Rural Development Society (Single Teacher Schools)",
              pullQuote: "Excellent service and support, along with clear guidance and timely assistance throughout our association.",
              paragraphs: [
                "We express our sincere appreciation for the services provided. The team has demonstrated excellent service and support, along with clear guidance on the subject and timely assistance throughout our association.",
                "We appreciate the professionalism and commitment shown and look forward to continuing our association.",
              ],
            },
            {
              company: "Seertree Global Services Private Limited",
              pullQuote: "Highly professional, responsive, and dependable in handling our compliance needs.",
              paragraphs: [
                "We have been working with the team for managing our statutory compliance requirements. They have been highly professional, responsive, and dependable in handling our compliance needs.",
                "They provide timely guidance and updates on regulatory changes, ensuring that our statutory obligations are managed efficiently and accurately.",
                "We appreciate their proactive approach, attention to detail, and continued support in helping us maintain smooth and compliant HR operations.",
                "We are happy to recommend them as a reliable partner for statutory and labour law compliance services.",
              ],
            },
            {
              company: "EGUARDIAN Global Services India Limited",
              pullQuote: "More than just a service provider — a trusted partner in our India operations.",
              heading: "A Trusted Partner for Our India Operations",
              paragraphs: [
                "EGUARDIAN Global Services India Limited is a subsidiary of EGUARDIAN Lanka Private Limited, with operations across four countries in the APAC region and an active presence in more than 10 countries.",
                "When we established our operations in India over two years ago, ensuring 100% compliance with Indian labour laws was one of our key priorities. As we were at a start-up stage at the time, navigating the complexities of local statutory and labour requirements was a significant challenge.",
                "That was when we found Ms. Indu and her team. Their expertise and proactive support have made our journey towards legal and statutory compliance remarkably seamless.",
                "From A to Z, the team has supported us every step of the way. Whether it is providing timely guidance, addressing compliance requirements, or helping us navigate regulatory matters, they are always accessible and responsive.",
                "What we value most is their commitment to ensuring that we remain compliant and avoid unnecessary penalties or complications arising from missed deadlines.",
                "They have been more than just a service provider to us—they have been a trusted partner in our India operations. We highly recommend their services to any organisation looking for reliable, responsive, and knowledgeable compliance support.",
              ],
            },
          ]}
        />

        {/* Two brands */}
        <section className="mx-auto max-w-[1280px] px-6 py-24 text-center sm:px-10 sm:py-28">
          <Reveal>
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink/45">
              What We Do
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mx-auto mt-5 max-w-xl text-[32px] leading-[1.1] text-ink sm:text-[42px]">
              Two Focused Practices, One Accountable Group
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
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

        <CtaBand
          label="Get Started"
          title="Not sure which team you need?"
          sub="Reach out and we'll route you to the right specialists — compliance, people, or both."
          actions={[
            { label: "Contact ComplyCare →", href: "/complycare/contact" },
            { label: "Contact PeopleCare →", href: "/peoplecare" },
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
              { label: "Solutions", href: "/peoplecare" },
              { label: "About", href: "/peoplecare" },
              { label: "Contact", href: "/peoplecare" },
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
