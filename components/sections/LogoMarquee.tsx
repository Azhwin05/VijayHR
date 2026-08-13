import Image from "next/image";
import Reveal from "@/components/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";

export default function LogoMarquee({
  eyebrow,
  title,
  logos,
}: {
  eyebrow: string;
  title: string;
  logos: string[];
}) {
  // duplicate the set once so the track can loop seamlessly at -50%
  const track = [...logos, ...logos];

  return (
    <section className="border-t border-hairline py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <Reveal className="text-center">
          <Eyebrow center>{eyebrow}</Eyebrow>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            {title}
          </p>
        </Reveal>
      </div>

      <div className="marquee-mask relative mt-12 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14">
          {track.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="relative h-12 w-28 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14 sm:w-32"
            >
              <Image
                src={`/clients/${logo}.png`}
                alt=""
                fill
                sizes="130px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
