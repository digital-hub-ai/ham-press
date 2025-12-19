import { MetadataRoute } from 'next';

// Mock article data - in a real app, this would come from your database or CMS
const articles = [
  {
    id: "global-food-industry-leaders-convene-in-copenhagen-for-sustainability-summit",
    date: "2025-12-18",
    category: "International"
  },
  {
    id: "revolutionary-curing-technique-developed-in-japan",
    date: "2025-12-17",
    category: "Science"
  },
  {
    id: "australian-ham-exports-surge-to-eu-markets",
    date: "2025-12-16",
    category: "Trade"
  },
  {
    id: "sustainable-farming-initiative-launched",
    date: "2025-12-14",
    category: "Environment"
  },
  {
    id: "european-union-announces-new-food-labeling-regulations",
    date: "2025-12-13",
    category: "Politics"
  },
  {
    id: "tech-giants-announce-major-job-creation-initiative-in-texas",
    date: "2025-12-12",
    category: "Business"
  },
  {
    id: "federal-reserve-holds-interest-rates-steady-amid-inflation-concerns",
    date: "2025-12-11",
    category: "Finance"
  }
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ham-news.vercel.app';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/advertise',
    '/careers',
    '/community',
    '/contact',
    '/cookies',
    '/food-news',
    '/ham-news',
    '/help',
    '/premium',
    '/privacy',
    '/subscribe',
    '/terms',
    '/trending',
    '/world'
  ].map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: page === '' ? 1 : 0.8
  }));

  // Dynamic article pages
  const articlePages = articles.map(article => ({
    url: `${baseUrl}/articles/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9
  }));

  // Combine all pages
  return [...staticPages, ...articlePages];
}