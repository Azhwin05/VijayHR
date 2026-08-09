import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import type { ServiceDetail } from "@/lib/data/complycare-services";

export default function ServiceDetailPage({
  service,
  backHref,
  backLabel,
}: {
  service: ServiceDetail;
  backHref: string;
  backLabel: string;
}) {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <TextLink href={backHref}>← {backLabel}</TextLink>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            {service.category}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-[36px] leading-tight text-ink sm:text-[46px]">
            {service.name}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted">
            {service.tagline}
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-ink/80">
            {service.overview}
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-6 sm:px-10">
        <Rule />
      </div>

      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Key Challenges We Solve
          </span>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {service.challenges.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.06}>
              <h3 className="font-display text-[17px] text-ink">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {c.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              Our Approach
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-2xl font-display text-[22px] leading-snug text-ink">
              {service.approach}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            What&rsquo;s Included
          </span>
        </Reveal>
        <div className="mt-8 flex flex-col">
          {service.included.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[240px_1fr] sm:gap-6">
                <p className="font-display text-[16px] text-ink">{item.title}</p>
                <p className="text-[14px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
              {i < service.included.length - 1 && <Rule />}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              What You Gain
            </span>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {service.gains.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <h3 className="font-display text-[17px] text-ink">{g.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {g.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="border-t border-black/[0.06] surface-1">
          <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
            <Reveal>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                FAQs
              </span>
            </Reveal>
            <div className="mt-8 flex flex-col">
              {service.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className="py-6">
                    <p className="font-display text-[16px] text-ink">{f.q}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      {f.a}
                    </p>
                  </div>
                  {i < service.faqs.length - 1 && <Rule />}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        label="Get Started"
        title="Not sure which service you need?"
        sub="Book an assessment. We map only what applies to you — no upselling."
        actions={[{ label: "Book Assessment →", href: "/complycare/contact" }]}
      />
    </main>
  );
}
