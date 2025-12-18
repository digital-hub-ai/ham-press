import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

interface NewsState {
  bookmarks: number[];
  theme: 'light' | 'dark' | 'system';
  articles: Article[];
  addBookmark: (articleId: number) => void;
  removeBookmark: (articleId: number) => void;
  isBookmarked: (articleId: number) => boolean;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setArticles: (articles: Article[]) => void;
}

export const useNewsStore = create<NewsState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      theme: 'system',
      articles: [],
      
      addBookmark: (articleId) => {
        const { bookmarks } = get();
        if (!bookmarks.includes(articleId)) {
          set({ bookmarks: [...bookmarks, articleId] });
        }
      },
      
      removeBookmark: (articleId) => {
        const { bookmarks } = get();
        set({ bookmarks: bookmarks.filter(id => id !== articleId) });
      },
      
      isBookmarked: (articleId) => {
        const { bookmarks } = get();
        return bookmarks.includes(articleId);
      },
      
      setTheme: (theme) => set({ theme }),
      
      setArticles: (articles) => set({ articles }),
    }),
    {
      name: 'news-storage',
    }
  )
);