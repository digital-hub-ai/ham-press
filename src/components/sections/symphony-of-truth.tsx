"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Music, Headphones, Volume2 } from "lucide-react";

interface NewsStory {
  id: number;
  title: string;
  category: "politics" | "technology" | "sports" | "culture" | "business" | "science";
  sentiment: "positive" | "negative" | "neutral";
  urgency: number; // 1-10
  melody: string; // Musical representation
  rhythm: number; // BPM
  instrument: string;
  visualPattern: string;
}

export function SymphonyOfTruth() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStory, setCurrentStory] = useState<NewsStory | null>(null);
  const [volume, setVolume] = useState(80);
  const [activeStories, setActiveStories] = useState<NewsStory[]>([]);
  
  // Mock news stories with musical properties
  const newsStories: NewsStory[] = [
    {
      id: 1,
      title: "World's Largest Ham Festival Sets New Record",
      category: "culture",
      sentiment: "positive",
      urgency: 7,
      melody: "C-E-G-A-F",
      rhythm: 120,
      instrument: "Strings",
      visualPattern: "spiral"
    },
    {
      id: 2,
      title: "Scientists Develop Revolutionary Ham Preservation",
      category: "science",
      sentiment: "positive",
      urgency: 8,
      melody: "D-F-A-C-E",
      rhythm: 140,
      instrument: "Synth",
      visualPattern: "waves"
    },
    {
      id: 3,
      title: "Ham Prices Reach All-Time High",
      category: "business",
      sentiment: "negative",
      urgency: 9,
      melody: "E-G-B-D-F",
      rhythm: 160,
      instrument: "Percussion",
      visualPattern: "zigzag"
    },
    {
      id: 4,
      title: "Sustainable Pork Farming Initiative Launched",
      category: "science",
      sentiment: "positive",
      urgency: 6,
      melody: "F-A-C-E-G",
      rhythm: 100,
      instrument: "Woodwinds",
      visualPattern: "circles"
    },
    {
      id: 5,
      title: "Study Reveals Health Benefits of Ham",
      category: "science",
      sentiment: "positive",
      urgency: 5,
      melody: "G-B-D-F-A",
      rhythm: 90,
      instrument: "Brass",
      visualPattern: "flower"
    }
  ];
  
  // Pre-generated positions for visual elements to avoid hydration mismatches
  const visualPositions = [
    { left: 15, top: 25 },
    { left: 35, top: 75 },
    { left: 65, top: 45 },
    { left: 85, top: 15 },
    { left: 25, top: 65 },
    { left: 75, top: 85 },
    { left: 45, top: 35 },
    { left: 95, top: 55 },
    { left: 10, top: 90 },
    { left: 55, top: 10 },
    { left: 80, top: 70 },
    { left: 30, top: 40 },
    { left: 70, top: 20 },
    { left: 20, top: 80 },
    { left: 90, top: 30 },
    { left: 40, top: 95 },
    { left: 60, top: 60 },
    { left: 5, top: 50 },
    { left: 95, top: 5 },
    { left: 50, top: 85 }
  ];
  
  // Initialize with all stories
  useEffect(() => {
    setActiveStories(newsStories);
  }, []);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "politics": return "from-[#F59E0B] to-[#D97706]";
      case "technology": return "from-[#2563EB] to-[#1D4ED8]";
      case "sports": return "from-[#EF4444] to-[#DC2626]";
      case "culture": return "from-[#EC4899] to-[#DB2777]";
      case "business": return "from-[#10B981] to-[#047857]";
      case "science": return "from-[#8B5CF6] to-[#7C3AED]";
      default: return "from-[#64748B] to-[#475569]";
    }
  };
  
  const getCategoryInstrument = (category: string) => {
    switch(category) {
      case "politics": return "Orchestral Strings";
      case "technology": return "Synthesizers";
      case "sports": return "Percussion";
      case "culture": return "World Instruments";
      case "business": return "Piano";
      case "science": return "Electronic";
      default: return "Classical Orchestra";
    }
  };
  
  const playStory = (story: NewsStory) => {
    setCurrentStory(story);
    setIsPlaying(true);
  };
  
  const stopPlayback = () => {
    setIsPlaying(false);
    setCurrentStory(null);
  };
  
  return (
    <div className="bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Symphony of Truth</h2>
          <p className="text-[#E2E8F0]">Audio-visual news experience where every story creates unique music</p>
        </div>
        
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2 bg-[#0F172A] px-4 py-2 rounded-full">
            <Headphones className="h-5 w-5 text-[#2563EB]" />
            <span className="text-[#E2E8F0]">Immersive Mode</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Volume2 className="h-5 w-5 text-[#E2E8F0]" />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-24 accent-[#2563EB]"
            />
            <span className="text-[#E2E8F0] text-sm w-10">{volume}%</span>
          </div>
        </div>
      </div>
      
      {/* Visualizer */}
      <div className="relative h-64 rounded-2xl bg-[#0F172A] border border-[#64748B]/30 mb-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {visualPositions.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#2563EB]/30"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + (i % 4),
                repeat: Infinity,
                delay: i % 3,
              }}
            />
          ))}
        </div>
        
        {/* Sound waves */}
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence>
            {isPlaying && currentStory && (
              <motion.div
                className="flex items-end gap-1 h-32"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-4 bg-gradient-to-t from-[#2563EB] to-[#8B5CF6] rounded-t"
                    style={{
                      height: `${30 + (i * 3) % 70}%`,
                    }}
                    animate={{
                      height: [
                        `${30 + (i * 3) % 70}%`,
                        `${40 + (i * 5) % 60}%`,
                        `${30 + (i * 3) % 70}%`
                      ]
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Center display */}
        <div className="absolute inset-0 flex items-center justify-center">
          {!isPlaying ? (
            <div className="text-center">
              <Music className="h-16 w-16 text-[#64748B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Symphony Awaiting</h3>
              <p className="text-[#E2E8F0]">Select a story to begin the musical journey</p>
            </div>
          ) : (
            currentStory && (
              <motion.div
                className="text-center bg-[#0F172A]/80 backdrop-blur-lg rounded-2xl p-6 border border-[#2563EB]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{currentStory.title}</h3>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="bg-[#2563EB]/20 px-3 py-1 rounded-full text-[#2563EB]">
                    {currentStory.instrument}
                  </div>
                  <div className="bg-[#8B5CF6]/20 px-3 py-1 rounded-full text-[#8B5CF6]">
                    {currentStory.rhythm} BPM
                  </div>
                </div>
                <div className="text-[#E2E8F0]">Melody: {currentStory.melody}</div>
              </motion.div>
            )
          )}
        </div>
      </div>
      
      {/* Story Playlist */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeStories.map((story) => (
          <motion.div
            key={story.id}
            className={`rounded-2xl p-6 border transition-all cursor-pointer ${
              currentStory?.id === story.id
                ? "border-[#2563EB] bg-[#0F172A]/50"
                : "border-[#64748B]/30 bg-[#0F172A]/30 hover:border-[#2563EB]/50"
            }`}
            whileHover={{ y: -5 }}
            onClick={() => playStory(story)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(story.category)}`}>
                {story.category.charAt(0).toUpperCase() + story.category.slice(1)}
              </div>
              <div className="flex items-center gap-1 text-[#E2E8F0]">
                <span className="text-xs">{story.urgency}/10</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{story.title}</h3>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-[#E2E8F0]">
                {getCategoryInstrument(story.category)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#E2E8F0]">{story.rhythm} BPM</span>
                {currentStory?.id === story.id && isPlaying ? (
                  <Pause 
                    className="h-5 w-5 text-[#2563EB]" 
                    onClick={(e) => {
                      e.stopPropagation();
                      stopPlayback();
                    }}
                  />
                ) : (
                  <Play 
                    className="h-5 w-5 text-[#E2E8F0] hover:text-[#2563EB]" 
                    onClick={(e) => {
                      e.stopPropagation();
                      playStory(story);
                    }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Player Controls */}
      <div className="mt-8 pt-6 border-t border-[#64748B]/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className={`p-3 rounded-full ${
                isPlaying 
                  ? "bg-[#EF4444] hover:bg-[#EF4444]/90" 
                  : "bg-[#2563EB] hover:bg-[#2563EB]/90"
              } text-white transition-colors`}
              onClick={isPlaying ? stopPlayback : () => currentStory && playStory(currentStory)}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            
            <div>
              <h4 className="text-white font-medium">
                {currentStory ? currentStory.title : "No story selected"}
              </h4>
              <p className="text-[#E2E8F0] text-sm">
                {currentStory ? `${currentStory.instrument} • ${currentStory.rhythm} BPM` : "Select a story to play"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[#E2E8F0] text-sm">Harmony Mode</span>
            <div className="relative inline-block w-12 h-6 rounded-full bg-[#64748B]/30">
              <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}