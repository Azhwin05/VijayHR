import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — VijayHR ComplyCare",
  description: "Book a compliance assessment. A specialist responds within one business day.",
};

const whyContact = [
  { title: "Assessment", text: "A no-obligation review of where you stand and what applies to you." },
  { title: "Fast response", text: "A specialist responds within one business day — not a call centre." },
  { title: "Honest advice", text: "We map only the services you actually need. No upselling." },
  { title: "Confidential", text: "Your data is handled with strict confidentiality and security protocols." },
];

const interestOptions = [
  "Labour Law & Statutory Compliance",
  "Vendor Compliance & Third-Party Governance",
  "Compliance Audits",
  "Employment & HR Documentation",
  "Compliance Assessment & Advisory",
  "Compliance Training & Capacity Building",
  "Factory Compliance & Industrial Support",
  "POSH Compliance",
  "Centralised Systems & Reporting",
  "Environmental, Pollution Control & EHS",
  "Payroll Management",
  "Compliance Management",
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
            Book an Assessment
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
            No obligation. No call centre. A specialist responds within one
            business day.
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
            <p>
              Phone:{" "}
              <span className="font-semibold" style={{ color: "var(--accent)" }}>
                +91 94440 21222 / +91 97910 21222
              </span>
            </p>
            <p className="mt-2">Email: vijay@vijayassociates.co.in</p>
            <p className="mt-2">
              Office: No. 106, Kanaga Durga Complex, 2nd Floor, Gangai Amman
              Koil Street, Vadapalani, Chennai — 600026
            </p>
          </div>
        </div>

        <ContactForm
          title="Book an Assessment"
          sub="No obligation. A specialist responds within one business day."
          interestOptions={interestOptions}
          submitLabel="Request Assessment"
        />
      </section>
    </main>
  );
}
