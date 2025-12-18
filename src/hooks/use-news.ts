import { useQuery } from '@tanstack/react-query';
import { newsService } from '@/services/news-service';

// Hook to fetch all articles
export const useArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: () => newsService.getArticles(),
  });
};

// Hook to fetch a single article by ID
export const useArticle = (id: number) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: () => newsService.getArticleById(id),
    enabled: !!id,
  });
};

// Hook to fetch articles by category
export const useArticlesByCategory = (category: string) => {
  return useQuery({
    queryKey: ['articles', category],
    queryFn: () => newsService.getArticlesByCategory(category),
    enabled: !!category,
  });
};

// Hook to search articles
export const useSearchArticles = (query: string) => {
  return useQuery({
    queryKey: ['articles', 'search', query],
    queryFn: () => newsService.searchArticles(query),
    enabled: !!query,
  });
};