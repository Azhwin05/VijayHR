import Reveal from "@/components/Reveal";
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
      <section className="mx-auto max-w-[1080px] px-6 pb-12 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <TextLink href={backHref}>← {backLabel}</TextLink>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            {service.category}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-[34px] leading-tight text-ink sm:text-[46px]">
            {service.name}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/70">
            {service.intro}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-[12px] font-medium uppercase tracking-[0.14em] text-ink/45">
            {service.subServices.length} sub-services · what we cover
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 pb-24 sm:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {service.subServices.map((sub, i) => (
            <Reveal
              key={sub.title}
              delay={(i % 2) * 0.06}
              className="rounded-[12px] border border-black/[0.06] p-7"
              style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "var(--tint-1)" }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  className="editorial text-[18px] leading-none"
                  style={{ color: "var(--accent)", opacity: 0.45 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-[19px] leading-snug text-ink">
                  {sub.title}
                </h2>
              </div>

              <ul className="mt-5 flex flex-col gap-3.5">
                {sub.processes.map((p) => (
                  <li key={p.name} className="text-[14px] leading-relaxed text-ink/65">
                    <span className="font-medium text-ink">{p.name}</span>
                    {p.text && <> — {p.text}</>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        label="Get Started"
        title="Not sure which service you need?"
        sub="Book an assessment. We map only what applies to you — no upselling."
        actions={[{ label: "Book Assessment →", href: "/complycare/contact" }]}
      />
    </main>
  );
}
