import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import Counter from "@/components/Counter";

type Stat = { value: number; suffix?: string; prefix?: string; label: string };
type Cta = { label: string; href: string; variant?: "solid" | "outline" };

export default function Hero({
  label,
  heading,
  emphasis,
  sub,
  ctas,
  stats,
}: {
  label: string;
  heading: string;
  emphasis: string;
  sub: string;
  ctas: Cta[];
  stats?: Stat[];
}) {
  return (
    <section className="relative overflow-hidden">
      {/* soft brand wash behind the hero — the page's quiet colour ground */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-[0.55]"
        style={{
          background:
            "radial-gradient(120% 70% at 12% 0%, var(--tint-1) 0%, transparent 62%), radial-gradient(90% 60% at 92% 8%, var(--tint-2) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-24 sm:px-10 sm:pt-32">
        <Reveal as="p" className="mb-7 text-[12px] font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-4xl text-[40px] leading-[1.03] text-ink sm:text-[64px]">
            {heading}
            <br />
            <span className="editorial italic text-ink/45">{emphasis}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.65] text-ink/65">
            {sub}
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-4">
          {ctas.map((cta) => (
            <Button key={cta.href} href={cta.href} variant={cta.variant ?? "solid"}>
              {cta.label}
            </Button>
          ))}
        </Reveal>

        {stats && (
          <Reveal
            delay={0.3}
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-black/[0.06] sm:grid-cols-4"
            style={{ backgroundColor: "var(--hairline)" }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-6 py-7"
                style={{ backgroundColor: "var(--tint-1)" }}
              >
                <div className="text-[30px] font-bold tracking-[-0.04em] text-ink">
                  <Counter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="mt-1.5 text-[13px] text-ink/55">{s.label}</p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
