import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/sections/ServiceDetail";
import { complycareServices } from "@/lib/data/complycare-services";

export function generateStaticParams() {
  return complycareServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = complycareServices.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} — VijayHR ComplyCare`,
    description: service.tagline,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = complycareServices.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <ServiceDetailPage
      service={service}
      backHref="/complycare/services"
      backLabel="All Services"
    />
  );
}
