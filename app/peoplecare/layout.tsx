import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VijayHR PeopleCare — HR Partners on Demand",
  description:
    "Flexible HR partnership — people strategy, culture and operations delivered on demand by the Vijay Associates Group.",
};

const nav = [
  { label: "Solutions", href: "/peoplecare/solutions" },
  { label: "Industries", href: "/peoplecare/industries" },
  { label: "About", href: "/peoplecare/about" },
  { label: "FAQ", href: "/peoplecare/faq" },
  { label: "Contact", href: "/peoplecare/contact" },
];

export default function PeopleCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <div className="brand-peoplecare">
      <Header
        brand="VijayHR PeopleCare"
        tagline="People First. Growth Always."
        homeHref="/peoplecare"
        nav={nav}
      />
      {children}
      <Footer
        brand="VijayHR PeopleCare"
        columns={[
          {
            title: "Company",
            links: [
              { label: "About", href: "/peoplecare/about" },
              { label: "Solutions", href: "/peoplecare/solutions" },
              { label: "Industries", href: "/peoplecare/industries" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "FAQ", href: "/peoplecare/faq" },
              { label: "Contact", href: "/peoplecare/contact" },
            ],
          },
          {
            title: "Group",
            links: [
              { label: "Vijay Associates Group", href: "/" },
              { label: "VijayHR ComplyCare", href: "/complycare" },
            ],
          },
        ]}
        legalLine={`© ${year} VijayHR PeopleCare. A Division of Vijay Associates Group.`}
      />
    </div>
  );
}
