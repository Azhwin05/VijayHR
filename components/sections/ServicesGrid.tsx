import Link from "next/link";
import Image from "next/image";
import SectionIntro from "@/components/sections/SectionIntro";
import Reveal from "@/components/Reveal";

type Item = { name: string; tagline?: string; href: string; image?: string };

const TINTS = ["var(--tint-1)", "var(--tint-2)", "var(--paper)", "var(--tint-3)"];

export default function ServicesGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) =>
          item.image ? (
            <Reveal
              key={item.href}
              delay={(i % 6) * 0.04}
              className="group relative aspect-[3/4] overflow-hidden rounded-[10px]"
            >
              <Link href={item.href}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,8,7,0) 45%, rgba(8,8,7,0.75) 100%)",
                  }}
                />
                <span className="absolute inset-x-0 bottom-0 p-3 text-[12.5px] font-semibold leading-snug text-white">
                  {item.name}
                </span>
              </Link>
            </Reveal>
          ) : (
            <Reveal
              key={item.href}
              delay={(i % 6) * 0.04}
              className="relative flex aspect-[3/4] flex-col justify-end rounded-[10px] p-3"
              style={{ backgroundColor: TINTS[i % TINTS.length] }}
            >
              <Link href={item.href} className="absolute inset-0" aria-label={item.name} />
              <span className="pointer-events-none text-[12.5px] font-semibold leading-snug text-ink">
                {item.name}
              </span>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
