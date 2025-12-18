"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, Zap, Droplets, Wind, Thermometer, MapPin } from "lucide-react";

interface RegionEmotion {
  id: string;
  name: string;
  emotion: "joy" | "anger" | "fear" | "sadness" | "surprise" | "anticipation";
  intensity: number;
  stories: string[];
  coordinates: { x: number; y: number };
}

export function EmotionalWeatherSystem() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  // Mock emotional data for different regions
  const regionEmotions: RegionEmotion[] = [
    {
      id: "north-america",
      name: "North America",
      emotion: "joy",
      intensity: 0.85,
      stories: [
        "Tech Innovation Summit",
        "Market Growth",
        "Innovation Awards"
      ],
      coordinates: { x: 20, y: 35 }
    },
    {
      id: "europe",
      name: "Europe",
      emotion: "anticipation",
      intensity: 0.75,
      stories: [
        "Sustainability Initiatives",
        "Tech Developments",
        "Policy Changes"
      ],
      coordinates: { x: 50, y: 30 }
    },
    {
      id: "asia",
      name: "Asia",
      emotion: "surprise",
      intensity: 0.9,
      stories: [
        "Export Surge",
        "Tech Breakthrough",
        "Cultural Celebrations"
      ],
      coordinates: { x: 70, y: 40 }
    },
    {
      id: "south-america",
      name: "South America",
      emotion: "sadness",
      intensity: 0.6,
      stories: [
        "Supply Challenges",
        "Price Concerns",
        "Market Fluctuations"
      ],
      coordinates: { x: 30, y: 65 }
    },
    {
      id: "africa",
      name: "Africa",
      emotion: "joy",
      intensity: 0.7,
      stories: [
        "Agricultural Innovation",
        "Community Programs",
        "Export Growth"
      ],
      coordinates: { x: 50, y: 55 }
    },
    {
      id: "oceania",
      name: "Oceania",
      emotion: "fear",
      intensity: 0.65,
      stories: [
        "Environmental Focus",
        "Regulation Changes",
        "Climate Impact"
      ],
      coordinates: { x: 80, y: 70 }
    }
  ];
  
  const getEmotionIcon = (emotion: string) => {
    switch(emotion) {
      case "joy": return <Sun className="h-6 w-6 text-[#F59E0B]" />;
      case "anger": return <Zap className="h-6 w-6 text-[#EF4444]" />;
      case "fear": return <Cloud className="h-6 w-6 text-[#64748B]" />;
      case "sadness": return <Droplets className="h-6 w-6 text-[#3B82F6]" />;
      case "surprise": return <Wind className="h-6 w-6 text-[#10B981]" />;
      case "anticipation": return <Thermometer className="h-6 w-6 text-[#8B5CF6]" />;
      default: return <Sun className="h-6 w-6 text-[#F59E0B]" />;
    }
  };
  
  const getEmotionColor = (emotion: string) => {
    switch(emotion) {
      case "joy": return "from-[#F59E0B] to-[#D97706]";
      case "anger": return "from-[#EF4444] to-[#DC2626]";
      case "fear": return "from-[#64748B] to-[#475569]";
      case "sadness": return "from-[#3B82F6] to-[#2563EB]";
      case "surprise": return "from-[#10B981] to-[#059669]";
      case "anticipation": return "from-[#8B5CF6] to-[#7C3AED]";
      default: return "from-[#F59E0B] to-[#D97706]";
    }
  };
  
  const selectedRegionData = selectedRegion 
    ? regionEmotions.find(r => r.id === selectedRegion)
    : null;

  return (
    <div className="bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Emotional Weather System</h2>
          <p className="text-[#E2E8F0]">Global emotional climate of world news visualized in real-time</p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-[#F59E0B]" />
            <span className="text-[#E2E8F0] text-sm">Joy</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[#EF4444]" />
            <span className="text-[#E2E8F0] text-sm">Anger</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-[#64748B]" />
            <span className="text-[#E2E8F0] text-sm">Fear</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-[#3B82F6]" />
            <span className="text-[#E2E8F0] text-sm">Sadness</span>
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
              
              {/* Weather Patterns */}
              <div className="absolute inset-0">
                {/* Hurricane over Ukraine (Anger) */}
                <motion.div 
                  className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-[#EF4444]/20 blur-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Sunshine over Japan (Joy) */}
                <motion.div 
                  className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-[#F59E0B]/30 blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Fog over Wall Street (Fear) */}
                <motion.div 
                  className="absolute top-1/3 right-1/4 w-40 h-20 rounded-full bg-[#64748B]/30 blur-3xl"
                  animate={{ 
                    x: [0, 5, 0, -5, 0],
                    opacity: [0.3, 0.5, 0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                
                {/* Northern Lights (Surprise/Anticipation) */}
                <motion.div 
                  className="absolute bottom-1/4 left-1/3 w-64 h-8 rounded-full bg-[#8B5CF6]/20 blur-3xl"
                  animate={{ 
                    x: [0, 20, 0, -20, 0],
                    opacity: [0.2, 0.4, 0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>
              </div>
              
              {/* Regions with Emotions */}
              {regionEmotions.map((region) => (
                <motion.div
                  key={region.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`
                  }}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  <div className="flex flex-col items-center">
                    {getEmotionIcon(region.emotion)}
                    <span className="text-white text-xs mt-1 font-medium">{region.name}</span>
                    <div className="mt-1 w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </motion.div>
              ))}
              
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
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#2563EB]" />
                  <h3 className="text-2xl font-bold text-white">{selectedRegionData.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {getEmotionIcon(selectedRegionData.emotion)}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#E2E8F0]">Emotional Intensity</span>
                  <span className="text-white font-medium">{(selectedRegionData.intensity * 100).toFixed(0)}%</span>
                </div>
                <div className="w-full h-3 bg-[#64748B]/30 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${getEmotionColor(selectedRegionData.emotion)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedRegionData.intensity * 100}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Top Stories</h4>
                <ul className="space-y-2">
                  {selectedRegionData.stories.map((story, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getEmotionColor(selectedRegionData.emotion)}`}></div>
                      <span className="text-[#E2E8F0]">{story}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-[#64748B]/30">
                <div className="flex items-center justify-between">
                  <span className="text-[#E2E8F0]">Current Emotion</span>
                  <span className="text-white capitalize font-medium">{selectedRegionData.emotion}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <Thermometer className="h-12 w-12 text-[#8B5CF6] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Select a Region</h3>
              <p className="text-[#E2E8F0]">Click on any region to view detailed emotional analysis</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Global Emotion Summary */}
      <div className="mt-8 pt-6 border-t border-[#64748B]/30">
        <h3 className="text-lg font-bold text-white mb-4">Global Emotion Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regionEmotions.map((region) => (
            <div 
              key={region.id} 
              className={`rounded-xl p-4 border cursor-pointer transition-all ${
                selectedRegion === region.id 
                  ? "border-white bg-white/10" 
                  : "border-[#64748B]/30 hover:border-white/50"
              }`}
              onClick={() => setSelectedRegion(region.id)}
            >
              <div className="flex items-center gap-2 mb-2">
                {getEmotionIcon(region.emotion)}
                <span className="text-white font-medium truncate">{region.name}</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {(region.intensity * 100).toFixed(0)}%
              </div>
              <div className="text-xs text-[#E2E8F0] capitalize">{region.emotion}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}