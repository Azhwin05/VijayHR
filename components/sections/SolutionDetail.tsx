import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import TextLink from "@/components/ui/TextLink";
import Icon from "@/components/ui/Icon";
import { iconFor } from "@/lib/icon-for";
import CtaBand from "@/components/sections/CtaBand";
import type { SolutionDetail } from "@/lib/data/peoplecare-solutions";

export default function SolutionDetailPage({
  solution,
}: {
  solution: SolutionDetail;
}) {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <TextLink href="/peoplecare/preview/solutions">← All Solutions</TextLink>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display text-[36px] leading-tight text-ink sm:text-[46px]">
            {solution.name}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-muted">
            {solution.tagline}
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-6 sm:px-10">
        <Rule />
      </div>

      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            How We Help
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink/80">
            {solution.howWeHelp}
          </p>
        </Reveal>
      </section>

      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              What&rsquo;s Included
            </span>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {solution.included.map((item, i) => (
              <Reveal key={item} delay={i * 0.05} className="flex items-center gap-3.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--paper)" }}
                >
                  <Icon
                    name={iconFor(item)}
                    className="h-[18px] w-[18px]"
                    style={{ color: "var(--accent)" }}
                  />
                </span>
                <p className="text-[15px] leading-snug text-ink/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            The Outcome
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-6 max-w-2xl font-display text-[22px] leading-snug text-ink">
            {solution.outcome}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
            Related Solutions
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2.5">
            {solution.related.map((r) => (
              <li key={r} className="flex items-center gap-2.5 text-[14px] text-ink/70">
                <span
                  aria-hidden
                  className="h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand
        label="Get Started"
        title="Not sure which model fits?"
        sub="Book a consultation. We recommend only the engagement you actually need."
        actions={[{ label: "Find the Right Model →", href: "/peoplecare/preview/contact" }]}
      />
    </main>
  );
}
