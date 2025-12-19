import { type NextRequest } from 'next/server';

// Mock article data - in a real app, this would come from your database or CMS
const articles = [
  {
    id: "global-food-industry-leaders-convene-in-copenhagen-for-sustainability-summit",
    title: "Global Food Industry Leaders Convene in Copenhagen for Sustainability Summit",
    date: "2025-12-18T10:00:00.000Z",
    category: "International",
    keywords: "food industry, sustainability, trade policy, artisanal, global summit"
  },
  {
    id: "revolutionary-curing-technique-developed-in-japan",
    title: "Revolutionary Curing Technique Developed in Japan",
    date: "2025-12-17T09:30:00.000Z",
    category: "Science",
    keywords: "food science, fermentation, innovation, technology, food preservation"
  },
  {
    id: "australian-ham-exports-surge-to-eu-markets",
    title: "Australian Ham Exports Surge to EU Markets",
    date: "2025-12-16T14:15:00.000Z",
    category: "Trade",
    keywords: "ham exports, trade, Australia, EU, food trade"
  },
  {
    id: "sustainable-farming-initiative-launched",
    title: "Sustainable Farming Initiative Launched",
    date: "2025-12-14T11:45:00.000Z",
    category: "Environment",
    keywords: "sustainable farming, agriculture, environment, carbon neutral, eco-friendly"
  },
  {
    id: "european-union-announces-new-food-labeling-regulations",
    title: "European Union Announces New Food Labeling Regulations",
    date: "2025-12-13T16:20:00.000Z",
    category: "Politics",
    keywords: "EU, food labeling, regulations, policy, consumer protection"
  },
  {
    id: "tech-giants-announce-major-job-creation-initiative-in-texas",
    title: "Tech Giants Announce Major Job Creation Initiative in Texas",
    date: "2025-12-12T08:00:00.000Z",
    category: "Business",
    keywords: "tech giants, job creation, Texas, employment, business"
  },
  {
    id: "federal-reserve-holds-interest-rates-steady-amid-inflation-concerns",
    title: "Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns",
    date: "2025-12-11T15:30:00.000Z",
    category: "Finance",
    keywords: "Federal Reserve, interest rates, inflation, economy, finance"
  }
];

export async function GET(request: NextRequest) {
  const baseUrl = 'https://ham-news.vercel.app';
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${articles.map(article => `
  <url>
    <loc>${baseUrl}/articles/${article.id}</loc>
    <news:news>
      <news:publication>
        <news:name>Ham News</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>${article.keywords}</news:keywords>
      <news:stock_tickers/>
    </news:news>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}