import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";

export default function Leadership({
  eyebrow,
  title,
  description,
  name,
  role,
  bio,
  philosophyLabel,
  philosophy,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  name: string;
  role: string;
  bio: string[];
  philosophyLabel: string;
  philosophy: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
        <Reveal>
          <h3 className="font-display text-[24px] leading-snug text-ink">
            {name}
          </h3>
          <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
            {role}
          </p>
        </Reveal>

        <div>
          <div className="flex flex-col gap-5">
            {bio.map((para, i) => (
              <Reveal key={i} delay={0.06 + i * 0.05}>
                <p className="max-w-2xl text-[15px] leading-relaxed text-ink/75">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={0.06 + bio.length * 0.05}
            className="mt-10 border-l-2 pl-6"
            style={{ borderColor: "var(--accent)" }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              {philosophyLabel}
            </p>
            <p className="editorial mt-3 max-w-xl text-[21px] italic leading-[1.4] text-ink">
              &ldquo;{philosophy}&rdquo;
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
