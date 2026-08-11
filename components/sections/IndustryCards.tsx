import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionIntro from "@/components/sections/SectionIntro";
import TextLink from "@/components/ui/TextLink";

type Industry = { name: string; image: string };

export default function IndustryCards({
  eyebrow,
  title,
  description,
  industries,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  industries: Industry[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal
            key={ind.name}
            delay={(i % 4) * 0.06}
            className="group relative aspect-[4/5] overflow-hidden rounded-[14px]"
          >
            <Image
              src={ind.image}
              alt={ind.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.35) 42%, rgba(10,10,8,0) 68%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white"
                style={{ backgroundColor: "var(--brass)" }}
              >
                Sector
              </span>
              <p className="mt-2 text-[15px] font-semibold leading-snug text-white">
                {ind.name}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10">
        <TextLink href={ctaHref}>{ctaLabel} →</TextLink>
      </Reveal>
    </section>
  );
}
