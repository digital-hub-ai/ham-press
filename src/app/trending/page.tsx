"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, TrendingUp, Eye, Heart, MessageCircle, Filter } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";

export default function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeRange, setTimeRange] = useState("today");

  // Professional trending articles targeted at high CPM countries (USA, UK, Germany)
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
      views: "12.4K",
      likes: 856,
      comments: 42,
      trendScore: 98
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
      views: "9.7K",
      likes: 642,
      comments: 28,
      trendScore: 92
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
      views: "15.2K",
      likes: 1204,
      comments: 67,
      trendScore: 95
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
      views: "8.3K",
      likes: 521,
      comments: 31,
      trendScore: 87
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
      views: "11.8K",
      likes: 765,
      comments: 45,
      trendScore: 89
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
      views: "14.6K",
      likes: 987,
      comments: 53,
      trendScore: 94
    },
    {
      id: "us-economic-growth-surpasses-expectations-in-q4-2025",
      title: "US Economic Growth Surpasses Expectations in Q4 2025",
      excerpt: "Fourth-quarter GDP growth reaches 3.2%, exceeding analyst predictions amid strong consumer spending and tech sector performance.",
      category: "Economy",
      author: "Jennifer Walsh, Washington Bureau",
      date: "Dec 12, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
      views: "18.9K",
      likes: 1456,
      comments: 89,
      trendScore: 97
    },
    {
      id: "california-leads-nation-in-renewable-energy-milestone",
      title: "California Leads Nation in Renewable Energy Milestone",
      excerpt: "Golden State achieves 95% clean energy production for entire week, setting new benchmark for sustainable power generation.",
      category: "Environment",
      author: "Michael Torres, San Francisco Bureau",
      date: "Dec 11, 2025",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: false,
      views: "22.4K",
      likes: 1876,
      comments: 112,
      trendScore: 99
    },
    {
      id: "federal-reserve-holds-interest-rates-steady-amid-inflation-concerns",
      title: "Federal Reserve Holds Interest Rates Steady Amid Inflation Concerns",
      excerpt: "Central bank maintains current rate levels as consumer price indicators show signs of stabilization in key sectors.",
      category: "Politics",
      author: "Robert Chen, Financial Policy Reporter",
      date: "Dec 10, 2025",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: true,
      isPremium: false,
      views: "32.1K",
      likes: 1500,
      comments: 142,
      trendScore: 96
    },
    {
      id: "tech-giants-announce-major-job-creation-initiative-in-texas",
      title: "Tech Giants Announce Major Job Creation Initiative in Texas",
      excerpt: "Apple, Google, and Microsoft pledge to create 25,000 new positions in Austin and Dallas-Fort Worth metro areas over next three years.",
      category: "Business",
      author: "Sarah Mitchell, Dallas Bureau",
      date: "Dec 9, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=600",
      isBreaking: false,
      isPremium: true,
      views: "28.9K",
      likes: 1800,
      comments: 93,
      trendScore: 93
    }
  ];

  const categories = ["All", "International", "Science", "Trade", "Events", "Environment", "Regulations", "Economy"];

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="container py-12">
      {/* Hero Section with Premium Design */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#F59E0B] text-[#0A0A0F] hover:bg-[#F59E0B]/90 text-lg py-2 px-6">
          TRENDING NOW
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
          What's Hot in News
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Discover the most talked-about stories from around the globe. Our trending algorithm surfaces 
          the most engaging content based on reader interactions and social buzz.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-12">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "today" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("today")}
                >
                  Today
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "week" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("week")}
                >
                  This Week
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#F59E0B]/10 ${
                    timeRange === "month" ? "bg-[#F59E0B]/20 border-[#F59E0B]" : ""
                  }`}
                  onClick={() => setTimeRange("month")}
                >
                  This Month
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className={`border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#2563EB]/10 ${
                      selectedCategory === category ? "bg-[#2563EB]/20 border-[#2563EB]" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Trending Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredArticles.map((article, index) => (
          <Link key={article.id} href={`/articles/${article.id}`} className="block">
            <AnimatedCard 
              className="overflow-hidden rounded-2xl border border-[#64748B]/30 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <div className="w-full h-64">
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
                  <div className="flex items-center bg-black/50 rounded-full px-2 py-1">
                    <TrendingUp className="h-4 w-4 text-[#F59E0B] mr-1" />
                    <span className="text-white text-sm font-medium">#{index + 1}</span>
                  </div>
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
                <div className="flex items-center justify-between text-sm text-[#E2E8F0] mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-[#64748B]/30">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <Eye className="h-4 w-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{article.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E2E8F0]">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{article.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-[#F59E0B]" />
                    <span className="text-sm font-medium text-[#F59E0B]">{article.trendScore}/100</span>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </Link>
        ))}
      </div>

      {/* Trending Topics */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Trending Topics</h2>
        <div className="flex flex-wrap gap-4">
          {["Sustainability", "Trade Policies", "Food Technology", "Renewable Energy", "Economic Growth", "Artisan Products", "Climate Change", "Global Markets"].map((topic, index) => (
            <Badge 
              key={index} 
              className="text-lg py-3 px-6 bg-gradient-to-r from-[#F59E0B]/20 to-[#D97706]/20 text-white border border-[#F59E0B]/30 hover:from-[#F59E0B]/30 hover:to-[#D97706]/30 transition-all duration-300 cursor-pointer"
            >
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      {/* Premium Subscription CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#F59E0B]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F59E0B]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Badge className="mb-6 bg-[#F59E0B] text-[#0A0A0F] text-lg py-2 px-4">STAY AHEAD OF THE CURVE</Badge>
          <h2 className="text-4xl font-bold mb-6 text-white">Never Miss a Trending Story</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Subscribe to LuminaPress Premium for exclusive access to our trending algorithm and early alerts on breaking stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-[#0A0A0F] px-8 py-4 text-lg rounded-full">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 px-8 py-4 text-lg rounded-full">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}