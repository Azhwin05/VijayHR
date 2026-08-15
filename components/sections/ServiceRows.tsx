import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

type Item = { name: string; tagline: string; href: string; image?: string };

export default function ServiceRows({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={(i % 4) * 0.04}>
          <Link
            href={item.href}
            className={`group grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[240px_1fr] sm:gap-10 ${
              i > 0 ? "border-t border-black/[0.07]" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] sm:w-[240px]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: "var(--tint-1)" }}
                >
                  <span
                    aria-hidden
                    className="h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-[19px] text-ink">{item.name}</h3>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink/60">
                {item.tagline}
              </p>
              <span className="relative mt-4 inline-block w-fit text-[15px] font-medium text-ink">
                Learn more →
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-300 ease-out"
                  style={{ backgroundColor: "var(--hairline)" }}
                />
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: "var(--accent)" }}
                />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
