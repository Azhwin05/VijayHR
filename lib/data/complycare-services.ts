export type ServiceProcess = { name: string; text?: string };
export type ServiceSubService = { title: string; processes: ServiceProcess[] };

export type ServiceDetail = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  intro: string;
  subServices: ServiceSubService[];
};

export const complycareServices: ServiceDetail[] = [
  {
    "slug": "labour-law",
    "name": "Labour Law & Statutory Compliance",
    "category": "Compliance Management",
    "tagline": "Every applicable central and state obligation — tracked, filed and audit-ready.",
    "intro": "End-to-end registration, renewal and recurring compliance under the four Labour Codes and Tamil Nadu labour laws, so every statutory obligation is met on time.",
    "subServices": [
      {
        "title": "Shops & Establishments (S&E)",
        "processes": [
          {
            "name": "S&E Registration",
            "text": "applicability check, document preparation and online application under the Tamil Nadu Shops and Establishments Act"
          },
          {
            "name": "Renewal and Amendments",
            "text": "validity tracking and amendments for change of name, address, ownership, business activity or headcount"
          },
          {
            "name": "Monthly Maintenance and Compliance Processes",
            "text": "statutory registers, displays, and monitoring of working hours, overtime and weekly offs"
          },
          {
            "name": "Closure and Cancellation",
            "text": "intimation and cancellation on closure or relocation"
          }
        ]
      },
      {
        "title": "Employees' Provident Fund (EPF)",
        "processes": [
          {
            "name": "EPF Registration",
            "text": "establishment registration, PF code allotment and authorised signatory set-up"
          },
          {
            "name": "Employee Onboarding",
            "text": "UAN generation or linking, KYC seeding and e-nomination"
          },
          {
            "name": "Monthly Contributions and ECR Filing",
            "text": "wage computation, ECR upload and challan payment by the 15th"
          },
          {
            "name": "Member Services",
            "text": "transfers, withdrawals, KYC and record corrections, grievance handling"
          },
          {
            "name": "Notices and Inquiries",
            "text": "responses to EPFO notices, damages and interest proceedings"
          }
        ]
      },
      {
        "title": "Employees' State Insurance (ESIC)",
        "processes": [
          {
            "name": "ESIC Registration",
            "text": "employer code and branch sub-code registration"
          },
          {
            "name": "Employee Registration",
            "text": "insured person registration, e-Pehchan card and family details"
          },
          {
            "name": "Monthly Contributions",
            "text": "contribution computation and filing by the 15th"
          },
          {
            "name": "Benefit Facilitation",
            "text": "accident reporting, sickness and maternity benefit support"
          },
          {
            "name": "Inspections and Assessments",
            "text": "responses to ESIC inspections and assessment notices"
          }
        ]
      },
      {
        "title": "Professional Tax (PT)",
        "processes": [
          {
            "name": "PT Enrolment",
            "text": "registration with the local body, such as Greater Chennai Corporation"
          },
          {
            "name": "Half-Yearly Deduction and Payment",
            "text": "slab-based deduction, payment and returns"
          },
          {
            "name": "Multi-State PT Compliance",
            "text": "registration and filing for branches outside Tamil Nadu"
          },
          {
            "name": "Assessments and Rectification",
            "text": "assessment, refund and rectification support"
          }
        ]
      },
      {
        "title": "Labour Welfare Fund (LWF)",
        "processes": [
          {
            "name": "LWF Registration",
            "text": "registration with the Tamil Nadu Labour Welfare Board"
          },
          {
            "name": "Annual Contribution",
            "text": "employee and employer share, paid by 31 January"
          },
          {
            "name": "Unpaid Accumulation Remittance",
            "text": "unclaimed wages and fines"
          },
          {
            "name": "Multi-State LWF Compliance",
            "text": "contributions for branches in other states"
          }
        ]
      },
      {
        "title": "Contract Labour",
        "processes": [
          {
            "name": "Principal Employer Registration",
            "text": "new registration and amendments for contractors and headcount"
          },
          {
            "name": "Contractor Licensing",
            "text": "licence application, renewal and amendment"
          },
          {
            "name": "Registers and Returns",
            "text": "registers of contractors and contract workers, periodic returns"
          },
          {
            "name": "Wage Payment Certification",
            "text": "verification and certification of contract worker wages"
          },
          {
            "name": "Welfare Facilities Compliance",
            "text": "canteen, rest rooms, drinking water and first aid"
          }
        ]
      },
      {
        "title": "Wages and Minimum Wages",
        "processes": [
          {
            "name": "Minimum Wage Compliance",
            "text": "category mapping and tracking of central and Tamil Nadu revisions"
          },
          {
            "name": "Payment of Wages",
            "text": "payment timelines, permitted deductions and overtime at twice the rate"
          },
          {
            "name": "Wage Records",
            "text": "wage slips, registers and equal remuneration review"
          },
          {
            "name": "Annual Returns",
            "text": "preparation and filing of wage returns"
          }
        ]
      },
      {
        "title": "Bonus",
        "processes": [
          {
            "name": "Eligibility and Bonus Computation",
            "text": "allocable surplus, 8.33%–20% calculation, set-on and set-off"
          },
          {
            "name": "Payment and Records",
            "text": "payment within eight months of year end, register and annual return"
          }
        ]
      },
      {
        "title": "Gratuity",
        "processes": [
          {
            "name": "Nomination and Display",
            "text": "nomination forms and statutory display"
          },
          {
            "name": "Gratuity Computation and Payment",
            "text": "including pro-rata gratuity for fixed-term employees, paid within 30 days"
          },
          {
            "name": "Group Gratuity Coordination",
            "text": "insurance policy and actuarial valuation inputs"
          },
          {
            "name": "Claims and Dispute Support",
            "text": "representation before the controlling authority"
          }
        ]
      },
      {
        "title": "Maternity Benefit",
        "processes": [
          {
            "name": "Maternity Benefit Policy",
            "text": "26 weeks' leave, adoption and commissioning mother leave, work-from-home option"
          },
          {
            "name": "Crèche Facility Compliance",
            "text": "for establishments with 50 or more employees"
          },
          {
            "name": "Registers and Intimation",
            "text": "written intimation at joining and statutory registers"
          }
        ]
      },
      {
        "title": "Industrial Relations",
        "processes": [
          {
            "name": "Standing Orders",
            "text": "drafting, certification or adoption of model standing orders"
          },
          {
            "name": "Committees",
            "text": "Grievance Redressal Committee and Works Committee constitution"
          },
          {
            "name": "Notices and Permissions",
            "text": "change in service conditions, lay-off, retrenchment and closure"
          },
          {
            "name": "Worker Re-skilling Fund",
            "text": "contribution on retrenchment"
          },
          {
            "name": "Trade Union and Conciliation Support",
            "text": "recognition, negotiation and conciliation"
          }
        ]
      },
      {
        "title": "Tamil Nadu-Specific Compliance",
        "processes": [
          {
            "name": "National & Festival Holidays",
            "text": "annual holiday list, filing with the Inspector and display"
          },
          {
            "name": "Conferment of Permanent Status",
            "text": "tracking of eligibility and permanent status orders"
          },
          {
            "name": "Municipal Trade Licence",
            "text": "new licence, renewal and amendment"
          },
          {
            "name": "Catering Establishment Registration",
            "text": "for canteens and caterers"
          },
          {
            "name": "Subsistence Allowance Compliance",
            "text": "payment during suspension"
          }
        ]
      },
      {
        "title": "Other Central Labour Laws",
        "processes": [
          {
            "name": "Employee's Compensation",
            "text": "accident reporting and compensation deposit"
          },
          {
            "name": "Apprentices",
            "text": "NAPS/NATS registration, contracts and stipend claims"
          },
          {
            "name": "Employment Exchange Returns",
            "text": "vacancy notification, ER-1 and ER-2 returns"
          },
          {
            "name": "Inter-State Migrant Workers",
            "text": "registers and allowances"
          },
          {
            "name": "Building and Other Construction Workers",
            "text": "establishment registration and cess"
          },
          {
            "name": "Gig and Platform Workers",
            "text": "aggregator registration and contribution"
          }
        ]
      },
      {
        "title": "Inspections, Notices and Closure",
        "processes": [
          {
            "name": "Inspection Support",
            "text": "preparation and representation during Inspector-cum-Facilitator visits"
          },
          {
            "name": "Notice Replies",
            "text": "show-cause and compliance notice responses"
          },
          {
            "name": "Compounding of Offences",
            "text": "applications to settle compoundable offences"
          },
          {
            "name": "Closure of Registrations",
            "text": "on shutdown or relocation"
          }
        ]
      }
    ]
  },
  {
    "slug": "vendor",
    "name": "Vendor Compliance & Third-Party Governance",
    "category": "Audit & Risk",
    "tagline": "Protect yourself as Principal Employer from third-party exposure.",
    "intro": "Protect your organisation from principal-employer liability by ensuring every contractor, manpower agency and service vendor stays compliant throughout the engagement.",
    "subServices": [
      {
        "title": "Vendor Onboarding and Due Diligence",
        "processes": [
          {
            "name": "Vendor Categorisation",
            "text": "manpower, housekeeping, security, canteen, transport, facility and staffing vendors"
          },
          {
            "name": "Document Verification",
            "text": "PAN, GST, licences, PF and ESIC codes, PT and LWF registration, contractor licence"
          },
          {
            "name": "Statutory Background Check",
            "text": "PF and ESIC payment history, litigation and blacklisting"
          },
          {
            "name": "Risk Rating and Approval",
            "text": "high, medium or low risk with an approval recommendation"
          },
          {
            "name": "Vendor Master Creation",
            "text": "central record of approved vendors"
          }
        ]
      },
      {
        "title": "Contract Governance",
        "processes": [
          {
            "name": "Compliance Clauses",
            "text": "statutory obligations, indemnity, audit rights and wage-payment assurance"
          },
          {
            "name": "Core vs Non-Core Activity Review",
            "text": "checks on the deployment of contract labour"
          },
          {
            "name": "Principal Employer Linkage",
            "text": "linking each contractor and headcount to your registration"
          },
          {
            "name": "Renewal and Termination Tracking",
            "text": "contract periods, extensions and exits"
          }
        ]
      },
      {
        "title": "Monthly Vendor Compliance Verification",
        "processes": [
          {
            "name": "Document Collection",
            "text": "PF ECR, ESIC challans, PT and LWF proofs, wage registers, attendance and bank statements"
          },
          {
            "name": "Headcount Reconciliation",
            "text": "attendance vs payroll vs PF and ESIC records"
          },
          {
            "name": "Wage Verification",
            "text": "minimum wages, overtime and wage slips"
          },
          {
            "name": "Invoice Release Recommendation",
            "text": "hold or release based on compliance status"
          },
          {
            "name": "Exception Tracking and Follow-up",
            "text": "open issues logged and closed with vendors"
          }
        ]
      },
      {
        "title": "Contract Worker Welfare and Site Compliance",
        "processes": [
          {
            "name": "Worker Documentation",
            "text": "ID cards, employment cards and service certificates"
          },
          {
            "name": "Site Facilities Check",
            "text": "canteen, rest rooms, drinking water, first aid, PPE and toilets"
          },
          {
            "name": "Migrant Worker Records",
            "text": "records and accommodation conditions"
          },
          {
            "name": "Grievance Channel",
            "text": "a route for contract workers to raise concerns"
          }
        ]
      },
      {
        "title": "Vendor Audits",
        "processes": [
          {
            "name": "Periodic On-Site Audits",
            "text": "quarterly or half-yearly audits of vendor offices and sites"
          },
          {
            "name": "Audit Scoring and Non-Compliance Reports",
            "text": "findings with risk ratings"
          },
          {
            "name": "Corrective Action and Re-Audit",
            "text": "closure verification of every finding"
          }
        ]
      },
      {
        "title": "Vendor Performance and Risk Governance",
        "processes": [
          {
            "name": "Vendor Compliance Scorecards",
            "text": "ranking vendors on compliance"
          },
          {
            "name": "Escalation and Penalty Framework",
            "text": "consequences for repeated lapses"
          },
          {
            "name": "Quarterly Governance Reviews",
            "text": "with procurement, administration and HR"
          }
        ]
      },
      {
        "title": "Vendor Exit and Closure",
        "processes": [
          {
            "name": "Full-and-Final Verification",
            "text": "settlement of contract workers' dues"
          },
          {
            "name": "PF, ESIC and Liability Check",
            "text": "exits, gratuity and bonus liability"
          },
          {
            "name": "Compliance Clearance Certificate",
            "text": "issued before final payment"
          },
          {
            "name": "Record Archival",
            "text": "vendor records retained for the statutory period"
          }
        ]
      }
    ]
  },
  {
    "slug": "audits",
    "name": "Compliance Audits",
    "category": "Audit & Risk",
    "tagline": "An independent, risk-classified view of where you truly stand.",
    "intro": "Independent, evidence-based audits that measure your compliance status, quantify risk and give you a clear corrective action plan.",
    "subServices": [
      {
        "title": "Our Audit Process",
        "processes": []
      },
      {
        "title": "Statutory Labour Law Audit",
        "processes": [
          {
            "name": "Act-wise Compliance Review",
            "text": "all applicable Labour Codes and Tamil Nadu laws"
          },
          {
            "name": "Registrations, Registers and Returns Verification",
            "text": "including statutory displays"
          },
          {
            "name": "Wage, Leave and Benefit Testing",
            "text": "on employee samples"
          }
        ]
      },
      {
        "title": "Contractor and Vendor Compliance Audit",
        "processes": [
          {
            "name": "Principal Employer Liability Review",
            "text": "exposure from contractors"
          },
          {
            "name": "Contractor Verification",
            "text": "PF, ESIC, wages and licences on a sample basis"
          },
          {
            "name": "Site Facility Audit",
            "text": "welfare facilities for contract workers"
          }
        ]
      },
      {
        "title": "Payroll and Social Security Audit",
        "processes": [
          {
            "name": "Wage Structure Review",
            "text": "against the wage definition under the Labour Codes"
          },
          {
            "name": "PF and ESIC Base Testing",
            "text": "contribution base and calculation"
          },
          {
            "name": "TDS, PT and LWF Deduction Checks",
            "text": "accuracy and timeliness"
          },
          {
            "name": "Bonus, Gratuity and Leave Encashment Verification",
            "text": "provisions and payments"
          }
        ]
      },
      {
        "title": "HR Policy and Documentation Audit",
        "processes": [
          {
            "name": "Appointment Letters and Personnel Files",
            "text": "completeness and legal validity"
          },
          {
            "name": "HR Policies vs Current Law",
            "text": "gaps and required updates"
          },
          {
            "name": "Standing Orders, Disciplinary and Exit Records",
            "text": "procedural compliance"
          }
        ]
      },
      {
        "title": "Pre-Inspection (Mock Inspection) Audit",
        "processes": [
          {
            "name": "Inspector-Style Walk-Through",
            "text": "premises, records and displays"
          },
          {
            "name": "Readiness Report and Quick-Fix List",
            "text": "actions before an expected inspection"
          }
        ]
      },
      {
        "title": "Labour Codes Gap Audit",
        "processes": [
          {
            "name": "Gap Analysis",
            "text": "policies, wage structures, registers and registrations"
          },
          {
            "name": "Transition Roadmap and Cost Impact",
            "text": "prioritised implementation plan"
          }
        ]
      },
      {
        "title": "Due Diligence Audit",
        "processes": [
          {
            "name": "Historic Compliance Review",
            "text": "for acquisitions, investments and outsourcing"
          },
          {
            "name": "Contingent Liability Assessment",
            "text": "quantified exposure"
          },
          {
            "name": "Red-Flag Report",
            "text": "inputs for indemnities and transaction conditions"
          }
        ]
      },
      {
        "title": "Specialised Audits",
        "processes": [
          {
            "name": "Factory and Safety Audit"
          },
          {
            "name": "POSH Compliance Audit"
          },
          {
            "name": "Environmental and EHS Audit"
          }
        ]
      },
      {
        "title": "Recurring Audit Programmes",
        "processes": [
          {
            "name": "Audit Calendar",
            "text": "monthly, quarterly or half-yearly"
          },
          {
            "name": "Multi-Location Rollout",
            "text": "consistent audits across all sites"
          },
          {
            "name": "Consolidated Dashboard",
            "text": "year-on-year compliance health score"
          }
        ]
      }
    ]
  },
  {
    "slug": "hr-documentation",
    "name": "Employment & HR Documentation",
    "category": "People & Authorities",
    "tagline": "Appointment letters, policies and employment records — drafted right and kept current.",
    "intro": "Legally sound HR documentation across the entire employee lifecycle, drafted and maintained in line with the Labour Codes and Tamil Nadu law.",
    "subServices": [
      {
        "title": "Onboarding Documentation",
        "processes": [
          {
            "name": "Offer and Appointment Letters",
            "text": "including the appointment letter mandatory under the Labour Codes"
          },
          {
            "name": "Employment Agreements",
            "text": "permanent, fixed-term, probation, trainee, apprentice and consultant"
          },
          {
            "name": "Confidentiality and IP Agreements",
            "text": "NDA, IP assignment and non-solicit clauses"
          },
          {
            "name": "Joining Kit",
            "text": "joining form, personal data form and background verification consent"
          },
          {
            "name": "Statutory Joining Forms",
            "text": "PF, ESIC and gratuity nominations"
          }
        ]
      },
      {
        "title": "HR Policies and Employee Handbook",
        "processes": [
          {
            "name": "Employee Handbook",
            "text": "drafting and periodic review"
          },
          {
            "name": "Core HR Policies",
            "text": "leave, attendance, working hours, overtime, holidays and travel"
          },
          {
            "name": "Conduct and Ethics Policies",
            "text": "code of conduct, disciplinary, grievance and whistle-blower"
          },
          {
            "name": "Equal Opportunity Policies",
            "text": "POSH, anti-discrimination and persons with disabilities"
          },
          {
            "name": "Remote Work, IT and Data Protection Policies",
            "text": "aligned to the DPDP Act"
          },
          {
            "name": "Acknowledgement and Version Control",
            "text": "employee sign-off and policy history"
          }
        ]
      },
      {
        "title": "Standing Orders and Service Rules",
        "processes": [
          {
            "name": "Standing Orders Drafting or Adoption",
            "text": "establishment-specific or model standing orders"
          },
          {
            "name": "Certification and Display",
            "text": "application, hearing support and display"
          },
          {
            "name": "Service Rules",
            "text": "for staff not covered by standing orders"
          }
        ]
      },
      {
        "title": "Statutory Registers and Displays",
        "processes": [
          {
            "name": "Statutory Registers",
            "text": "physical or electronic, for employees, wages, attendance and leave"
          },
          {
            "name": "Mandatory Workplace Displays",
            "text": "abstracts of laws, working hours, holidays and committee details"
          },
          {
            "name": "Wage Slips and Leave Cards",
            "text": "standard formats"
          }
        ]
      },
      {
        "title": "In-Service Documentation",
        "processes": [
          {
            "name": "Employee Letters",
            "text": "confirmation, promotion, transfer and increment"
          },
          {
            "name": "Performance Documentation",
            "text": "appraisal, warning and improvement plans"
          },
          {
            "name": "Personnel File Maintenance",
            "text": "upkeep and periodic review"
          }
        ]
      },
      {
        "title": "Disciplinary and Grievance Documentation",
        "processes": [
          {
            "name": "Disciplinary Notices",
            "text": "show-cause notice, charge sheet and suspension order"
          },
          {
            "name": "Domestic Enquiry Documentation",
            "text": "appointment, proceedings, findings and final order"
          },
          {
            "name": "Grievance Records",
            "text": "grievance register and committee minutes"
          }
        ]
      },
      {
        "title": "Exit Documentation",
        "processes": [
          {
            "name": "Separation Letters",
            "text": "resignation acceptance, termination and retrenchment"
          },
          {
            "name": "Full-and-Final Settlement Statement",
            "text": "settled within two working days"
          },
          {
            "name": "Relieving Letter and Experience Certificate"
          },
          {
            "name": "Statutory Exit Formalities",
            "text": "PF, ESIC and gratuity"
          }
        ]
      },
      {
        "title": "Record Retention and Digitisation",
        "processes": [
          {
            "name": "Statutory Retention Schedule",
            "text": "retention periods by law"
          },
          {
            "name": "Digitisation and Secure Archival",
            "text": "indexed, inspection-ready employee records"
          }
        ]
      }
    ]
  },
  {
    "slug": "advisory",
    "name": "Compliance Assessment & Advisory",
    "category": "Compliance Management",
    "tagline": "Catch exposure early — with expert guidance on every regulatory change.",
    "intro": "Expert guidance before decisions that carry legal or financial risk, from the applicability of laws to restructuring and the Labour Codes transition.",
    "subServices": [
      {
        "title": "Applicability Assessment",
        "processes": [
          {
            "name": "Law-by-Law Applicability Matrix",
            "text": "by headcount, industry, location and activity"
          },
          {
            "name": "Threshold Monitoring",
            "text": "triggers for POSH, gratuity, crèche, committees and standing orders"
          },
          {
            "name": "New Location and Business-Line Review",
            "text": "obligations before you expand"
          }
        ]
      },
      {
        "title": "Compliance Health Assessment",
        "processes": [
          {
            "name": "Rapid Assessment",
            "text": "questionnaire and document sampling"
          },
          {
            "name": "Risk Heat-Map and Penalty Exposure",
            "text": "where your risks are concentrated"
          },
          {
            "name": "Prioritised Remediation Roadmap",
            "text": "what to fix first"
          }
        ]
      },
      {
        "title": "Labour Codes Transition Advisory",
        "processes": [
          {
            "name": "Impact Assessment",
            "text": "wage definition, PF, gratuity, leave and overtime"
          },
          {
            "name": "Salary Restructuring and Cost Modelling",
            "text": "compliant structure options"
          },
          {
            "name": "Policy, Contract and Register Updates",
            "text": "aligned to the four Codes"
          },
          {
            "name": "Employee Communication Plan",
            "text": "explaining changes to your workforce"
          }
        ]
      },
      {
        "title": "Business Set-Up and Expansion Advisory",
        "processes": [
          {
            "name": "Registration Checklist and Sequencing",
            "text": "for a new office, branch or factory"
          },
          {
            "name": "Single-Window Approval Coordination",
            "text": "labour, fire, pollution and building approvals in Tamil Nadu"
          },
          {
            "name": "Multi-State Compliance Mapping",
            "text": "requirements in each new state"
          }
        ]
      },
      {
        "title": "Workforce Structuring Advisory",
        "processes": [
          {
            "name": "Engagement Model Review",
            "text": "permanent, contract, fixed-term, gig and consultant"
          },
          {
            "name": "Core vs Non-Core Activity Analysis",
            "text": "lawful use of contract labour"
          },
          {
            "name": "Misclassification Risk Review",
            "text": "avoiding sham contracting"
          }
        ]
      },
      {
        "title": "Industrial Relations Advisory",
        "processes": [
          {
            "name": "Lay-Off, Retrenchment and Closure Procedures",
            "text": "notices, permissions and compensation"
          },
          {
            "name": "Transfer of Undertaking",
            "text": "employee transition requirements"
          },
          {
            "name": "Strike, Lockout and Conciliation Support",
            "text": "notices and settlement drafting"
          },
          {
            "name": "Union Negotiation Preparation"
          }
        ]
      },
      {
        "title": "Inspection, Notice and Litigation Support",
        "processes": [
          {
            "name": "Notice and Inspection Report Replies",
            "text": "drafting and submission"
          },
          {
            "name": "Compounding of Offences",
            "text": "settlement of compoundable offences"
          },
          {
            "name": "Advocate Coordination",
            "text": "for labour court and authority matters"
          }
        ]
      },
      {
        "title": "Data Protection (DPDP Act) Advisory",
        "processes": [
          {
            "name": "HR Personal Data Mapping",
            "text": "employee and candidate data"
          },
          {
            "name": "Notice, Consent and Retention Practices",
            "text": "compliant handling of HR data"
          },
          {
            "name": "On-Site Assessment or Advisory Support",
            "text": "engagement model of your choice"
          }
        ]
      },
      {
        "title": "Retainer Advisory",
        "processes": [
          {
            "name": "On-Call Compliance Advisory",
            "text": "with defined response times"
          },
          {
            "name": "Monthly Regulatory Updates",
            "text": "amendment alerts relevant to your business"
          }
        ]
      }
    ]
  },
  {
    "slug": "training",
    "name": "Compliance Training & Capacity Building",
    "category": "Payroll & People Operations",
    "tagline": "Build the in-house capability your HR, Admin and Ops teams need.",
    "intro": "Role-specific training that builds lasting compliance capability within your organisation.",
    "subServices": [
      {
        "title": "Training Needs Analysis",
        "processes": [
          {
            "name": "Role-Wise Competency Mapping",
            "text": "leadership, HR, payroll, administration, plant, supervisors and vendors"
          },
          {
            "name": "Gap Assessment and Annual Training Calendar",
            "text": "a structured year-long plan"
          }
        ]
      },
      {
        "title": "Labour Law and Labour Codes Workshops",
        "processes": [
          {
            "name": "Labour Codes Overview",
            "text": "the four Codes and Tamil Nadu updates"
          },
          {
            "name": "Deep-Dive Sessions",
            "text": "wages, social security, industrial relations and OSH"
          },
          {
            "name": "Leadership Briefings",
            "text": "director and occupier liability"
          }
        ]
      },
      {
        "title": "HR and Payroll Practitioner Training",
        "processes": [
          {
            "name": "Statutory Processing",
            "text": "PF, ESIC, PT and LWF processing and portals"
          },
          {
            "name": "Registers, Returns and Inspection Handling",
            "text": "practical, hands-on sessions"
          },
          {
            "name": "Settlement Computations",
            "text": "full-and-final, gratuity and bonus"
          }
        ]
      },
      {
        "title": "POSH Training",
        "processes": [
          {
            "name": "Employee Awareness Sessions"
          },
          {
            "name": "Internal Committee Capacity Building"
          },
          {
            "name": "Manager and Supervisor Sensitisation"
          }
        ]
      },
      {
        "title": "Health and Safety Training",
        "processes": [
          {
            "name": "Safety Induction, Fire Safety and Evacuation Drills"
          },
          {
            "name": "First Aid Training"
          },
          {
            "name": "Safety Committee and Safety Officer Training"
          },
          {
            "name": "Hazard Awareness",
            "text": "hazard identification, PPE, chemical handling and permit-to-work"
          }
        ]
      },
      {
        "title": "Contractor and Vendor Training",
        "processes": [
          {
            "name": "Contractor Obligations",
            "text": "under the Labour Codes"
          },
          {
            "name": "Documentation Standards",
            "text": "records and monthly submissions expected from vendors"
          }
        ]
      },
      {
        "title": "Induction and Refresher Programmes",
        "processes": [
          {
            "name": "New-Joiner Compliance Induction",
            "text": "code of conduct, POSH, safety and data protection"
          },
          {
            "name": "Annual Refreshers and Policy-Change Briefings"
          }
        ]
      },
      {
        "title": "Delivery and Evaluation",
        "processes": [
          {
            "name": "Training Formats",
            "text": "classroom, virtual and e-learning"
          },
          {
            "name": "Train-the-Trainer Programmes",
            "text": "building in-house trainers"
          },
          {
            "name": "Assessments and Certification",
            "text": "pre and post assessments, attendance records and certificates"
          }
        ]
      }
    ]
  },
  {
    "slug": "factory",
    "name": "Factory Compliance & Industrial Support",
    "category": "Sector & Regulatory",
    "tagline": "Specialist Factories Act support for manufacturing operations.",
    "intro": "Complete compliance support for manufacturing units under the OSH Code and the Tamil Nadu Directorate of Industrial Safety and Health (DISH).",
    "subServices": [
      {
        "title": "Factory Plan Approval and Licensing",
        "processes": [
          {
            "name": "Applicability Assessment",
            "text": "factory coverage under the OSH Code"
          },
          {
            "name": "Building Plan Approval",
            "text": "drawings, process flow and machinery layout"
          },
          {
            "name": "Factory Licence",
            "text": "new application and issue"
          },
          {
            "name": "Licence Renewal and Amendments",
            "text": "changes in workers, power, occupier, manager or premises"
          },
          {
            "name": "Licence Transfer and Closure"
          }
        ]
      },
      {
        "title": "Occupier, Manager and Statutory Personnel",
        "processes": [
          {
            "name": "Occupier and Manager Nomination",
            "text": "filing and intimation"
          },
          {
            "name": "Statutory Officers",
            "text": "safety, welfare and medical officer requirements"
          },
          {
            "name": "Safety Committee",
            "text": "constitution, meetings and minutes"
          }
        ]
      },
      {
        "title": "Health, Safety and Welfare Compliance",
        "processes": [
          {
            "name": "Welfare Facilities",
            "text": "canteen, crèche, rest rooms, drinking water and washrooms"
          },
          {
            "name": "First Aid and Ambulance Room"
          },
          {
            "name": "Workplace Safety",
            "text": "machinery guarding, lighting, ventilation and dust control"
          },
          {
            "name": "Medical Examinations and Health Registers",
            "text": "pre-employment and periodic"
          },
          {
            "name": "Hazardous Process Compliance",
            "text": "site appraisal and worker health surveillance"
          }
        ]
      },
      {
        "title": "Statutory Testing and Certification",
        "processes": [
          {
            "name": "Lifting Equipment and Pressure Vessels",
            "text": "periodic examination by a competent person"
          },
          {
            "name": "Building Stability Certificate"
          },
          {
            "name": "Boiler Registration and Inspection"
          },
          {
            "name": "Lift and Escalator Licence"
          },
          {
            "name": "Electrical Installation and DG Set Approvals",
            "text": "CEIG approval and inspection"
          }
        ]
      },
      {
        "title": "Fire Safety and Emergency Preparedness",
        "processes": [
          {
            "name": "Fire NOC",
            "text": "new application and renewal"
          },
          {
            "name": "On-Site Emergency Plan and Mock Drills"
          },
          {
            "name": "Fire Equipment Maintenance Records"
          }
        ]
      },
      {
        "title": "Factory Registers, Returns and Reporting",
        "processes": [
          {
            "name": "Statutory Factory Registers",
            "text": "workers, overtime, leave, accidents and health"
          },
          {
            "name": "Annual and Half-Yearly Returns",
            "text": "filed with DISH"
          },
          {
            "name": "Accident and Dangerous Occurrence Reporting",
            "text": "within statutory timelines"
          },
          {
            "name": "Notices and Displays",
            "text": "periods of work and mandatory notices"
          }
        ]
      },
      {
        "title": "Allied Industrial Registrations",
        "processes": [
          {
            "name": "Legal Metrology",
            "text": "weights and measures verification, packaged commodities registration"
          },
          {
            "name": "Udyam (MSME) Registration",
            "text": "registration and updates"
          }
        ]
      },
      {
        "title": "Inspection and Industrial Support",
        "processes": [
          {
            "name": "DISH Inspection Preparation and Representation"
          },
          {
            "name": "Notice Response and Compounding Support"
          },
          {
            "name": "Monthly Plant Compliance Visits",
            "text": "against a plant compliance calendar"
          }
        ]
      }
    ]
  },
  {
    "slug": "posh",
    "name": "POSH Compliance",
    "category": "People & Authorities",
    "tagline": "Comprehensive workplace protection and POSH compliance — promoting a safe, respectful and compliant workplace.",
    "intro": "Full compliance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, for organisations with 10 or more employees.",
    "subServices": [
      {
        "title": "POSH Policy",
        "processes": [
          {
            "name": "Policy Drafting",
            "text": "scope, complaint process, timelines and confidentiality"
          },
          {
            "name": "Approval and Acknowledgement",
            "text": "management approval and employee sign-off"
          },
          {
            "name": "Regional Language Translation",
            "text": "including Tamil"
          }
        ]
      },
      {
        "title": "Internal Committee (IC) Constitution",
        "processes": [
          {
            "name": "IC Formation",
            "text": "Presiding Officer, employee members and external member"
          },
          {
            "name": "Appointment Orders and Consent Letters"
          },
          {
            "name": "IC Reconstitution",
            "text": "on exit, tenure completion or relocation"
          }
        ]
      },
      {
        "title": "External Member Services",
        "processes": [
          {
            "name": "Qualified External Member",
            "text": "from an NGO or legal background"
          },
          {
            "name": "Participation in IC Meetings and Inquiries"
          }
        ]
      },
      {
        "title": "Awareness and Statutory Displays",
        "processes": [
          {
            "name": "Mandatory POSH Displays",
            "text": "penal consequences and IC member details"
          },
          {
            "name": "Awareness Sessions",
            "text": "for employees, managers and new joiners"
          },
          {
            "name": "Induction and Handbook Integration"
          }
        ]
      },
      {
        "title": "Internal Committee Training",
        "processes": [
          {
            "name": "Law and Inquiry Procedure"
          },
          {
            "name": "Natural Justice and Report Writing"
          },
          {
            "name": "Mock Inquiries and Case Studies"
          }
        ]
      },
      {
        "title": "Complaint and Inquiry Support",
        "processes": [
          {
            "name": "Complaint Intake and Conciliation"
          },
          {
            "name": "Inquiry Management",
            "text": "completed within 90 days"
          },
          {
            "name": "Interim Relief and Inquiry Report",
            "text": "report within 10 days of completion"
          },
          {
            "name": "Implementation and Appeal Support"
          },
          {
            "name": "Confidential Record-Keeping"
          }
        ]
      },
      {
        "title": "Annual Reporting",
        "processes": [
          {
            "name": "IC Annual Report",
            "text": "complaints, disposals and awareness programmes"
          },
          {
            "name": "Submission to the District Officer"
          },
          {
            "name": "Board Report Disclosures",
            "text": "under the Companies Act"
          },
          {
            "name": "SHe-Box Registration"
          }
        ]
      },
      {
        "title": "POSH Audit",
        "processes": [
          {
            "name": "Framework Review",
            "text": "policy, IC, displays and training records"
          },
          {
            "name": "Complaint Handling Review"
          },
          {
            "name": "Gap Report and Corrective Plan"
          }
        ]
      }
    ]
  },
  {
    "slug": "systems",
    "name": "Centralised Systems & Reporting",
    "category": "Compliance Management",
    "tagline": "Real-time visibility into compliance across every statute, location and entity.",
    "intro": "A single, centralised view of compliance across all your entities and locations, with timely alerts and management-ready reporting.",
    "subServices": [
      {
        "title": "Compliance System Set-Up",
        "processes": [
          {
            "name": "Master Data Set-Up",
            "text": "entities, locations, headcount and applicable laws"
          },
          {
            "name": "Applicability Configuration",
            "text": "law-wise mapping for each location"
          },
          {
            "name": "User Roles and Approval Workflows"
          },
          {
            "name": "Migration of Existing Records",
            "text": "licences, registers and historic filings"
          }
        ]
      },
      {
        "title": "Compliance Calendar and Alerts",
        "processes": [
          {
            "name": "Location-Wise Statutory Calendar",
            "text": "monthly, quarterly, half-yearly and annual"
          },
          {
            "name": "Due-Date Reminders and Escalations",
            "text": "including overdue alerts"
          },
          {
            "name": "Law-Change Updates",
            "text": "minimum wage revisions and new notifications"
          }
        ]
      },
      {
        "title": "Centralised Document Repository",
        "processes": [
          {
            "name": "Compliance Records",
            "text": "licences, challans, returns, registers, policies and inspection records"
          },
          {
            "name": "Indexing and Version Control",
            "text": "with retention tagging"
          },
          {
            "name": "Audit-Ready Evidence Folders",
            "text": "by location and by law"
          }
        ]
      },
      {
        "title": "Licence and Registration Tracker",
        "processes": [
          {
            "name": "Validity and Renewal Tracking",
            "text": "with owner for each licence"
          },
          {
            "name": "Renewal Pipeline and Status"
          }
        ]
      },
      {
        "title": "Inspection and Notice Tracker",
        "processes": [
          {
            "name": "Inspection and Notice Log",
            "text": "replies, hearings and outcomes"
          },
          {
            "name": "Penalty and Compounding Tracking"
          }
        ]
      },
      {
        "title": "Vendor Compliance Portal",
        "processes": [
          {
            "name": "Monthly Vendor Document Upload"
          },
          {
            "name": "Automated Checks and Approval Workflow",
            "text": "with exception flags"
          }
        ]
      },
      {
        "title": "Dashboards and MIS Reporting",
        "processes": [
          {
            "name": "Monthly Compliance Status Reports",
            "text": "by entity, location and law"
          },
          {
            "name": "Compliance Score and Risk Heat-Map"
          },
          {
            "name": "Management and Board Reports",
            "text": "including inputs for directors' compliance certificates"
          },
          {
            "name": "Ad-Hoc Reports",
            "text": "for audits, due diligence and investors"
          }
        ]
      },
      {
        "title": "Support and Maintenance",
        "processes": [
          {
            "name": "Data Updates and User Support"
          },
          {
            "name": "Quarterly Configuration Review",
            "text": "aligned to changes in law"
          }
        ]
      }
    ]
  },
  {
    "slug": "ehs",
    "name": "Environmental, Pollution Control & EHS",
    "category": "Sector & Regulatory",
    "tagline": "Pollution Control consents and waste management, handled end-to-end.",
    "intro": "Pollution control consents, waste authorisations and EHS systems under the Water Act, Air Act, Environment (Protection) Act and Tamil Nadu Pollution Control Board (TNPCB) requirements.",
    "subServices": [
      {
        "title": "Pollution Category and Applicability",
        "processes": [
          {
            "name": "Industry Categorisation",
            "text": "Red, Orange, Green or White category"
          },
          {
            "name": "Rule Applicability",
            "text": "environmental clearance, coastal zone, groundwater and waste rules"
          }
        ]
      },
      {
        "title": "Consent to Establish (CTE)",
        "processes": [
          {
            "name": "CTE Application",
            "text": "on the TNPCB online portal"
          },
          {
            "name": "Project Report and Treatment Details",
            "text": "site plan, effluent and emission treatment"
          },
          {
            "name": "Inspection Support and Condition Compliance"
          }
        ]
      },
      {
        "title": "Consent to Operate (CTO)",
        "processes": [
          {
            "name": "First CTO Application",
            "text": "after commissioning"
          },
          {
            "name": "CTO Renewal",
            "text": "before expiry"
          },
          {
            "name": "CTO Amendment",
            "text": "for expansion, capacity or product changes"
          },
          {
            "name": "Consent Condition Compliance Reports"
          }
        ]
      },
      {
        "title": "Waste Management Authorisations",
        "processes": [
          {
            "name": "Hazardous Waste Authorisation and Annual Return"
          },
          {
            "name": "Manifest Management",
            "text": "for waste movement"
          },
          {
            "name": "Other Waste Streams",
            "text": "e-waste, plastic (EPR), battery and bio-medical waste"
          }
        ]
      },
      {
        "title": "Environmental Monitoring and Reporting",
        "processes": [
          {
            "name": "Environmental Testing",
            "text": "stack, ambient air, noise, effluent and water"
          },
          {
            "name": "Environmental Statement (Form V)",
            "text": "annual filing"
          },
          {
            "name": "Online Continuous Monitoring (OCEMS)",
            "text": "where mandated"
          },
          {
            "name": "DG Set Emission and Noise Compliance"
          }
        ]
      },
      {
        "title": "Water and Groundwater Compliance",
        "processes": [
          {
            "name": "Groundwater Extraction NOC",
            "text": "application and renewal"
          },
          {
            "name": "Rainwater Harvesting and Water-Meter Records"
          }
        ]
      },
      {
        "title": "Occupational Health and Safety Systems",
        "processes": [
          {
            "name": "Hazard Identification and Risk Assessment (HIRA)"
          },
          {
            "name": "Safe Work Procedures",
            "text": "SOPs, permit-to-work and lock-out/tag-out"
          },
          {
            "name": "PPE Matrix"
          },
          {
            "name": "Incident Investigation and Root-Cause Analysis"
          },
          {
            "name": "Safety Inspections and Observation Programmes"
          }
        ]
      },
      {
        "title": "EHS Management Systems",
        "processes": [
          {
            "name": "ISO 14001 Implementation",
            "text": "environmental management"
          },
          {
            "name": "ISO 45001 Implementation",
            "text": "occupational health and safety"
          },
          {
            "name": "EHS Manual, Objectives and Management Review"
          }
        ]
      },
      {
        "title": "ESG and Sustainability Reporting",
        "processes": [
          {
            "name": "BRSR and ESG Data Support"
          },
          {
            "name": "KPI Tracking",
            "text": "energy, water, waste and safety"
          }
        ]
      },
      {
        "title": "Inspections and Notices",
        "processes": [
          {
            "name": "TNPCB Inspection Support",
            "text": "preparation and representation"
          },
          {
            "name": "Notice Responses",
            "text": "show-cause, closure directions and environmental compensation"
          }
        ]
      }
    ]
  },
  {
    "slug": "payroll",
    "name": "Payroll Management",
    "category": "Payroll & People Operations",
    "tagline": "Accurate, statutory-integrated payroll — paid right, paid on time, every month.",
    "intro": "Accurate, timely and fully compliant payroll, from monthly processing to statutory deductions, income tax and year-end reporting.",
    "subServices": [
      {
        "title": "Payroll Set-Up",
        "processes": [
          {
            "name": "Salary Structure Design",
            "text": "aligned to the wage definition under the Code on Wages"
          },
          {
            "name": "Employee Master Data",
            "text": "bank, PAN, UAN, ESIC number and tax regime"
          },
          {
            "name": "Pay Calendar and Approval Workflow"
          },
          {
            "name": "Payroll Software Configuration or Migration"
          }
        ]
      },
      {
        "title": "Monthly Payroll Processing",
        "processes": [
          {
            "name": "Input Collection",
            "text": "attendance, leave, overtime, joiners, exits and variable pay"
          },
          {
            "name": "Gross-to-Net Computation",
            "text": "including arrears, loss of pay, loans and advances"
          },
          {
            "name": "Payroll Register, Variance Report and Sign-Off"
          },
          {
            "name": "Bank Payment File",
            "text": "salary disbursement within statutory timelines"
          },
          {
            "name": "Payslips and Salary Registers"
          }
        ]
      },
      {
        "title": "Statutory Deductions and Remittances",
        "processes": [
          {
            "name": "PF and ESIC Contributions",
            "text": "monthly computation and payment"
          },
          {
            "name": "Professional Tax and Labour Welfare Fund",
            "text": "half-yearly and annual remittance"
          },
          {
            "name": "TDS Deposit and Quarterly Returns"
          },
          {
            "name": "Annual Employee Tax Certificates"
          }
        ]
      },
      {
        "title": "Income Tax on Salary",
        "processes": [
          {
            "name": "Tax Regime Selection",
            "text": "old vs new regime"
          },
          {
            "name": "Investment Declaration and Proof Verification"
          },
          {
            "name": "Tax Projection and Monthly TDS"
          },
          {
            "name": "Perquisite Valuation"
          }
        ]
      },
      {
        "title": "Benefits and Periodic Payments",
        "processes": [
          {
            "name": "Bonus Processing"
          },
          {
            "name": "Gratuity and Leave Encashment"
          },
          {
            "name": "Reimbursements and Flexible Benefits"
          },
          {
            "name": "Increments and Arrears"
          }
        ]
      },
      {
        "title": "Full-and-Final Settlement",
        "processes": [
          {
            "name": "Final Dues Computation",
            "text": "salary, leave encashment, gratuity, bonus and notice-pay recovery"
          },
          {
            "name": "Payment within Statutory Timelines",
            "text": "within two working days of exit"
          },
          {
            "name": "PF and ESIC Exit Documentation"
          }
        ]
      },
      {
        "title": "Payroll Compliance Controls and Reporting",
        "processes": [
          {
            "name": "Minimum Wage Checks",
            "text": "every pay cycle"
          },
          {
            "name": "Reconciliations",
            "text": "payroll vs accounts vs statutory challans"
          },
          {
            "name": "Payroll MIS",
            "text": "cost, headcount and attrition reports"
          },
          {
            "name": "Year-End Closure and Archival"
          }
        ]
      },
      {
        "title": "Employee Payroll Helpdesk",
        "processes": [
          {
            "name": "Salary, Deduction and Tax Queries"
          },
          {
            "name": "Salary Certificates and Letters",
            "text": "for loans, visas and other needs"
          }
        ]
      }
    ]
  },
  {
    "slug": "compliance-management",
    "name": "Compliance Management",
    "category": "Compliance Management",
    "tagline": "One accountable partner managing your entire compliance programme, end-to-end.",
    "intro": "Fully managed compliance in which VijayHR ComplyCare takes end-to-end ownership of your statutory obligations, with a single point of contact and defined service levels.",
    "subServices": [
      {
        "title": "Client Onboarding",
        "processes": [
          {
            "name": "Scope and SLA Finalisation"
          },
          {
            "name": "Baseline Compliance Review",
            "text": "existing registrations, filings and gaps"
          },
          {
            "name": "Applicability Matrix and Compliance Calendar",
            "text": "for all entities and locations"
          },
          {
            "name": "Controlled Document and Portal Handover"
          }
        ]
      },
      {
        "title": "Licence and Registration Lifecycle Management",
        "processes": [
          {
            "name": "New Registrations",
            "text": "for new locations, units and headcount thresholds"
          },
          {
            "name": "Renewals and Amendments",
            "text": "before expiry and on business changes"
          },
          {
            "name": "Closures and Surrenders",
            "text": "on exit from a location"
          }
        ]
      },
      {
        "title": "Recurring Compliance Execution",
        "processes": [
          {
            "name": "Monthly Compliance",
            "text": "PF, ESIC, TDS, registers and vendor verification"
          },
          {
            "name": "Half-Yearly Compliance",
            "text": "Professional Tax and periodic returns"
          },
          {
            "name": "Annual Compliance",
            "text": "LWF, bonus, holiday list, annual returns and POSH report"
          },
          {
            "name": "Monthly Proof-of-Compliance Pack"
          }
        ]
      },
      {
        "title": "Multi-Location and Multi-State Management",
        "processes": [
          {
            "name": "Pan-India Coverage",
            "text": "state-specific compliance through our partner network"
          },
          {
            "name": "Single Point of Contact and Consolidated Reporting"
          }
        ]
      },
      {
        "title": "Regulatory Change Management",
        "processes": [
          {
            "name": "Notification Tracking",
            "text": "central and Tamil Nadu laws, minimum wages and Labour Codes rules"
          },
          {
            "name": "Implementation of Changes",
            "text": "in policies, payroll and registers"
          }
        ]
      },
      {
        "title": "Inspection and Notice Management",
        "processes": [
          {
            "name": "Inspection Readiness and Representation"
          },
          {
            "name": "Notice Replies, Hearings and Closure"
          }
        ]
      },
      {
        "title": "Governance and Escalation",
        "processes": [
          {
            "name": "Monthly Compliance Reviews",
            "text": "with your SPOC"
          },
          {
            "name": "Quarterly Management Reviews"
          },
          {
            "name": "Escalation Matrix and Issue Tracking"
          },
          {
            "name": "Annual Compliance Declaration Support"
          }
        ]
      },
      {
        "title": "Continuous Improvement",
        "processes": [
          {
            "name": "Periodic Internal Audits"
          },
          {
            "name": "Compliance Health Score Tracking"
          },
          {
            "name": "Process Improvement and Automation Recommendations"
          },
          {
            "name": "Annual Scope and SLA Review"
          }
        ]
      }
    ]
  }
];
