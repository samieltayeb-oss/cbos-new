import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { officialNewsData } from '@/data/news';
import NewsDetailClient from './NewsDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  officialNewsData.forEach((item) => {
    params.push({ id: item.id });
    if (item.slug && item.slug !== item.id) {
      params.push({ id: item.slug });
    }
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const item = officialNewsData.find(
    (n) => n.id === decodedId || n.slug === decodedId
  );

  if (!item) {
    return {
      title: 'Circular Not Found | Central Bank of Sudan',
    };
  }

  return {
    title: `${item.title.en} | Central Bank of Sudan`,
    description: item.excerpt.en,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id);
  const item = officialNewsData.find(
    (n) => n.id === decodedId || n.slug === decodedId
  );

  if (!item) {
    notFound();
  }

  const related = officialNewsData
    .filter((n) => n.id !== item.id)
    .slice(0, 3);

  return <NewsDetailClient item={item} related={related} />;
}
