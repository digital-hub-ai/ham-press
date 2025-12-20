"use client";

import { useState, useEffect } from "react";
import { use } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Heart, 
  MessageCircle, 
  Bookmark,
  ArrowLeft,
  Globe,
  TrendingUp,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { newsService } from "@/services/news-service";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [article, setArticle] = useState<any>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const allArticles = await newsService.getArticles();
        const foundArticle = allArticles.find(
          (article: any) => article.id === params.id
        );
        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchArticle();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mx-auto mb-4"></div>
          <p className="text-[#E2E8F0]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-[#E2E8F0] mb-8">The requested article could not be found.</p>
          <Button 
            onClick={() => router.push('/blog')}
            className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A]">
      {/* Article Header */}
      <div className="container px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#2563EB]/10"
          onClick={() => router.push('/blog')}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] text-white px-3 py-1 rounded-full">
              {article.category}
            </Badge>
            {article.isPremium && (
              <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-3 py-1 rounded-full">
                PREMIUM
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-[#E2E8F0]">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{article.author.name}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ProfessionalImagePlaceholder 
              width={1200} 
              height={600} 
              title={article.title}
              category={article.category}
              variant="default"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-invert max-w-none text-[#E2E8F0] prose-headings:text-white prose-p:text-lg prose-p:leading-relaxed prose-a:text-[#2563EB] prose-a:hover:text-[#1D4ED8] prose-strong:text-white prose-em:text-[#E2E8F0]"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[#64748B]/30">
                <h3 className="text-xl font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Engagement Actions */}
              <div className="mt-12 flex flex-wrap gap-4">
                <Button 
                  variant="outline" 
                  className={`border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 ${liked ? 'border-[#EF4444] text-[#EF4444]' : ''}`}
                  onClick={() => setLiked(!liked)}
                >
                  <Heart className={`h-5 w-5 mr-2 ${liked ? 'fill-[#EF4444] text-[#EF4444]' : ''}`} />
                  {liked ? 'Liked' : 'Like'}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Comment
                </Button>
                
                <Button 
                  variant="outline" 
                  className={`border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10 ${bookmarked ? 'border-[#F59E0B] text-[#F59E0B]' : ''}`}
                  onClick={() => setBookmarked(!bookmarked)}
                >
                  <Bookmark className={`h-5 w-5 mr-2 ${bookmarked ? 'fill-[#F59E0B] text-[#F59E0B]' : ''}`} />
                  {bookmarked ? 'Bookmarked' : 'Bookmark'}
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-white">About the Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] flex items-center justify-center mr-3">
                      <span className="text-white font-bold">
                        {article.author.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{article.author.name}</h4>
                      <p className="text-[#E2E8F0] text-sm">{article.author.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}