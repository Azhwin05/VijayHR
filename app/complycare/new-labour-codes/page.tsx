import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Rule from "@/components/Rule";
import TextLink from "@/components/ui/TextLink";
import CtaBand from "@/components/sections/CtaBand";
import CodesAccordion from "@/components/sections/CodesAccordion";
import ImpactTabs from "@/components/sections/ImpactTabs";

export const metadata: Metadata = {
  title: "New Labour Codes — VijayHR ComplyCare",
  description:
    "Understand India's new Labour Codes, assess your organisation's readiness, and prepare with confidence — with VijayHR ComplyCare.",
};

const codes = [
  {
    name: "Code on Wages, 2019",
    body: "Consolidates legislation relating to minimum wages, payment of wages, payment of bonus and equal remuneration. Its most consequential feature is a uniform statutory definition of “wages” that applies across the compliance framework — a change that directly affects how salary structures are designed and how statutory liabilities are calculated.",
    areas: [
      "A uniform definition of wages applicable across statutory calculations",
      "Minimum wages and the applicable criteria for fixing them",
      "Structure of salary components and the relationship between basic pay and total remuneration",
      "Timely payment of wages, permissible deductions and wage periods",
      "Payment of bonus and eligibility conditions",
      "Equal remuneration and prohibition of gender-based wage discrimination",
      "Payroll processes, wage registers and wage slips",
    ],
  },
  {
    name: "Industrial Relations Code, 2020",
    body: "Consolidates legislation governing trade unions, conditions of employment in industrial establishments, and the investigation and settlement of industrial disputes. Particularly relevant for manufacturing units, factories and establishments with organised workforces.",
    areas: [
      "Recognition of trade unions and negotiating union frameworks",
      "Standing Orders and conditions of service in applicable establishments",
      "Fixed term employment and its treatment under statutory benefits",
      "Notice requirements, layoff, retrenchment and closure provisions",
      "Grievance redressal mechanisms and internal committees",
      "Dispute resolution machinery and applicable procedures",
      "Employer obligations relating to worker representation and consultation",
    ],
  },
  {
    name: "Code on Social Security, 2020",
    body: "Consolidates legislation relating to employee social security benefits, bringing provident fund, employees’ state insurance, gratuity, maternity benefit and related schemes under one framework. Also extends the scope of social security in significant ways.",
    areas: [
      "Provident fund coverage, contributions and applicable thresholds",
      "Employees’ State Insurance coverage and contribution obligations",
      "Gratuity, including revised eligibility conditions for fixed term employees",
      "Maternity benefit provisions and employer responsibilities",
      "Employee compensation and applicable welfare schemes",
      "Extension of social security frameworks to gig and platform workers",
      "Registration, contribution records, returns and electronic reporting",
    ],
  },
  {
    name: "OSH Code, 2020",
    body: "The Occupational Safety, Health and Working Conditions Code consolidates legislation relating to workplace safety, health, welfare and working conditions — applying across factories, establishments, contract labour arrangements and specified categories of work.",
    areas: [
      "Registration of establishments and applicable licensing requirements",
      "Working hours, overtime, rest intervals and spread-over provisions",
      "Annual leave entitlement and related conditions",
      "Appointment letters and mandatory employment documentation",
      "Safety, health and welfare provisions applicable to the workplace",
      "Contract labour engagement, licensing and principal employer responsibilities",
      "Registers, records, returns and inspection frameworks",
    ],
  },
];

const employerImpact = [
  {
    title: "Compensation & Payroll",
    items: [
      "Salary and wage structures — component-wise design may require review under the uniform wage definition.",
      "Payroll processes — calculation logic, wage periods, deductions and payslip formats may need updating.",
      "Statutory contributions — PF, ESI and other contributions flow from the wage definition, with cost implications to model in advance.",
    ],
  },
  {
    title: "Employee Benefits & Entitlements",
    items: [
      "PF, ESI and gratuity — coverage, eligibility and calculation bases warrant assessment.",
      "Employee benefits — benefit structures, leave encashment and terminal benefits should be reviewed.",
      "Working hours and overtime — shift patterns and rest interval practices may require alignment.",
    ],
  },
  {
    title: "Documentation & Policy",
    items: [
      "Employment contracts — appointment letters and terms may require revision.",
      "HR policies — handbooks and internal service conditions should be reviewed for consistency.",
      "Standing Orders — applicable establishments should review certified orders against the framework.",
    ],
  },
  {
    title: "Workforce & Workplace",
    items: [
      "Industrial relations — union recognition and grievance mechanisms may require structural review.",
      "Contractor & vendor compliance — principal employer obligations warrant strengthening.",
      "Factory & workplace compliance — registrations, licences and welfare facilities should be assessed.",
    ],
  },
  {
    title: "Systems & Records",
    items: [
      "Registers, records and returns — moving toward consolidated, electronic formats.",
      "Internal compliance systems — tracking, ownership and audit readiness reviewed as a system.",
    ],
  },
];

const process = [
  { title: "Assess", text: "We review your organisation’s existing labour law, HR, payroll and statutory compliance framework — registrations, licences, salary structures, contributions, documentation, registers, returns and establishment-level compliance." },
  { title: "Identify", text: "We identify potential gaps, areas of exposure and processes that may require review — wage structure implications, benefit calculations, documentation deficiencies, contractor risks and state-specific considerations." },
  { title: "Advise", text: "We provide practical guidance based on your business, workforce profile and applicable requirements — translating regulatory provisions into specific, actionable recommendations." },
  { title: "Implement", text: "We support your teams in updating relevant processes, documentation, policies and compliance systems — from employment documentation to payroll structure changes and reporting." },
  { title: "Monitor", text: "We continue tracking regulatory developments, central and state-level notifications, and support ongoing compliance readiness as the framework evolves." },
];

export default function NewLabourCodesPage() {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-6 pb-16 pt-24 sm:px-10 sm:pt-32">
        <Reveal>
          <TextLink href="/complycare">← ComplyCare</TextLink>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            New Labour Codes
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 font-display text-[36px] leading-tight text-ink sm:text-[46px]">
            Understand the change.
            <br />
            Assess your readiness.
            <br />
            <span className="editorial italic text-ink/45">Prepare with confidence.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-ink/80">
            India’s labour law landscape is undergoing the most significant transformation in decades. Four Labour Codes — covering wages, industrial relations, social security, and occupational safety and working conditions — consolidate and rationalise a large body of existing central labour legislation into a single, streamlined framework.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/65">
            The Codes were brought into force with effect from 21 November 2025, and the central rules under all four Codes were notified in May 2026. However, labour remains a Concurrent List subject — state governments must frame and notify their own rules, at varying stages across the country. The practical result is an evolving regulatory framework in which an organisation’s actual obligations depend on its sector, workforce composition, establishment type and the states in which it operates.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/65">
            VijayHR ComplyCare helps organisations stay informed, assess their readiness, and prepare for applicable requirements — with clarity, structure and practical guidance grounded in over 20 years of labour law and statutory compliance experience.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-[900px] px-6 sm:px-10">
        <Rule />
      </div>

      {/* The Four Codes */}
      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            The Four Labour Codes
          </span>
        </Reveal>
        <CodesAccordion codes={codes} />
      </section>

      {/* What this means for employers */}
      <section className="border-t border-black/[0.06] surface-1">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
              What Does This Mean for Employers?
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
              The Labour Codes are not a documentation exercise. They touch how organisations pay people, structure benefits, engage contractors and maintain records. The following areas warrant review.
            </p>
          </Reveal>
          <ImpactTabs groups={employerImpact} />
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-[13.5px] leading-relaxed text-ink/55">
              Multi-state employers face an additional layer of complexity. Because state rules are being notified at different times and with different procedural requirements, organisations operating across locations should assess their exposure state by state rather than assuming uniform treatment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our process */}
      <section className="mx-auto max-w-[900px] px-6 py-16 sm:px-10">
        <Reveal>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
            How VijayHR ComplyCare Can Help
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            We work with organisations as a Labour Code readiness and compliance advisory partner — bringing structure, clarity and practical execution support to a complex transition.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.04}>
              <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                <p className="font-display text-[16px] text-ink">
                  <span style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</span>
                  {" "}{step.title}
                </p>
                <p className="text-[14px] leading-relaxed text-muted">{step.text}</p>
              </div>
              {i < process.length - 1 && <Rule />}
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        label="Get Started"
        title="Talk to our team about a Labour Code readiness assessment."
        sub="Stay informed. Stay prepared. Stay compliant."
        actions={[
          { label: "Book Assessment →", href: "/complycare/contact" },
          { label: "Call +91 94440 21222", href: "tel:+919444021222" },
        ]}
      />
    </main>
  );
}
