"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, Zap, Droplets, Wind, Thermometer } from "lucide-react";

interface RegionSentiment {
  id: string;
  name: string;
  sentiment: "positive" | "negative" | "neutral" | "mixed";
  intensity: number;
  trending: "rising" | "falling" | "stable";
  topStories: string[];
}

export function SentimentWeatherMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // Mock sentiment data for different regions
  const regionSentiments: RegionSentiment[] = [
    {
      id: "north-america",
      name: "North America",
      sentiment: "positive",
      intensity: 0.8,
      trending: "rising",
      topStories: [
        "Ham Festival Success",
        "Market Growth",
        "Innovation Awards"
      ]
    },
    {
      id: "europe",
      name: "Europe",
      sentiment: "mixed",
      intensity: 0.6,
      trending: "stable",
      topStories: [
        "Sustainability Initiatives",
        "Price Fluctuations",
        "Trade Agreements"
      ]
    },
    {
      id: "asia",
      name: "Asia",
      sentiment: "positive",
      intensity: 0.9,
      trending: "rising",
      topStories: [
        "Export Growth",
        "Tech Integration",
        "Cultural Celebrations"
      ]
    },
    {
      id: "south-america",
      name: "South America",
      sentiment: "neutral",
      intensity: 0.5,
      trending: "stable",
      topStories: [
        "Traditional Methods",
        "Local Markets",
        "Seasonal Variations"
      ]
    },
    {
      id: "africa",
      name: "Africa",
      sentiment: "positive",
      intensity: 0.7,
      trending: "rising",
      topStories: [
        "Agricultural Innovation",
        "Community Programs",
        "Export Opportunities"
      ]
    },
    {
      id: "oceania",
      name: "Oceania",
      sentiment: "mixed",
      intensity: 0.6,
      trending: "falling",
      topStories: [
        "Environmental Focus",
        "Regulation Changes",
        "Market Adaptation"
      ]
    }
  ];
  
  const getSentimentIcon = (sentiment: string) => {
    switch(sentiment) {
      case "positive": return <Sun className="h-6 w-6 text-[#10B981]" />;
      case "negative": return <Cloud className="h-6 w-6 text-[#64748B]" />;
      case "neutral": return <Thermometer className="h-6 w-6 text-[#F59E0B]" />;
      case "mixed": return <Zap className="h-6 w-6 text-[#8B5CF6]" />;
      default: return <Sun className="h-6 w-6 text-[#10B981]" />;
    }
  };
  
  const getSentimentColor = (sentiment: string) => {
    switch(sentiment) {
      case "positive": return "from-[#10B981] to-[#047857]";
      case "negative": return "from-[#64748B] to-[#334155]";
      case "neutral": return "from-[#F59E0B] to-[#D97706]";
      case "mixed": return "from-[#8B5CF6] to-[#6D28D9]";
      default: return "from-[#10B981] to-[#047857]";
    }
  };
  
  const getTrendingIcon = (trending: string) => {
    switch(trending) {
      case "rising": return <Wind className="h-4 w-4 text-[#10B981]" />;
      case "falling": return <Wind className="h-4 w-4 text-[#EF4444] rotate-180" />;
      case "stable": return <Droplets className="h-4 w-4 text-[#64748B]" />;
      default: return <Droplets className="h-4 w-4 text-[#64748B]" />;
    }
  };
  
  const selectedRegionData = selectedRegion 
    ? regionSentiments.find(r => r.id === selectedRegion)
    : null;

  return (
    <div className="bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Sentiment Weather Map</h2>
          <p className="text-[#E2E8F0]">Global emotional climate of ham news visualized in real-time</p>
        </div>
        
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-[#10B981]" />
            <span className="text-[#E2E8F0] text-sm">Positive</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-[#64748B]" />
            <span className="text-[#E2E8F0] text-sm">Negative</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[#8B5CF6]" />
            <span className="text-[#E2E8F0] text-sm">Mixed</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* World Map Visualization */}
        <div className="lg:col-span-2">
          <div className="relative bg-[#0F172A] rounded-2xl p-6 border border-[#64748B]/30 h-full">
            {/* Simplified World Map */}
            <div className="relative w-full h-96 rounded-xl overflow-hidden">
              {/* Ocean Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/20 to-[#0284C7]/40 rounded-xl"></div>
              
              {/* Continents */}
              <div className="absolute inset-0">
                {/* North America */}
                <motion.div 
                  className={`absolute top-1/4 left-1/5 w-32 h-24 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[0].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("north-america")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[0].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[0].name}</span>
                  </div>
                </motion.div>
                
                {/* Europe */}
                <motion.div 
                  className={`absolute top-1/3 left-1/2 w-24 h-20 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[1].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("europe")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[1].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[1].name}</span>
                  </div>
                </motion.div>
                
                {/* Asia */}
                <motion.div 
                  className={`absolute top-1/4 right-1/4 w-28 h-24 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[2].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("asia")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[2].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[2].name}</span>
                  </div>
                </motion.div>
                
                {/* South America */}
                <motion.div 
                  className={`absolute bottom-1/4 left-1/4 w-20 h-28 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[3].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("south-america")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[3].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[3].name}</span>
                  </div>
                </motion.div>
                
                {/* Africa */}
                <motion.div 
                  className={`absolute top-1/2 left-1/3 w-24 h-32 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[4].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("africa")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[4].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[4].name}</span>
                  </div>
                </motion.div>
                
                {/* Oceania */}
                <motion.div 
                  className={`absolute bottom-1/3 right-1/5 w-20 h-16 rounded-lg bg-gradient-to-br ${getSentimentColor(regionSentiments[5].sentiment)} cursor-pointer border-2 border-white/30`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedRegion("oceania")}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    {getSentimentIcon(regionSentiments[5].sentiment)}
                    <span className="text-white text-xs mt-1 font-medium">{regionSentiments[5].name}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-[#2563EB]/20 blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-[#8B5CF6]/20 blur-xl"></div>
            </div>
          </div>
        </div>
        
        {/* Region Details Panel */}
        <div className="bg-[#0F172A]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#64748B]/30">
          {selectedRegionData ? (
            <motion.div
              key={selectedRegionData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedRegionData.name}</h3>
                <div className="flex items-center gap-2">
                  {getSentimentIcon(selectedRegionData.sentiment)}
                  {getTrendingIcon(selectedRegionData.trending)}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#E2E8F0]">Sentiment Intensity</span>
                  <span className="text-white font-medium">{(selectedRegionData.intensity * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full h-3 bg-[#64748B]/30 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${getSentimentColor(selectedRegionData.sentiment)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedRegionData.intensity * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Top Stories</h4>
                <ul className="space-y-2">
                  {selectedRegionData.topStories.map((story, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getSentimentColor(selectedRegionData.sentiment)}`}></div>
                      <span className="text-[#E2E8F0]">{story}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-[#64748B]/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E2E8F0]">Trending</span>
                  <div className="flex items-center gap-1">
                    {getTrendingIcon(selectedRegionData.trending)}
                    <span className="text-white capitalize">{selectedRegionData.trending}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Zap className="h-12 w-12 text-[#8B5CF6] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Select a Region</h3>
              <p className="text-[#E2E8F0]">Click on any continent to view detailed sentiment analysis</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Global Sentiment Summary */}
      <div className="mt-8 pt-6 border-t border-[#64748B]/30">
        <h3 className="text-lg font-bold text-white mb-4">Global Sentiment Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#10B981]/10 rounded-xl p-4 border border-[#10B981]/30">
            <div className="text-2xl font-bold text-[#10B981] mb-1">
              {(regionSentiments.filter(r => r.sentiment === "positive").length / regionSentiments.length * 100).toFixed(0)}%
            </div>
            <div className="text-[#E2E8F0] text-sm">Positive</div>
          </div>
          <div className="bg-[#8B5CF6]/10 rounded-xl p-4 border border-[#8B5CF6]/30">
            <div className="text-2xl font-bold text-[#8B5CF6] mb-1">
              {(regionSentiments.filter(r => r.sentiment === "mixed").length / regionSentiments.length * 100).toFixed(0)}%
            </div>
            <div className="text-[#E2E8F0] text-sm">Mixed</div>
          </div>
          <div className="bg-[#64748B]/10 rounded-xl p-4 border border-[#64748B]/30">
            <div className="text-2xl font-bold text-[#64748B] mb-1">
              {(regionSentiments.filter(r => r.sentiment === "negative").length / regionSentiments.length * 100).toFixed(0)}%
            </div>
            <div className="text-[#E2E8F0] text-sm">Negative</div>
          </div>
          <div className="bg-[#F59E0B]/10 rounded-xl p-4 border border-[#F59E0B]/30">
            <div className="text-2xl font-bold text-[#F59E0B] mb-1">
              {(regionSentiments.filter(r => r.sentiment === "neutral").length / regionSentiments.length * 100).toFixed(0)}%
            </div>
            <div className="text-[#E2E8F0] text-sm">Neutral</div>
          </div>
        </div>
      </div>
    </div>
  );
}