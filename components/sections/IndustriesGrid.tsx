import Image from "next/image";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

type Industry = {
  name: string;
  challenge: string;
  approach: string;
  flagship?: boolean;
  image?: string;
};
type Stat = { value?: number; suffix?: string; prefix?: string; text?: string; label: string };

const TINTS = ["var(--tint-1)", "var(--paper)", "var(--tint-3)", "var(--tint-2)"];

export default function IndustriesGrid({
  industries,
  deliveredTitle,
  deliveredText,
  bullets,
  stats,
}: {
  industries: Industry[];
  deliveredTitle: string;
  deliveredText: string;
  bullets: string[];
  stats: Stat[];
}) {
  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {industries.map((ind, i) =>
            ind.image ? (
              <Reveal
                key={ind.name}
                delay={(i % 2) * 0.06}
                className="relative overflow-hidden rounded-[12px] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.35)]"
              >
                <Image
                  src={ind.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,8,7,0.55) 0%, rgba(8,8,7,0.72) 45%, rgba(8,8,7,0.86) 100%)",
                  }}
                />

                <div className="relative">
                  <h3 className="flex flex-wrap items-center gap-2.5 text-[20px] text-white">
                    {ind.name}
                    {ind.flagship && (
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        Flagship
                      </span>
                    )}
                  </h3>

                  <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Challenge
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/80">
                    {ind.challenge}
                  </p>

                  <p
                    className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: "var(--brass)" }}
                  >
                    Approach
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white">
                    {ind.approach}
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal
                key={ind.name}
                delay={(i % 2) * 0.06}
                className="rounded-[12px] border border-black/[0.06] p-8 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.18)]"
                style={{ backgroundColor: TINTS[i % TINTS.length] }}
              >
                <h3 className="flex flex-wrap items-center gap-2.5 text-[20px] text-ink">
                  {ind.name}
                  {ind.flagship && (
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white"
                      style={{ backgroundColor: "var(--accent)" }}
                    >
                      Flagship
                    </span>
                  )}
                </h3>

                <p className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                  Challenge
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">
                  {ind.challenge}
                </p>

                <p
                  className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  Approach
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink/75">
                  {ind.approach}
                </p>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section style={{ backgroundColor: "var(--tint-1)" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Pan-India
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 max-w-xl text-[30px] leading-[1.1] text-ink sm:text-[40px]">
              {deliveredTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/60">
              {deliveredText}
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <p className="text-[15px] text-ink/75">{b}</p>
              </div>
            ))}
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-black/[0.08] pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <div className="text-[30px] font-bold tracking-[-0.04em] text-ink">
                  {s.text ? (
                    s.text
                  ) : (
                    <Counter value={s.value ?? 0} suffix={s.suffix} prefix={s.prefix} />
                  )}
                </div>
                <p className="mt-1.5 text-[13px] text-ink/55">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
