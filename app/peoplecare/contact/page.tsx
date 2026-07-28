import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact VijayHR PeopleCare | Book a Free HR Consultation",
  description:
    "Talk to VijayHR PeopleCare about HR Partners on Demand. Book a free, no-obligation consultation — a specialist responds within one business day.",
};

const whyContact = [
  { title: "Free consultation", text: "A no-obligation review of your people priorities and the right model for you." },
  { title: "Fast response", text: "An HR specialist responds within one business day — not a call centre." },
  { title: "Honest advice", text: "We recommend only the engagement you actually need. No upselling." },
  { title: "Confidential", text: "Your people data is handled with strict confidentiality and care." },
];

const interestOptions = [
  "HR Advisory (Bronze)",
  "HR Business Partner (Silver)",
  "Complete HR Managed Services (Gold)",
  "Specific Program",
  "Not sure — need guidance",
];

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Reach Out
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-2xl font-display text-[40px] leading-tight text-ink sm:text-[52px]">
            Let&rsquo;s Build a Great Workplace Together.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            Whether you need a single specialist or a complete embedded HR
            team, we&rsquo;re ready to help.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1280px] grid grid-cols-1 gap-16 px-6 pb-24 sm:px-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            Why Contact Us
          </span>
          <h2 className="mt-4 font-display text-[24px] text-ink">
            Honest Advice, Fast Response
          </h2>

          <div className="mt-8 flex flex-col gap-8">
            {whyContact.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <h3 className="font-display text-[17px] text-ink">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 border-t border-hairline pt-8 text-[14px] leading-relaxed text-ink/80">
            <p className="font-medium text-ink">
              VijayHR PeopleCare — A Division of Vijay Associates Group
            </p>
            <p className="mt-3">Phone: +91 94440 21222 · +91 97910 21222</p>
            <p className="mt-2">Email: peoplecare@vijayassociates.co.in</p>
            <p className="mt-2">
              Office: No. 106, Kanaga Durga Complex, 2nd Floor, Gangai Amman
              Koil Street, Vadapalani, Chennai — 600026
            </p>
          </div>
        </div>

        <ContactForm
          title="Book a Free Consultation"
          sub="No obligation. An HR specialist responds within one business day."
          includeDesignation
          interestLabel="Area of Interest"
          interestOptions={interestOptions}
          sizeLabel="Workforce Size"
          sizeOptions={["< 50 employees", "50 – 200", "200 – 500", "500+"]}
          messagePlaceholder="Tell us about your people priorities or what you're looking for…"
          submitLabel="Book Free Consultation"
          successTitle="Consultation Requested"
          successText="Thank you, {name}. An HR specialist will be in touch within one business day."
        />
      </section>
    </main>
  );
}
