"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Heart, MessageCircle, Share2 } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  views: number;
  likes: number;
  comments: number;
  isBreaking: boolean;
  isPremium: boolean;
}

export function HolographicNewsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  // Mock news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
      excerpt: "World leaders unite on ambitious targets to reduce global carbon emissions by 2030, marking a pivotal moment in environmental policy.",
      category: "Environment",
      author: "Sarah Johnson",
      date: "Dec 15, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 12400,
      likes: 856,
      comments: 42,
      isBreaking: true,
      isPremium: false
    },
    {
      id: 2,
      title: "Breakthrough in Quantum Computing Promises Revolution in Data Processing",
      excerpt: "Scientists achieve quantum supremacy milestone with new processor capable of calculations in minutes that would take traditional supercomputers millennia.",
      category: "Science",
      author: "Dr. Michael Chen",
      date: "Dec 12, 2025",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 9800,
      likes: 723,
      comments: 31,
      isBreaking: false,
      isPremium: true
    },
    {
      id: 3,
      title: "Global Markets Surge as Tech Stocks Hit Record Highs",
      excerpt: "Major indices reach all-time highs amid strong earnings reports from leading technology companies and renewed investor confidence.",
      category: "Economics",
      author: "Robert Williams",
      date: "Dec 10, 2025",
      readTime: "3 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 15600,
      likes: 1204,
      comments: 67,
      isBreaking: true,
      isPremium: false
    },
    {
      id: 4,
      title: "Renewable Energy Investment Surpasses Fossil Fuels for First Time",
      excerpt: "Global funding for solar and wind projects exceeds oil and gas investments, signaling a major shift in energy sector priorities.",
      category: "Environment",
      author: "Jennifer Lopez",
      date: "Dec 8, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 11200,
      likes: 932,
      comments: 38,
      isBreaking: false,
      isPremium: false
    },
    {
      id: 5,
      title: "AI-Powered Medical Diagnosis System Shows 99% Accuracy Rate",
      excerpt: "Clinical trials demonstrate revolutionary artificial intelligence system that can diagnose rare diseases with unprecedented precision.",
      category: "Health",
      author: "Dr. Sarah Kim",
      date: "Dec 5, 2025",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 8700,
      likes: 654,
      comments: 29,
      isBreaking: false,
      isPremium: true
    },
    {
      id: 6,
      title: "International Space Station Extension Announced Through 2035",
      excerpt: "NASA and international partners commit to continued operation of orbital laboratory, paving the way for expanded research missions.",
      category: "Science",
      author: "Emma Richardson",
      date: "Dec 3, 2025",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      views: 9400,
      likes: 789,
      comments: 45,
      isBreaking: false,
      isPremium: false
    }
  ];
  
  const categories = ["all", "Events", "Science", "Economics", "Health", "Environment"];
  
  const filteredItems = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Events": return "from-[#F59E0B] to-[#D97706]";
      case "Science": return "from-[#2563EB] to-[#1D4ED8]";
      case "Economics": return "from-[#10B981] to-[#047857]";
      case "Health": return "from-[#EC4899] to-[#DB2777]";
      case "Environment": return "from-[#0EA5E9] to-[#0284C7]";
      default: return "from-[#64748B] to-[#475569]";
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Holographic News Matrix</h2>
          <p className="text-[#E2E8F0]">Experience news in a multidimensional grid with interactive 3D cards</p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#0F172A] text-[#E2E8F0] hover:bg-[#2563EB]/20"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "All News" : category}
            </button>
          ))}
        </div>
      </div>
      
      {/* 3D Grid of News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* 3D Card Effect */}
              <div className="relative transform transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                {/* Card Shadow */}
                <div className="absolute inset-0 bg-[#2563EB] rounded-2xl blur-xl opacity-20 -z-10"></div>
                
                {/* Main Card */}
                <div className="bg-[#0F172A]/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#64748B]/30">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.isBreaking && (
                        <div className="bg-[#F59E0B] text-[#0A0A0F] px-3 py-1 rounded-full text-xs font-bold">
                          BREAKING
                        </div>
                      )}
                      {item.isPremium && (
                        <div className="bg-[#8B5CF6] text-white px-3 py-1 rounded-full text-xs font-bold">
                          PREMIUM
                        </div>
                      )}
                    </div>
                    
                    {/* Category Tag */}
                    <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                    <p className="text-[#E2E8F0] mb-4 line-clamp-3">{item.excerpt}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-[#E2E8F0]/70 mb-4">
                      <span>{item.author}</span>
                      <span>{item.date}</span>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#64748B]/30">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-xs">{item.views > 1000 ? `${(item.views/1000).toFixed(1)}K` : item.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-xs">{item.likes > 1000 ? `${(item.likes/1000).toFixed(1)}K` : item.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-xs">{item.comments}</span>
                        </div>
                      </div>
                      
                      <button className="p-2 rounded-full hover:bg-[#2563EB]/20 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Holographic Glow Effect on Hover */}
              {hoveredItem === item.id && (
                <motion.div 
                  className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-2xl blur-2xl opacity-30"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* 3D Visualization Controls */}
      <div className="mt-12 pt-6 border-t border-[#64748B]/30">
        <h3 className="text-lg font-bold text-white mb-4">Matrix Controls</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-[#0F172A] px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#2563EB]"></div>
            <span className="text-[#E2E8F0]">Rotate View</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0F172A] px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
            <span className="text-[#E2E8F0]">Zoom In/Out</span>
          </div>
          <div className="flex items-center gap-2 bg-[#0F172A] px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            <span className="text-[#E2E8F0]">Filter by Category</span>
          </div>
        </div>
      </div>
    </div>
  );
}