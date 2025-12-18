"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, TrendingUp, Star } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";

export default function HamNewsPage() {
  // Professional ham news articles targeted at high CPM countries (USA, UK, Germany)
  const articles = [
    {
      id: "global-food-industry-leaders-convene-in-copenhagen-for-sustainability-summit",
      title: "Global Food Industry Leaders Convene in Copenhagen for Sustainability Summit",
      excerpt: "World leaders in food industry gather to discuss sustainability and trade policies affecting premium markets.",
      category: "International",
      author: "Sophia Anderson, Global Correspondent",
      date: "Dec 18, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
    },
    {
      id: "revolutionary-curing-technique-developed-in-japan",
      title: "Revolutionary Curing Technique Developed in Japan",
      excerpt: "Japanese scientists unveil breakthrough fermentation process that enhances flavor profiles by 300%.",
      category: "Science",
      author: "Kenji Tanaka, Tokyo Bureau",
      date: "Dec 17, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
    },
    {
      id: "australian-ham-exports-surge-to-eu-markets",
      title: "Australian Food Exports Surge to EU Markets",
      excerpt: "Record-breaking shipments of premium Australian food products to European Union countries.",
      category: "Trade",
      author: "Emma Richardson, Sydney Correspondent",
      date: "Dec 16, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: false,
    },
    {
      id: "artisan-ham-festival-draws-100000-visitors",
      title: "Artisan Food Festival Draws 100,000 Visitors",
      excerpt: "Annual celebration of handcrafted food traditions attracts record crowds in Parma, Italy.",
      category: "Events",
      author: "Marco Rossi, Rome Bureau",
      date: "Dec 15, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
    },
    {
      id: "sustainable-farming-initiative-launched",
      title: "Sustainable Farming Initiative Launched",
      excerpt: "Major producers commit to carbon-neutral production by 2030 with innovative eco-friendly practices.",
      category: "Environment",
      author: "Dr. Sarah Kim, Environmental Desk",
      date: "Dec 14, 2025",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: false,
    },
    {
      id: "new-quality-standards-approved-by-wto",
      title: "New Quality Standards Approved by WTO",
      excerpt: "International trade organization establishes universal benchmarks for food authenticity and labeling.",
      category: "Regulations",
      author: "Robert Williams, Geneva Bureau",
      date: "Dec 13, 2025",
      readTime: "10 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: true,
    },
  ];

  return (
    <div className="container py-12">
      {/* Hero Section with Premium Design */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          FOOD NEWS SPECIALTY SECTION
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          World's Largest Premium News
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Premium international news coverage. Expert analysis from bureaus in Washington, London, and Berlin.
        </p>
        
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-[#10B981]" />
            <span className="text-xl font-medium text-white">240K Monthly Readers</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-[#F59E0B]" />
            <span className="text-xl font-medium text-white">Premium CPM Markets</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-[#2563EB]" />
            <span className="text-xl font-medium text-white">USA • UK • Germany</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
            Subscribe Now
          </Button>
          <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-4 text-lg rounded-full">
            View Trending
          </Button>
        </div>
      </div>

      {/* Articles Grid with Glass Morphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} className="block">
            <AnimatedCard 
              className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <div className="w-full h-56">
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
                  {article.isBreaking && (
                    <Badge className="bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90">
                      BREAKING
                    </Badge>
                  )}
                  {article.isPremium && (
                    <Badge className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90">
                      PREMIUM
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Badge className="bg-[#2563EB] text-white hover:bg-[#2563EB]/90">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-[#E2E8F0] flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl mb-3 text-white">{article.title}</CardTitle>
                <CardDescription className="text-[#E2E8F0]">{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>
        ))}
      </div>

      {/* Load More with Premium Design */}
      <div className="mt-16 flex justify-center">
        <Button 
          variant="outline" 
          size="lg" 
          className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-12 py-4 text-lg rounded-full"
        >
          Load More Articles
        </Button>
      </div>
      
      {/* Premium Subscription CTA */}
      <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-[#8B5CF6] text-white text-lg py-2 px-4">PREMIUM ACCESS</Badge>
          <h2 className="text-4xl font-bold mb-6 text-white">Unlock Exclusive Premium Insights</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Join LuminaPress Premium to access in-depth analysis, exclusive interviews, and early access to breaking news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-4 text-lg rounded-full">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}