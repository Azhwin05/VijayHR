import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VijayHR ComplyCare — Payroll & Labour Law Compliance",
  description:
    "Pan-India payroll management and labour-law compliance. Accurate, accountable and always audit-ready.",
};

const nav = [
  { label: "Services", href: "/complycare/services" },
  { label: "Industries", href: "/complycare/industries" },
  { label: "About", href: "/complycare/about" },
  { label: "FAQ", href: "/complycare/faq" },
  { label: "Contact", href: "/complycare/contact" },
];

export default function ComplyCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="brand-complycare">
      <Header
        brand="VijayHR ComplyCare"
        tagline="Compliance First. Always."
        homeHref="/complycare"
        nav={nav}
      />
      {children}
      <Footer
        brand="VijayHR ComplyCare"
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "/complycare/about" },
              { label: "Services", href: "/complycare/services" },
              { label: "Industries", href: "/complycare/industries" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "FAQ", href: "/complycare/faq" },
              { label: "Contact", href: "/complycare/contact" },
            ],
          },
          {
            title: "Group",
            links: [
              { label: "Vijay Associates Group", href: "/" },
              { label: "VijayHR PeopleCare", href: "/peoplecare" },
            ],
          },
        ]}
        legalLine={`© ${year} VijayHR ComplyCare Private Limited. CIN: U70200TN2026PTC193066.`}
      />
    </div>
  );
}
