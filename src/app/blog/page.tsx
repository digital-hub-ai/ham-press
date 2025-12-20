"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";
import { newsService } from "@/services/news-service";

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const allArticles = await newsService.getArticles();
        // Filter for blog posts (those with string IDs)
        const blogArticles = allArticles.filter(article => typeof article.id === 'string');
        setArticles(blogArticles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-[#E2E8F0]">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Premium Blog</h1>
        <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
          In-depth analysis and insights on luxury markets, premium services, and high-income consumer trends
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link key={article.id} href={`/blog/${article.id}`} className="block">
            <AnimatedCard className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
              <div className="relative">
                <div className="w-full h-48">
                  <ProfessionalImagePlaceholder 
                    title={article.title}
                    category={article.category}
                    variant={
                      article.category.includes("Market") || article.category.includes("Economics") || article.category.includes("Business") 
                        ? "market" 
                        : article.category.includes("Event") 
                          ? "event" 
                          : article.category.includes("Science") || article.category.includes("Technology")
                            ? "science"
                            : "default"
                    }
                  />
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  {article.isPremium && (
                    <Badge className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90">
                      PREMIUM
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90">{article.category}</Badge>
                  <span className="text-sm text-[#E2E8F0] flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 text-white">{article.title}</CardTitle>
                <CardDescription className="text-[#E2E8F0]">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-[#E2E8F0]">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>
        ))}
      </div>
    </div>
  );
}