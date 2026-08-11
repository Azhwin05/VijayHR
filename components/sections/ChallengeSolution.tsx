import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";

export default function ChallengeSolution({
  eyebrow,
  title,
  description,
  challenges,
  solutions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
}) {
  return (
    <section style={{ backgroundColor: "var(--tint-2)" }}>
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          center
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            className="rounded-[12px] p-8 sm:p-9"
            style={{ backgroundColor: "var(--paper)", border: "1px solid rgba(var(--accent-rgb),0.16)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              The Challenge
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {challenges.map((c, i) => (
                <Reveal key={c} delay={i * 0.04}>
                  <p className="text-[15px] leading-relaxed text-ink">{c}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div
            className="rounded-[12px] p-8 sm:p-9"
            style={{ backgroundColor: "var(--paper)", border: "1px solid rgba(var(--accent-rgb),0.16)" }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--accent)" }}
            >
              Our Solution
            </p>
            <div className="mt-7 flex flex-col gap-5">
              {solutions.map((s, i) => (
                <Reveal key={s} delay={i * 0.04} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  <p className="text-[15px] leading-relaxed text-ink">{s}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
