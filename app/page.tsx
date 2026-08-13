import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
          <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-24 sm:px-10 sm:pt-32">
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
