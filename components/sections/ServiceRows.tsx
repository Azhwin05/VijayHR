import Image from "next/image";
import Reveal from "@/components/Reveal";
import TextLink from "@/components/ui/TextLink";

type Item = { name: string; tagline: string; href: string; image: string };

export default function ServiceRows({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={(i % 4) * 0.04}>
          <div
            className={`group grid grid-cols-1 items-center gap-6 py-8 sm:grid-cols-[240px_1fr_auto] sm:gap-10 ${
              i > 0 ? "border-t border-black/[0.07]" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] sm:w-[240px]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="240px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span className="editorial absolute left-3 top-3 text-[13px] leading-none text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h3 className="text-[19px] text-ink">{item.name}</h3>
              <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink/60">
                {item.tagline}
              </p>
            </div>

            <div className="sm:justify-self-end">
              <TextLink href={item.href}>Learn more →</TextLink>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
