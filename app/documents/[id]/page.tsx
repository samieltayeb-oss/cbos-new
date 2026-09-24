import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { officialDocumentsData } from '@/data/documents';
import DocumentDetailClient from './DocumentDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  officialDocumentsData.forEach((doc) => {
    params.push({ id: doc.id });
    if (doc.slug && doc.slug !== doc.id) {
      params.push({ id: doc.slug });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const doc = officialDocumentsData.find(
    (d) => d.id === decodedId || d.slug === decodedId
  );

  if (!doc) {
    return {
      title: 'Document Not Found | Central Bank of Sudan',
    };
  }

  return {
    title: `${doc.title.en} | Central Bank of Sudan`,
    description: doc.summary.en,
  };
}

export default async function DocumentDetailPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const doc = officialDocumentsData.find(
    (d) => d.id === decodedId || d.slug === decodedId
  );

  if (!doc) {
    notFound();
  }

  const related = officialDocumentsData
    .filter((d) => d.id !== doc.id && d.type === doc.type)
    .slice(0, 3);

  return <DocumentDetailClient doc={doc} related={related.length > 0 ? related : officialDocumentsData.filter(d => d.id !== doc.id).slice(0, 3)} />;
}
