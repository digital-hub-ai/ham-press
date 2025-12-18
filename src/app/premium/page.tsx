"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Crown, 
  Star, 
  Zap, 
  Award,
  Lock,
  CheckCircle,
  TrendingUp,
  Eye,
  Heart,
  Calendar,
  User,
  DollarSign,
  Shield,
  Bell,
  Gift,
  Search,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProfessionalImagePlaceholder } from "@/components/elements/professional-image-placeholder";
import Link from "next/link";

// Actual premium articles data from our article database
const premiumArticles = [
  {
    id: "global-food-industry-leaders-convene-in-copenhagen-for-sustainability-summit",
    title: "Global Food Industry Leaders Convene in Copenhagen for Sustainability Summit",
    excerpt: "World leaders in food industry gather to discuss sustainability and trade policies affecting premium markets.",
    category: "International",
    author: "Sophia Anderson, Global Correspondent",
    date: "December 18, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "12.4K",
    likes: "856",
    comments: "42",
    engagementScore: 98,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "revolutionary-curing-technique-developed-in-japan",
    title: "Revolutionary Curing Technique Developed in Japan",
    excerpt: "Japanese scientists unveil breakthrough fermentation process that enhances flavor profiles by 300%.",
    category: "Science",
    author: "Kenji Tanaka, Tokyo Bureau Chief",
    date: "December 17, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: false,
    isPremium: true,
    views: "9.8K",
    likes: "723",
    comments: "31",
    engagementScore: 95,
    sentiment: "neutral",
    exclusive: true
  },
  {
    id: "us-economic-growth-surpasses-expectations-in-q4-2025",
    title: "US Economic Growth Surpasses Expectations in Q4 2025",
    excerpt: "Fourth-quarter GDP growth reaches 3.2%, exceeding analyst predictions amid strong consumer spending and tech sector performance.",
    category: "Economy",
    author: "Jennifer Walsh, Washington Bureau Chief",
    date: "December 20, 2025",
    readTime: "6 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "24.7K",
    likes: "1.2K",
    comments: "87",
    engagementScore: 97,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "california-leads-nation-in-renewable-energy-milestone",
    title: "California Leads Nation in Renewable Energy Milestone",
    excerpt: "Golden State achieves 95% clean energy production for entire week, setting new benchmark for sustainable power generation.",
    category: "Environment",
    author: "Michael Torres, San Francisco Correspondent",
    date: "December 19, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: false,
    isPremium: true,
    views: "18.3K",
    likes: "956",
    comments: "64",
    engagementScore: 96,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "tech-giants-announce-major-job-creation-initiative-in-texas",
    title: "Tech Giants Announce Major Job Creation Initiative in Texas",
    excerpt: "Apple, Google, and Microsoft pledge to create 25,000 new positions in Austin and Dallas-Fort Worth metro areas over next three years.",
    category: "Business",
    author: "Sarah Mitchell, Dallas Bureau",
    date: "December 17, 2025",
    readTime: "5 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: false,
    isPremium: true,
    views: "28.9K",
    likes: "1.8K",
    comments: "93",
    engagementScore: 94,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "new-york-city-launches-largest-affordable-housing-program-in-decade",
    title: "New York City Launches Largest Affordable Housing Program in Decade",
    excerpt: "$40 billion initiative aims to create 100,000 new affordable units by 2030, addressing critical shortage in metropolitan area.",
    category: "Politics",
    author: "Lisa Rodriguez, NYC Bureau",
    date: "December 15, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "19.7K",
    likes: "876",
    comments: "72",
    engagementScore: 93,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "biden-administration-announces-new-climate-initiative-targeting-2030-carbon-neutrality",
    title: "Biden Administration Announces New Climate Initiative Targeting 2030 Carbon Neutrality",
    excerpt: "President unveils comprehensive plan to reduce greenhouse gas emissions by 50% through renewable energy investments and industrial reforms.",
    category: "Politics",
    author: "Jennifer Walsh, Washington Bureau Chief",
    date: "December 14, 2025",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "35.2K",
    likes: "2.1K",
    comments: "187",
    engagementScore: 92,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "artificial-intelligence-regulation-framework-proposed-by-congress",
    title: "Artificial Intelligence Regulation Framework Proposed by Congress",
    excerpt: "Legislative proposal aims to balance innovation with consumer protection as AI technologies rapidly advance across industries.",
    category: "Technology",
    author: "Robert Chen, Tech Policy Reporter",
    date: "December 13, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: false,
    isPremium: true,
    views: "28.7K",
    likes: "1.4K",
    comments: "96",
    engagementScore: 91,
    sentiment: "neutral",
    exclusive: true
  },
  {
    id: "congress-passes-comprehensive-infrastructure-modernization-act",
    title: "Congress Passes Comprehensive Infrastructure Modernization Act",
    excerpt: "Landmark $1.2 trillion legislation allocates funding for next-generation transportation, broadband expansion, and smart city initiatives across all 50 states.",
    category: "Politics",
    author: "David Harrison, Congressional Correspondent",
    date: "December 11, 2025",
    readTime: "10 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "38.7K",
    likes: "2.4K",
    comments: "167",
    engagementScore: 90,
    sentiment: "positive",
    exclusive: true
  },
  {
    id: "fda-approves-breakthrough-gene-therapy-for-inherited-blindness",
    title: "FDA Approves Breakthrough Gene Therapy for Inherited Blindness",
    excerpt: "Revolutionary treatment offers hope to thousands of patients with rare genetic eye disorders, marking major milestone in personalized medicine.",
    category: "Science",
    author: "Dr. Emily Watson, Biotech Reporter",
    date: "December 10, 2025",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    isBreaking: true,
    isPremium: true,
    views: "31.5K",
    likes: "1.9K",
    comments: "89",
    engagementScore: 89,
    sentiment: "positive",
    exclusive: true
  }
];

const premiumBenefits = [
  {
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    title: "Exclusive Content",
    description: "Access to premium investigative reports and insider analyses unavailable to regular readers"
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400" />,
    title: "Early Access",
    description: "Receive breaking news and major announcements up to 24 hours before public release"
  },
  {
    icon: <Shield className="h-8 w-8 text-green-400" />,
    title: "Ad-Free Experience",
    description: "Enjoy uninterrupted reading with our completely ad-free premium environment"
  },
  {
    icon: <Bell className="h-8 w-8 text-purple-400" />,
    title: "Personalized Alerts",
    description: "Custom notifications tailored to your interests and preferred topics"
  },
  {
    icon: <Gift className="h-8 w-8 text-pink-400" />,
    title: "Special Events",
    description: "Invitations to exclusive virtual events with industry leaders and experts"
  },
  {
    icon: <Award className="h-8 w-8 text-orange-400" />,
    title: "Premium Support",
    description: "Dedicated customer service with priority response times"
  }
];

const subscriptionPlans = [
  {
    name: "Monthly",
    price: "$9.99",
    period: "per month",
    features: [
      "Unlimited premium articles",
      "Early access to content",
      "Ad-free experience",
      "Personalized alerts",
      "Basic support"
    ],
    popular: false
  },
  {
    name: "Annual",
    price: "$79.99",
    period: "per year",
    features: [
      "Everything in Monthly",
      "20% savings",
      "Exclusive events access",
      "Priority support",
      "Offline reading"
    ],
    popular: true
  },
  {
    name: "Lifetime",
    price: "$499.99",
    period: "one time",
    features: [
      "Everything in Annual",
      "Lifetime access",
      "Highest priority support",
      "Special recognition",
      "Future premium features"
    ],
    popular: false
  }
];

export default function PremiumPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSentiment, setSelectedSentiment] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("engagement");
  const [filteredArticles, setFilteredArticles] = useState(premiumArticles);

  useEffect(() => {
    let result = premiumArticles;
    
    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(article => article.category === selectedCategory);
    }
    
    // Apply sentiment filter
    if (selectedSentiment !== "all") {
      result = result.filter(article => article.sentiment === selectedSentiment);
    }
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(term) || 
        article.excerpt.toLowerCase().includes(term) ||
        article.author.toLowerCase().includes(term)
      );
    }
    
    // Apply sorting
    if (sortBy === "engagement") {
      result.sort((a, b) => b.engagementScore - a.engagementScore);
    } else if (sortBy === "popular") {
      // Convert views like "12.4K" to numeric values for sorting
      const convertViews = (views: string) => {
        if (views.endsWith('K')) {
          return parseFloat(views.replace('K', '')) * 1000;
        } else if (views.endsWith('M')) {
          return parseFloat(views.replace('M', '')) * 1000000;
        }
        return parseFloat(views);
      };
      result.sort((a, b) => convertViews(b.views) - convertViews(a.views));
    } else if (sortBy === "recent") {
      // For simplicity, we'll sort by engagement score as a proxy for recency
      result.sort((a, b) => b.engagementScore - a.engagementScore);
    }
    
    setFilteredArticles(result);
  }, [selectedCategory, selectedSentiment, searchTerm, sortBy]);

  const categories = ["All", "Politics", "Economy", "Technology", "Business", "Environment"];

  const sentimentFilters = [
    { label: "All", value: "all" },
    { label: "Positive", value: "positive", icon: "😊" },
    { label: "Neutral", value: "neutral", icon: "😐" },
    { label: "Negative", value: "negative", icon: "😞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0F172A]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8B5CF6]/10 via-transparent to-transparent"></div>
        
        <div className="container relative px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-4 py-1.5 rounded-full text-sm font-medium">
              <Crown className="h-4 w-4 mr-2 inline" />
              Premium Membership
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#F59E0B] via-[#8B5CF6] to-[#2563EB] bg-clip-text text-transparent mb-6">
              World Largest Premium News
            </h1>
            
            <p className="text-xl text-[#E2E8F0] mb-10 max-w-2xl mx-auto">
              Unlock unparalleled access to the world's largest collection of premium journalism, exclusive content, and insider perspectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                <Star className="h-5 w-5 mr-2" />
                Subscribe Now
              </Button>
              <Button variant="outline" className="border-[#64748B] text-[#E2E8F0] hover:bg-[#F59E0B]/10 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300">
                <Eye className="h-5 w-5 mr-2" />
                Preview Benefits
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Benefits */}
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent mb-4">
            World's Largest Premium Benefits
          </h2>
          <p className="text-[#E2E8F0] max-w-2xl mx-auto">
            Elevate your news experience with exclusive features designed for discerning readers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 hover:border-[#F59E0B]/50 transition-all duration-300 group overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-[#E2E8F0]">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="container px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
            World's Largest Subscription Plans
          </h2>
          <p className="text-[#E2E8F0] max-w-2xl mx-auto">
            Choose the plan that best fits your premium news consumption needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "scale-105 z-10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`bg-[#0F172A]/50 backdrop-blur-lg border ${plan.popular ? "border-[#F59E0B]/50 shadow-xl shadow-[#F59E0B]/10" : "border-[#64748B]/30"} transition-all duration-300 group overflow-hidden h-full`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <p className="text-[#E2E8F0]">{plan.period}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-[#E2E8F0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full rounded-full py-3 font-medium transition-all duration-300 ${
                      plan.popular 
                        ? "bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white" 
                        : "border border-[#64748B] text-[#E2E8F0] hover:bg-[#F59E0B]/10"
                    }`}
                  >
                    {plan.popular ? "Get Started" : "Select Plan"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Content Showcase */}
      <div className="container px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] bg-clip-text text-transparent mb-2">
              World's Largest Premium Content
            </h2>
            <p className="text-[#E2E8F0]">
              Exclusive articles and reports available only to premium members
            </p>
          </div>
          
          <Button variant="ghost" className="text-[#8B5CF6] hover:text-[#7C3AED]">
            <Lock className="h-5 w-5 mr-2" />
            View All Exclusive Content
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#64748B]" />
            <input 
              type="text"
              placeholder="Search premium content..." 
              className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#64748B]/30 rounded-xl text-[#E2E8F0] focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] placeholder-[#64748B]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Sort Options */}
          <div className="flex gap-2">
            <Button
              variant={sortBy === "engagement" ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm ${
                sortBy === "engagement"
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white"
                  : "border-[#64748B] text-[#E2E8F0] hover:bg-[#8B5CF6]/10"
              }`}
              onClick={() => setSortBy("engagement")}
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Engagement
            </Button>
            <Button
              variant={sortBy === "popular" ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm ${
                sortBy === "popular"
                  ? "bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white"
                  : "border-[#64748B] text-[#E2E8F0] hover:bg-[#2563EB]/10"
              }`}
              onClick={() => setSortBy("popular")}
            >
              <Eye className="h-4 w-4 mr-2" />
              Popular
            </Button>
            <Button
              variant={sortBy === "recent" ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm ${
                sortBy === "recent"
                  ? "bg-gradient-to-r from-[#10B981] to-[#047857] text-white"
                  : "border-[#64748B] text-[#E2E8F0] hover:bg-[#10B981]/10"
              }`}
              onClick={() => setSortBy("recent")}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Recent
            </Button>
          </div>
        </div>

        {/* Category and Sentiment Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            <span className="text-[#E2E8F0] self-center mr-2">Categories:</span>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-4 py-2 text-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#2563EB] text-white"
                    : "border-[#64748B] text-[#E2E8F0] hover:bg-[#8B5CF6]/10"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="text-[#E2E8F0] self-center mr-2">Sentiment:</span>
            {sentimentFilters.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedSentiment === filter.value ? "default" : "outline"}
                className={`rounded-full px-4 py-2 text-sm ${
                  selectedSentiment === filter.value
                    ? "bg-gradient-to-r from-[#EC4899] to-[#DB2777] text-white"
                    : "border-[#64748B] text-[#E2E8F0] hover:bg-[#EC4899]/10"
                }`}
                onClick={() => setSelectedSentiment(filter.value)}
              >
                <span className="mr-1">{filter.icon}</span>
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Premium Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="block"
              >
                <Link href={`/articles/${article.id}`} className="block">
                  <Card className="bg-[#0F172A]/50 backdrop-blur-lg border border-[#64748B]/30 hover:border-[#8B5CF6]/50 transition-all duration-300 group overflow-hidden cursor-pointer h-full flex flex-col">
                    <div className="relative flex-shrink-0">
                      <ProfessionalImagePlaceholder 
                        width={600} 
                        height={300} 
                        title={article.title}
                        category={article.category}
                        variant="premium"
                      />
                      {article.isBreaking && (
                        <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                          BREAKING
                        </Badge>
                      )}
                      {article.exclusive && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white">
                          <Crown className="h-3 w-3 mr-1" />
                          EXCLUSIVE
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-[#8B5CF6]/20 text-[#8B5CF6] border-0">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-[#94A3B8]">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300 line-clamp-3">
                        {article.title}
                      </h3>
                      
                      <p className="text-[#E2E8F0] text-sm mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-4">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-[#64748B]/30">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-xs text-[#94A3B8]">
                            <Eye className="h-4 w-4 mr-1" />
                            {article.views}
                          </div>
                          <div className="flex items-center text-xs text-[#94A3B8]">
                            <Heart className="h-4 w-4 mr-1" />
                            {article.likes}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#8B5CF6] hover:text-[#7C3AED] hover:bg-[#8B5CF6]/10 p-0 h-auto">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}