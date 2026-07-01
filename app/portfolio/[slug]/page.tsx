import { getPortfolioItem, getPortfolioItems } from '@/lib/portfolio';
import { ProductTemplate } from '@/components/shared/ProductTemplate';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolioItem(slug);
  if (!portfolio) return {};
  return {
    title: portfolio.name,
    description: portfolio.description,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const items = getPortfolioItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const portfolio = getPortfolioItem(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <ProductTemplate 
      product={portfolio} 
      backUrl="/portfolio" 
      backLabel="Kembali ke Portofolio" 
      isPortfolio={true}
    />
  );
}
