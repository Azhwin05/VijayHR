import Link from "next/link";
import Image from "next/image";

export default function PeopleCareComingSoon() {
  const year = new Date().getFullYear();

  return (
    <div className="brand-peoplecare flex min-h-screen flex-col">
      <header className="border-b border-black/[0.06]">
        <div className="mx-auto flex max-w-[1280px] items-center px-6 py-3.5 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-8 w-[70px] shrink-0">
              <Image
                src="/brand/vhr-mark.png"
                alt="VijayHR"
                fill
                sizes="70px"
                className="object-contain object-left"
                priority
              />
            </span>
            <span className="text-[16px] font-bold tracking-[-0.03em] text-ink">
              Vijay Associates Group
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          VijayHR PeopleCare
        </p>
        <h1 className="mt-4 max-w-lg font-display text-[34px] leading-tight text-ink sm:text-[42px]">
          Coming Soon
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
          We&rsquo;re putting the finishing touches on VijayHR PeopleCare. In
          the meantime, explore VijayHR ComplyCare or head back home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="/complycare"
            className="text-[15px] font-medium text-ink underline decoration-black/20 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Explore ComplyCare →
          </Link>
          <Link
            href="/"
            className="text-[15px] font-medium text-ink underline decoration-black/20 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Back to Home →
          </Link>
        </div>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center sm:px-10">
        <p className="text-[13px] text-ink/45">
          © {year} VijayHR PeopleCare. A Division of Vijay Associates Group.
        </p>
      </footer>
    </div>
  );
}
