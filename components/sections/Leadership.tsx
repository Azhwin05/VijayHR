import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";

type Leader = {
  name: string;
  role: string;
  photo?: string;
  bio: string[];
};

export default function Leadership({
  eyebrow,
  title,
  description,
  leaders,
  philosophyLabel,
  philosophy,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  leaders: Leader[];
  philosophyLabel: string;
  philosophy: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
        {leaders.map((leader, li) => (
          <div
            key={leader.name}
            className={li > 0 ? "lg:border-l lg:border-black/[0.08] lg:pl-16" : ""}
          >
            <Reveal>
              {leader.photo && (
                <div className="relative aspect-[4/5] w-full max-w-[200px] overflow-hidden rounded-[14px]">
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    sizes="200px"
                    className="object-cover"
                    priority={li === 0}
                  />
                </div>
              )}
              <h3 className="mt-5 font-display text-[22px] leading-snug text-ink">
                {leader.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                {leader.role}
              </p>
            </Reveal>

            <div className="mt-6 flex flex-col gap-4">
              {leader.bio.map((para, i) => (
                <Reveal key={i} delay={0.06 + i * 0.05}>
                  <p className="text-[14.5px] leading-relaxed text-ink/75">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Reveal
        className="mt-16 border-l-2 pl-6"
        style={{ borderColor: "var(--accent)" }}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {philosophyLabel}
        </p>
        <p className="editorial mt-3 max-w-xl text-[21px] italic leading-[1.4] text-ink">
          &ldquo;{philosophy}&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
