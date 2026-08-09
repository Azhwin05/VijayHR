export type ServiceDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  challenges: { title: string; text: string }[];
  approach: string;
  included: { title: string; text: string }[];
  gains: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const complycareServices: ServiceDetail[] = [
  {
    slug: "payroll",
    name: "Payroll Management",
    category: "Payroll & People Operations",
    tagline: "Accurate, statutory-integrated payroll — paid right, paid on time, every month.",
    overview:
      "We run your end-to-end monthly payroll — salary computation, statutory deductions, payslips, TDS, reimbursements and full & final settlements — fully integrated with compliance so your filings and payroll always stay in sync.",
    challenges: [
      { title: "Errors and wrong deductions", text: "Manual payroll leads to mistakes, unhappy employees and rework." },
      { title: "Missed statutory deadlines", text: "PF, ESI, PT and TDS dates slip when compliance and payroll are disconnected." },
      { title: "Drain on HR & Finance", text: "Month-end processing consumes time your teams should spend on people." },
      { title: "Data confidentiality risk", text: "Sensitive salary data handled without proper controls." },
    ],
    approach:
      "A maker-checker payroll engine with multi-level validation, statutory deductions built in, and a dedicated query desk — delivering a 2–3 day turnaround and zero charges for our errors.",
    included: [
      { title: "End-to-end processing", text: "Salary structures, variable pay, arrears, leave & attendance integration, payslips." },
      { title: "Statutory deductions", text: "PF, ESI, PT and TDS computed, processed and filed on time." },
      { title: "Income tax & Form 16", text: "Investment proofs, quarterly computations and annual Form 16 generation." },
      { title: "Full & final settlement", text: "Exit settlements, encashment, gratuity and final statements." },
      { title: "Reporting & MIS", text: "Salary register, bank advice, variance reports and management dashboards." },
      { title: "Employee query desk", text: "Payroll and tax queries resolved within 24–48 hours." },
    ],
    gains: [
      { title: "High accuracy", text: "Maker-checker validation on every cycle." },
      { title: "On-time, every time", text: "2–3 day turnaround from validated inputs." },
      { title: "Freed-up teams", text: "Your HR and Finance focus on strategy." },
    ],
    faqs: [
      { q: "How accurate is your payroll?", a: "We commit to high accuracy through a maker-checker process, with no charges for errors on our side." },
      { q: "How fast is the turnaround?", a: "2–3 working days from receipt of validated inputs, with employee queries resolved in 24–48 hours." },
      { q: "Can you migrate our existing payroll?", a: "Yes — through a structured migration with data cleanup, a parallel run and gap analysis before go-live." },
    ],
  },
  {
    slug: "labour-law",
    name: "Labour Law & Statutory Compliance",
    category: "Compliance Management",
    tagline: "Every applicable central and state obligation — tracked, filed and audit-ready.",
    overview:
      "We manage end-to-end statutory compliance across all applicable central and state legislation — a live compliance calendar, prescribed registers, returns and validation audits — so nothing is missed.",
    challenges: [
      { title: "40+ overlapping acts", text: "Central and state laws with different thresholds and dates." },
      { title: "Unforgiving deadlines", text: "Penalties and prosecution follow a single missed filing." },
      { title: "Changing regulations", text: "The new Labour Codes change definitions and obligations." },
      { title: "Scattered records", text: "Registers maintained inconsistently across locations." },
    ],
    approach:
      "A single accountable desk maintaining your live compliance calendar, statutory registers and returns — with monthly summaries and validation audits that keep you permanently inspection-ready.",
    included: [
      { title: "Live compliance calendar", text: "Every applicable due date, tracked and reminded." },
      { title: "Statutory registers", text: "Prescribed registers maintained and validated." },
      { title: "Returns & filings", text: "Monthly, quarterly and annual returns filed on time." },
      { title: "Validation audits", text: "Periodic checks to catch gaps before authorities do." },
      { title: "Multi-state coverage", text: "Central and state obligations under one engagement." },
      { title: "Monthly MIS", text: "One-page compliance summary every month." },
    ],
    gains: [
      { title: "Full statutory coverage", text: "Every applicable central and state obligation, tracked." },
      { title: "Always audit-ready", text: "Records prepared to inspection standard." },
      { title: "Codes-ready", text: "Re-baselined for India's new Labour Codes." },
    ],
    faqs: [
      { q: "Which laws apply to my company?", a: "It depends on your industry, headcount, locations and states. We map exactly what applies during onboarding." },
      { q: "How do the new Labour Codes affect me?", a: "The four Codes came into force on 21 November 2025. We re-baseline your obligations and manage the transition." },
      { q: "Do you cover multiple states?", a: "Yes — Pan-India, under central supervision, with unified reporting." },
    ],
  },
  {
    slug: "audits",
    name: "Compliance Audits",
    category: "Audit & Risk",
    tagline: "An independent, risk-classified view of where you truly stand.",
    overview:
      "We conduct independent compliance audits — statutory, HR and payroll — classifying every gap by risk (Critical / High / Moderate / Low) with root-cause analysis and a prioritised remediation plan.",
    challenges: [
      { title: "Hidden exposure", text: "Gaps you cannot see until an inspector finds them." },
      { title: "No prioritisation", text: "Long issue lists with no sense of what matters most." },
      { title: "Inherited risk", text: "Legacy non-compliance from past consultants or acquisitions." },
      { title: "M&A due diligence", text: "Unknown liabilities in target companies." },
    ],
    approach:
      "A structured audit that surfaces your real position, ranks every gap by risk and root cause, and hands you a prioritised, deadline-mapped remediation roadmap signed by a partner.",
    included: [
      { title: "Full-scope review", text: "Statutory, HR and payroll documentation examined." },
      { title: "Risk classification", text: "Critical / High / Moderate / Low ranking." },
      { title: "Root-cause analysis", text: "Why the gap exists, not just that it does." },
      { title: "Remediation roadmap", text: "Prioritised, deadline-mapped action plan." },
      { title: "Due-diligence audits", text: "Pre-acquisition compliance assessments." },
      { title: "Board-ready report", text: "Plain-English findings your committee will read." },
    ],
    gains: [
      { title: "No surprises", text: "Know your exposure before authorities do." },
      { title: "Focus where it counts", text: "Fix the critical items first." },
      { title: "Confidence", text: "An independent, credible position statement." },
    ],
    faqs: [
      { q: "How long does an audit take?", a: "A baseline audit typically delivers a written report within 7 working days of access to records." },
      { q: "Is it disruptive?", a: "No — we work largely from your records with minimal demand on your team." },
      { q: "Do you help fix what you find?", a: "Yes — remediation can be handled by us or your team, with our roadmap as the guide." },
    ],
  },
  {
    slug: "advisory",
    name: "Assessments & Advisory",
    category: "Compliance Management",
    tagline: "Catch exposure early — with expert guidance on every regulatory change.",
    overview:
      "Continuous health checks and expert advisory on regulatory change — identifying exposure before it escalates and giving you a clear path to resolution.",
    challenges: [
      { title: "Regulatory change", text: "New rules and amendments are easy to miss." },
      { title: "Blind spots", text: "Exposure that builds quietly between audits." },
      { title: "Unclear next steps", text: "Knowing there's a problem but not how to fix it." },
      { title: "Complex decisions", text: "Structuring, classification and threshold questions." },
    ],
    approach:
      "Periodic health checks plus on-demand advisory — so you always know your current posture, what's changing, and exactly what to do about it.",
    included: [
      { title: "Periodic health checks", text: "On-site and off-site assessments of your posture." },
      { title: "Regulatory advisory", text: "Guidance on change, classification and thresholds." },
      { title: "Action roadmaps", text: "Clear, prioritised steps to resolution." },
      { title: "On-call guidance", text: "Expert answers when decisions can't wait." },
      { title: "Early-warning alerts", text: "Notification of changes that affect you." },
      { title: "Strategic counsel", text: "Senior advice for complex situations." },
    ],
    gains: [
      { title: "Stay ahead", text: "Exposure caught before it becomes a penalty." },
      { title: "Clear direction", text: "Always know your next best action." },
      { title: "Timely response", text: "Guidance when you actually need it." },
    ],
    faqs: [
      { q: "How often are health checks done?", a: "Typically quarterly, with frequency tailored to your risk profile and engagement." },
      { q: "Can we call you for one-off questions?", a: "Yes — on-call advisory is part of the engagement for retained clients." },
      { q: "Do you track regulatory changes for us?", a: "Yes — we monitor applicable changes and alert you to what affects you." },
    ],
  },
  {
    slug: "systems",
    name: "Centralised Systems & Reporting",
    category: "Compliance Management",
    tagline: "Real-time visibility into compliance across every statute, location and entity.",
    overview:
      "We replace manual tracking with centralised dashboards and MIS — real-time status across statutes, locations and entities, with monthly reports and exception alerts.",
    challenges: [
      { title: "Manual tracking", text: "Spreadsheets that are out of date the moment they're saved." },
      { title: "No single view", text: "Status scattered across locations and people." },
      { title: "Late surprises", text: "Problems discovered only after the deadline." },
      { title: "No management MIS", text: "Leadership lacks a clear compliance picture." },
    ],
    approach:
      "A centralised compliance tracking system giving real-time status by statute, location and entity — with monthly MIS, exception reports and a clear management view.",
    included: [
      { title: "Real-time dashboards", text: "Live status across your whole organisation." },
      { title: "Multi-entity view", text: "Roll up by location, entity or statute." },
      { title: "Exception reporting", text: "Immediate flags on anything at risk." },
      { title: "Document repository", text: "Audit-ready records in one secure place." },
      { title: "Monthly MIS", text: "Management reporting on a fixed cadence." },
      { title: "Secure access", text: "Role-based, confidential and controlled." },
    ],
    gains: [
      { title: "Total visibility", text: "Know your status at a glance." },
      { title: "No late surprises", text: "Issues surface early, not after." },
      { title: "Board confidence", text: "Clear MIS for leadership and audit." },
    ],
    faqs: [
      { q: "Do we need to install software?", a: "No — we provide the tracking system and reporting as part of the managed service." },
      { q: "Can we see status across all our sites?", a: "Yes — the dashboard rolls up by location, entity and statute." },
      { q: "How often is data updated?", a: "Continuously, with formal MIS issued monthly." },
    ],
  },
  {
    slug: "representation",
    name: "Representation & Liaison",
    category: "People & Authorities",
    tagline: "When an inspector or notice arrives, you're not facing it alone.",
    overview:
      "Professional handling of inspections, notices and show-cause proceedings — with a dedicated Nodal Officer responding within 24 hours of any notice.",
    challenges: [
      { title: "Sudden inspections", text: "Unannounced visits that catch teams unprepared." },
      { title: "Show-cause notices", text: "Formal proceedings needing careful response." },
      { title: "Authority interaction", text: "Knowing how to engage departments correctly." },
      { title: "Tight timelines", text: "Notices with short, unforgiving response windows." },
    ],
    approach:
      "A dedicated Nodal Officer who responds within 24 hours of any notice, prepares your documentation, and represents you through inspection, reply and resolution.",
    included: [
      { title: "Inspection support", text: "We attend and represent you on-site." },
      { title: "Notice management", text: "Drafting and filing structured replies." },
      { title: "Documentation prep", text: "Records assembled to inspection standard." },
      { title: "Authority liaison", text: "Professional engagement with departments." },
      { title: "24-hour response", text: "Nodal Officer engaged within a day of any notice." },
      { title: "Settlement support", text: "Guidance through to resolution." },
    ],
    gains: [
      { title: "Confidence", text: "Face any authority fully prepared." },
      { title: "Rapid response", text: "24-hour engagement on any notice." },
      { title: "Professional handling", text: "Experienced representation that protects you." },
    ],
    faqs: [
      { q: "How quickly do you respond to a notice?", a: "A Nodal Officer is engaged within 24 hours of notice receipt." },
      { q: "Do you attend inspections in person?", a: "Yes — routine inspection support is included for retained clients." },
      { q: "Is representation included in the retainer?", a: "Routine support is included; complex proceedings are quoted upfront under the agreement." },
    ],
  },
  {
    slug: "training",
    name: "Compliance Training & Capacity Building",
    category: "Payroll & People Operations",
    tagline: "Build the in-house capability your HR, Admin and Ops teams need.",
    overview:
      "Role-specific capacity-building for your HR, Admin and Operations teams — workshops, awareness sessions and regulatory-update briefings, online or on-site.",
    challenges: [
      { title: "Knowledge gaps", text: "Teams unsure of their day-to-day compliance duties." },
      { title: "Regulatory change", text: "Staff unaware of new rules and obligations." },
      { title: "Inconsistent practice", text: "Different people doing the same task differently." },
      { title: "Onboarding gaps", text: "New hires lacking compliance grounding." },
    ],
    approach:
      "Customised training programmes — workshops, awareness sessions and update briefings — that turn compliance from a worry into an in-house capability.",
    included: [
      { title: "Role-specific workshops", text: "Tailored to HR, Admin and Operations." },
      { title: "Online or on-site", text: "Delivered to suit your locations and teams." },
      { title: "Regulatory updates", text: "Briefings on changes that affect you." },
      { title: "Practical playbooks", text: "Reference material your teams keep." },
      { title: "Awareness sessions", text: "Org-wide compliance culture building." },
      { title: "Refresher cycles", text: "Periodic updates to keep knowledge current." },
    ],
    gains: [
      { title: "Capable teams", text: "In-house confidence on everyday compliance." },
      { title: "Fewer errors", text: "Knowledge that prevents mistakes." },
      { title: "Compliance culture", text: "Awareness embedded across the organisation." },
    ],
    faqs: [
      { q: "Is training online or in person?", a: "Both — we deliver online or on-site to suit your teams and locations." },
      { q: "Can it be customised?", a: "Yes — content is tailored to your sector, roles and specific needs." },
      { q: "Do you cover the new Labour Codes?", a: "Yes — update briefings cover the Codes and other applicable changes." },
    ],
  },
  {
    slug: "factory",
    name: "Factory Compliance",
    category: "Sector & Regulatory",
    tagline: "Specialist Factories Act support for manufacturing operations.",
    overview:
      "Factories Act, 1948 licensing, registers, renewals, working-hours, welfare and safety compliance — specialist support for manufacturing units across India.",
    challenges: [
      { title: "Licensing & renewals", text: "Factory licenses, plan approvals and timely renewals." },
      { title: "Safety & welfare", text: "Statutory safety, welfare and working-hour rules." },
      { title: "Contract workforce", text: "Large contractor populations to oversee." },
      { title: "Statutory registers", text: "Numerous prescribed factory registers to maintain." },
    ],
    approach:
      "End-to-end Factories Act compliance — licensing, registers, renewals, safety and welfare — combined with contractor oversight, under one specialist desk.",
    included: [
      { title: "Factory licensing", text: "Registration, plan approval and renewals." },
      { title: "Statutory registers", text: "All prescribed registers maintained and validated." },
      { title: "Safety compliance", text: "Safety, health and welfare obligations." },
      { title: "Working-hours rules", text: "Shifts, overtime and leave compliance." },
      { title: "Safety audits", text: "Periodic on-site compliance audits." },
      { title: "Contractor oversight", text: "CLRA compliance for your contract workforce." },
    ],
    gains: [
      { title: "Inspection-ready", text: "Factory records always prepared." },
      { title: "No renewal lapses", text: "Licenses tracked and renewed on time." },
      { title: "Specialist depth", text: "Manufacturing-specific expertise." },
    ],
    faqs: [
      { q: "Do you handle factory license renewals?", a: "Yes — registration, plan approval, renewals and the full register set." },
      { q: "Can you cover multiple plants?", a: "Yes — across locations and states under one engagement." },
      { q: "Do you manage our contractors too?", a: "Yes — contractor CLRA oversight is part of factory compliance." },
    ],
  },
  {
    slug: "multi-sector",
    name: "Multi-Sector Labour Law",
    category: "Sector & Regulatory",
    tagline: "Shops, CLRA, BOCW, Mines and more — registrations through ongoing filings.",
    overview:
      "Compliance across Shops & Establishments, Catering, Plantations, Mines Act 1952, CLRA 1970 and BOCW 1996 — registrations through to ongoing filings.",
    challenges: [
      { title: "Many statutes", text: "Sector-specific laws each with their own rules." },
      { title: "Registrations", text: "Multiple registrations and renewals to manage." },
      { title: "Sector nuances", text: "Exceptions and thresholds unique to each sector." },
      { title: "Ongoing filings", text: "Continuous returns across every statute." },
    ],
    approach:
      "One desk covering the full range of sector statutes — Shops & Establishments, CLRA, BOCW, Mines, Plantations and Catering — from first registration to every ongoing filing.",
    included: [
      { title: "Shops & Establishments", text: "Registration and renewals across states." },
      { title: "Contract Labour (CLRA)", text: "Principal-employer and contractor compliance." },
      { title: "BOCW Welfare", text: "Cess, registration and welfare-board filings." },
      { title: "Mines & Plantations", text: "Mines Act 1952 and Plantation Labour Law." },
      { title: "Catering compliance", text: "Sector-specific establishment rules." },
      { title: "Ongoing filings", text: "Continuous returns across all statutes." },
    ],
    gains: [
      { title: "Full coverage", text: "No statute left untracked." },
      { title: "One desk", text: "Every sector law under one engagement." },
      { title: "Sector expertise", text: "Knowledge of each sector's nuances." },
    ],
    faqs: [
      { q: "Do you cover BOCW cess filings?", a: "Yes — registration, cess computation, filing and welfare-board liaison." },
      { q: "Can you register across multiple states?", a: "Yes — multi-state Shops & Establishments and sector registrations." },
      { q: "Do you handle Mines Act compliance?", a: "Yes — Mines Act 1952 and Plantation Labour Law are within our specialist scope." },
    ],
  },
  {
    slug: "ehs",
    name: "Environmental & EHS",
    category: "Sector & Regulatory",
    tagline: "Pollution Control consents and waste management, handled end-to-end.",
    overview:
      "SPCB consents (CTE / CTO), renewals and waste management — hazardous, biomedical, e-waste, plastic and solid waste — plus EHS audits.",
    challenges: [
      { title: "Consents & renewals", text: "CTE/CTO applications and timely renewals." },
      { title: "Waste compliance", text: "Hazardous, biomedical, e-waste and plastic rules." },
      { title: "Environmental penalties", text: "Severe consequences for lapses." },
      { title: "EHS audits", text: "Ongoing environment, health and safety checks." },
    ],
    approach:
      "End-to-end environmental compliance — SPCB consents, renewals and every waste category — supported by periodic EHS audits to keep you compliant and penalty-free.",
    included: [
      { title: "CTE / CTO consents", text: "Applications, approvals and renewals." },
      { title: "Hazardous waste", text: "Authorisation, manifests and returns." },
      { title: "E-waste & plastic", text: "EPR, e-waste and plastic-waste compliance." },
      { title: "Biomedical waste", text: "Healthcare waste authorisation and filings." },
      { title: "EHS audits", text: "Periodic environment, health & safety reviews." },
      { title: "Statutory returns", text: "Environmental returns filed on time." },
    ],
    gains: [
      { title: "Penalty protection", text: "Avoid severe environmental consequences." },
      { title: "Full waste coverage", text: "Every waste category managed." },
      { title: "No consent lapses", text: "Renewals tracked and filed on time." },
    ],
    faqs: [
      { q: "Do you handle SPCB consent renewals?", a: "Yes — CTE and CTO applications, approvals and renewals end-to-end." },
      { q: "Which waste categories do you cover?", a: "Hazardous, biomedical, e-waste, plastic and solid waste, including EPR." },
      { q: "Do you conduct EHS audits?", a: "Yes — periodic environment, health and safety audits are part of our scope." },
    ],
  },
  {
    slug: "vendor",
    name: "Vendor Compliance & Governance",
    category: "Audit & Risk",
    tagline: "Protect yourself as Principal Employer from third-party exposure.",
    overview:
      "Contractor due diligence and Principal-Employer protection — onboarding checks, ongoing CLRA / BOCW monitoring and periodic certification.",
    challenges: [
      { title: "Inherited liability", text: "Contractor lapses become your liability as PE." },
      { title: "Many vendors", text: "Large, changing supplier and contractor base." },
      { title: "No visibility", text: "Limited oversight of vendor compliance status." },
      { title: "Onboarding risk", text: "Vendors engaged without due diligence." },
    ],
    approach:
      "Structured oversight of your supply chain — contractor due diligence at onboarding, ongoing CLRA/BOCW monitoring and periodic certification — shielding you from third-party exposure.",
    included: [
      { title: "Due diligence", text: "Compliance checks before vendor onboarding." },
      { title: "Document verification", text: "Licenses, registrations and statutory proof." },
      { title: "Ongoing monitoring", text: "Continuous CLRA/BOCW status tracking." },
      { title: "PE protection", text: "Principal-employer liability shielded." },
      { title: "Periodic certification", text: "Regular vendor compliance certification." },
      { title: "Exception alerts", text: "Immediate flags on vendor lapses." },
    ],
    gains: [
      { title: "Liability shield", text: "Protection from contractor non-compliance." },
      { title: "Supply-chain visibility", text: "Know every vendor's status." },
      { title: "Governance", text: "Structured, defensible vendor oversight." },
    ],
    faqs: [
      { q: "Why is vendor compliance my problem?", a: "As Principal Employer you can carry significant CLRA/BOCW liability for contractor lapses." },
      { q: "Do you check vendors before onboarding?", a: "Yes — due diligence at onboarding plus ongoing monitoring thereafter." },
      { q: "How do you track vendor status?", a: "Through continuous monitoring with dashboards and exception alerts." },
    ],
  },
];
