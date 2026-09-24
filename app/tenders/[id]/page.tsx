import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tendersData } from '@/data/tenders';
import TenderDetailClient from './TenderDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  tendersData.forEach((tender) => {
    params.push({ id: tender.id });
    const cleanRef = tender.refNumber.replace(/[\/\\]/g, '-').toLowerCase();
    if (cleanRef !== tender.id) {
      params.push({ id: cleanRef });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const tender = tendersData.find(
    (t) => 
      t.id === decodedId || 
      t.refNumber === decodedId ||
      t.refNumber.replace(/[\/\\]/g, '-').toLowerCase() === decodedId.toLowerCase()
  );

  if (!tender) {
    return {
      title: 'Tender Not Found | Central Bank of Sudan',
    };
  }

  return {
    title: `${tender.title.en} | Central Bank of Sudan`,
    description: tender.description.en,
  };
}

export default async function TenderDetailPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const tender = tendersData.find(
    (t) => 
      t.id === decodedId || 
      t.refNumber === decodedId ||
      t.refNumber.replace(/[\/\\]/g, '-').toLowerCase() === decodedId.toLowerCase()
  );

  if (!tender) {
    notFound();
  }

  const related = tendersData
    .filter((t) => t.id !== tender.id)
    .slice(0, 3);

  return <TenderDetailClient tender={tender} related={related} />;
}
