import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionDetailPage from "@/components/sections/SolutionDetail";
import { peoplecareSolutions } from "@/lib/data/peoplecare-solutions";

export function generateStaticParams() {
  return peoplecareSolutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = peoplecareSolutions.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: `${solution.name} — VijayHR PeopleCare`,
    description: solution.tagline,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = peoplecareSolutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  return <SolutionDetailPage solution={solution} />;
}
