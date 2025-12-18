"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, TrendingUp } from "lucide-react";

interface TimeSlot {
  id: number;
  time: string;
  title: string;
  category: string;
  importance: number;
  sentiment: "positive" | "negative" | "neutral";
  trend: "rising" | "falling" | "stable";
}

export function TimeCrystalTimeline() {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"24h" | "7d" | "30d">("24h");
  
  // Mock data for different timeframes
  const timeSlots24h: TimeSlot[] = [
    { id: 1, time: "00:00", title: "Overnight Market Update", category: "Economics", importance: 0.6, sentiment: "neutral", trend: "stable" },
    { id: 2, time: "03:00", title: "Asia Markets Open", category: "Economics", importance: 0.7, sentiment: "positive", trend: "rising" },
    { id: 3, time: "06:00", title: "European Breakfast Brief", category: "Economics", importance: 0.5, sentiment: "neutral", trend: "stable" },
    { id: 4, time: "09:00", title: "Wall Street Opens", category: "Economics", importance: 0.9, sentiment: "positive", trend: "rising" },
    { id: 5, time: "12:00", title: "Midday Ham Report", category: "Business", importance: 0.8, sentiment: "positive", trend: "rising" },
    { id: 6, time: "15:00", title: "Tech Sector Update", category: "Technology", importance: 0.7, sentiment: "negative", trend: "falling" },
    { id: 7, time: "18:00", title: "Evening Wrap-Up", category: "Economics", importance: 0.6, sentiment: "neutral", trend: "stable" },
    { id: 8, time: "21:00", title: "Global News Digest", category: "World", importance: 0.8, sentiment: "positive", trend: "rising" },
  ];
  
  const timeSlots7d: TimeSlot[] = [
    { id: 1, time: "Mon", title: "Weekly Market Outlook", category: "Economics", importance: 0.9, sentiment: "positive", trend: "rising" },
    { id: 2, time: "Tue", title: "Ham Industry Trends", category: "Business", importance: 0.7, sentiment: "positive", trend: "rising" },
    { id: 3, time: "Wed", title: "Tech Innovations", category: "Technology", importance: 0.6, sentiment: "neutral", trend: "stable" },
    { id: 4, time: "Thu", title: "Sustainability Report", category: "Environment", importance: 0.8, sentiment: "positive", trend: "rising" },
    { id: 5, time: "Fri", title: "Weekend Preview", category: "Lifestyle", importance: 0.5, sentiment: "positive", trend: "stable" },
    { id: 6, time: "Sat", title: "Weekend Markets", category: "Economics", importance: 0.4, sentiment: "neutral", trend: "stable" },
    { id: 7, time: "Sun", title: "Global Perspective", category: "World", importance: 0.7, sentiment: "positive", trend: "rising" },
  ];
  
  const timeSlots30d: TimeSlot[] = [
    { id: 1, time: "Week 1", title: "Monthly Economic Review", category: "Economics", importance: 0.9, sentiment: "positive", trend: "rising" },
    { id: 2, time: "Week 2", title: "Ham Market Analysis", category: "Business", importance: 0.8, sentiment: "positive", trend: "rising" },
    { id: 3, time: "Week 3", title: "Innovation Spotlight", category: "Technology", importance: 0.7, sentiment: "neutral", trend: "stable" },
    { id: 4, time: "Week 4", title: "Sustainability Milestones", category: "Environment", importance: 0.8, sentiment: "positive", trend: "rising" },
  ];
  
  const getTimeSlots = () => {
    switch(selectedTimeframe) {
      case "24h": return timeSlots24h;
      case "7d": return timeSlots7d;
      case "30d": return timeSlots30d;
      default: return timeSlots24h;
    }
  };
  
  const timeSlots = getTimeSlots();
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Economics": return "from-[#10B981] to-[#047857]";
      case "Business": return "from-[#2563EB] to-[#1D4ED8]";
      case "Technology": return "from-[#8B5CF6] to-[#7C3AED]";
      case "Environment": return "from-[#0EA5E9] to-[#0284C7]";
      case "World": return "from-[#F59E0B] to-[#D97706]";
      case "Lifestyle": return "from-[#EC4899] to-[#DB2777]";
      default: return "from-[#64748B] to-[#475569]";
    }
  };
  
  const getSentimentColor = (sentiment: string) => {
    switch(sentiment) {
      case "positive": return "text-[#10B981]";
      case "negative": return "text-[#EF4444]";
      case "neutral": return "text-[#64748B]";
      default: return "text-[#64748B]";
    }
  };
  
  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case "rising": return <TrendingUp className="h-4 w-4 text-[#10B981]" />;
      case "falling": return <TrendingUp className="h-4 w-4 text-[#EF4444] rotate-180" />;
      case "stable": return <div className="h-1 w-4 bg-[#64748B] rounded"></div>;
      default: return <div className="h-1 w-4 bg-[#64748B] rounded"></div>;
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Time Crystal Timeline</h2>
          <p className="text-[#E2E8F0]">Visualize how news evolves across different timeframes</p>
        </div>
        
        <div className="flex gap-2 mt-4 md:mt-0">
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTimeframe === "24h" 
                ? "bg-[#2563EB] text-white" 
                : "bg-[#0F172A] text-[#E2E8F0] hover:bg-[#2563EB]/20"
            }`}
            onClick={() => setSelectedTimeframe("24h")}
          >
            24 Hours
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTimeframe === "7d" 
                ? "bg-[#2563EB] text-white" 
                : "bg-[#0F172A] text-[#E2E8F0] hover:bg-[#2563EB]/20"
            }`}
            onClick={() => setSelectedTimeframe("7d")}
          >
            7 Days
          </button>
          <button 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTimeframe === "30d" 
                ? "bg-[#2563EB] text-white" 
                : "bg-[#0F172A] text-[#E2E8F0] hover:bg-[#2563EB]/20"
            }`}
            onClick={() => setSelectedTimeframe("30d")}
          >
            30 Days
          </button>
        </div>
      </div>
      
      <div className="relative">
        {/* Timeline axis */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#64748B]/30 rounded-full"></div>
        
        {/* Time slots */}
        <div className="space-y-12 pl-16">
          {timeSlots.map((slot, index) => (
            <motion.div
              key={slot.id}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Time marker */}
              <div className="absolute -left-16 top-6 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-[#0F172A]"></div>
              
              {/* Content card */}
              <div className="bg-[#0A0A0F]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#64748B]/30 hover:border-[#2563EB]/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#2563EB] font-mono text-sm">{slot.time}</span>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(slot.category)}`}>
                        {slot.category}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{slot.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#E2E8F0]">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>Importance: {(slot.importance * 100).toFixed(0)}%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className={getSentimentColor(slot.sentiment)}>
                          {slot.sentiment.charAt(0).toUpperCase() + slot.sentiment.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0F172A] border border-[#64748B]/30">
                    {getTrendIcon(slot.trend)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-12 pt-6 border-t border-[#64748B]/30">
        <h3 className="text-lg font-bold text-white mb-4">Legend</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            <span className="text-[#E2E8F0]">Positive Sentiment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
            <span className="text-[#E2E8F0]">Negative Sentiment</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#64748B]"></div>
            <span className="text-[#E2E8F0]">Neutral Sentiment</span>
          </div>
        </div>
      </div>
    </div>
  );
}