"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Music, Palette, BookOpen, ChefHat, Building, FlaskConical, Waves } from "lucide-react";

interface AlchemyTransformation {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export function NewsAlchemy() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [transformation, setTransformation] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  
  // Mock news stories
  const newsStories = [
    {
      id: "1",
      title: "World's Largest Ham Festival Sets New Record",
      category: "Events",
      excerpt: "The annual ham festival in Denmark attracted over 50,000 visitors this year, marking a 15% increase from last year."
    },
    {
      id: "2",
      title: "Scientists Develop Revolutionary Ham Preservation Technique",
      category: "Science",
      excerpt: "Researchers at the Institute of Food Science have created a new method that extends ham shelf life by 50%."
    },
    {
      id: "3",
      title: "Ham Prices Reach All-Time High Due to Supply Chain Issues",
      category: "Economics",
      excerpt: "Global pork shortages have led to a significant increase in ham prices worldwide, affecting holiday markets."
    }
  ];
  
  // Alchemy transformations
  const transformations: AlchemyTransformation[] = [
    {
      id: "poem",
      name: "Poem",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Transform into a poetic masterpiece",
      color: "from-[#EC4899] to-[#DB2777]"
    },
    {
      id: "music",
      name: "Music",
      icon: <Music className="h-6 w-6" />,
      description: "Create a musical composition",
      color: "from-[#2563EB] to-[#1D4ED8]"
    },
    {
      id: "art",
      name: "Abstract Art",
      icon: <Palette className="h-6 w-6" />,
      description: "Generate visual artwork",
      color: "from-[#F59E0B] to-[#D97706]"
    },
    {
      id: "recipe",
      name: "Recipe",
      icon: <ChefHat className="h-6 w-6" />,
      description: "Craft a culinary creation",
      color: "from-[#10B981] to-[#047857]"
    },
    {
      id: "architecture",
      name: "Architecture",
      icon: <Building className="h-6 w-6" />,
      description: "Design a building concept",
      color: "from-[#64748B] to-[#475569]"
    },
    {
      id: "formula",
      name: "Formula",
      icon: <FlaskConical className="h-6 w-6" />,
      description: "Express as mathematical equation",
      color: "from-[#8B5CF6] to-[#7C3AED]"
    }
  ];
  
  const performAlchemy = (transformationId: string) => {
    if (!selectedStory) return;
    
    setTransformation(transformationId);
    
    // Simulate transformation process
    setTimeout(() => {
      const story = newsStories.find(s => s.id === selectedStory);
      if (!story) return;
      
      // Mock results based on transformation type
      switch (transformationId) {
        case "poem":
          setResult({
            type: "poem",
            title: '"' + story.title + '" - A Poetic Interpretation',
            content: "In halls where hams hang high and proud,\nA festival of taste profound,\nFifty thousand gather 'round,\nAs Danish traditions ring out loud.\n\nThe smoke ascends like morning mist,\nThe joy in every face we've kissed,\nTradition and innovation kissed,\nIn this celebration, none resist."
          });
          break;
          
        case "music":
          setResult({
            type: "music",
            title: '"' + story.title + '" - Musical Score',
            content: "Tempo: Allegro (120 BPM)\nKey: D Major\nTime Signature: 4/4\n\nMelody: D - F# - A - D - C# - B - A - G\nChords: Dmaj - Bmin - Gmaj - A7\n\nRhythmic Pattern:\nBeat 1-2: D note held\nBeat 3: Arpeggiated F#-A-D\nBeat 4: C#-B resolution\n\nMood: Festive and celebratory"
          });
          break;
          
        case "art":
          setResult({
            type: "art",
            title: '"' + story.title + '" - Abstract Representation',
            content: "Visual Concept:\n- Dominant color: Golden yellow (#F59E0B) representing the ham\n- Circular forms symbolizing unity and gathering\n- Vertical lines suggesting hanging hams\n- Warm gradients evoking festive atmosphere\n- Textured brush strokes for artisanal feel"
          });
          break;
          
        case "recipe":
          setResult({
            type: "recipe",
            title: '"Celebration Ham Glaze" - Inspired by ' + story.title,
            content: "Ingredients:\n- 1 cup brown sugar\n- 1/4 cup Dijon mustard\n- 2 tbsp apple cider vinegar\n- 1 tsp smoked paprika\n- 1/2 tsp ground cloves\n\nInstructions:\n1. Whisk all ingredients in a bowl\n2. Brush generously over ham in last 30 minutes of baking\n3. Broil for 5 minutes for caramelized finish\n4. Serve with festival memories!\n\nPairing: Danish aquavit or mulled wine"
          });
          break;
          
        default:
          const transformationName = transformations.find(t => t.id === transformationId)?.name || 'Unknown';
          setResult({
            type: "generic",
            title: '"' + story.title + '" - ' + transformationName + ' Transformation',
            content: "This story has been transformed into a " + transformationName + " through the mystical powers of News Alchemy.\n\nThe essence of \"" + story.title + "\" has been captured and reimagined in this new form, revealing hidden patterns and meanings that transcend traditional news formats."
          });
      }
    }, 1500);
  };
  
  return (
    <div className="bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E] rounded-3xl p-8 border border-[#64748B]/30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F59E0B] via-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent mb-4">
          News Alchemy
        </h2>
        <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
          Transform news stories into other forms of understanding through the ancient art of information transmutation
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story Selection */}
        <div className="bg-[#0F172A]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#64748B]/30">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#F59E0B]" />
            Select a Story
          </h3>
          
          <div className="space-y-4">
            {newsStories.map((story) => (
              <div
                key={story.id}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedStory === story.id
                    ? "border-[#2563EB] bg-[#2563EB]/10"
                    : "border-[#64748B]/30 hover:border-[#2563EB]/50 hover:bg-[#0F172A]/30"
                }`}
                onClick={() => setSelectedStory(story.id)}
              >
                <h4 className="font-bold text-white mb-2">{story.title}</h4>
                <p className="text-[#E2E8F0] text-sm line-clamp-2">{story.excerpt}</p>
                <div className="mt-3">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#64748B]/20 text-[#E2E8F0]">
                    {story.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Alchemy Circle */}
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#64748B]/30 animate-spin-slow"></div>
            
            {/* Inner ring */}
            <div className="absolute inset-4 rounded-full border border-[#2563EB]/30"></div>
            
            {/* Center circle */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 flex items-center justify-center">
              <Sparkles className="h-12 w-12 text-[#F59E0B]" />
            </div>
            
            {/* Transformation buttons - Pre-calculated positions to avoid hydration issues */}
            {[
              { id: 'poem', icon: <BookOpen className="h-6 w-6" />, left: 'calc(50% + 50px - 32px)', top: 'calc(50% - 86px - 32px)' },
              { id: 'music', icon: <Music className="h-6 w-6" />, left: 'calc(50% + 86px - 32px)', top: 'calc(50% - 50px - 32px)' },
              { id: 'art', icon: <Palette className="h-6 w-6" />, left: 'calc(50% + 100px - 32px)', top: 'calc(50% + 0px - 32px)' },
              { id: 'recipe', icon: <ChefHat className="h-6 w-6" />, left: 'calc(50% + 86px - 32px)', top: 'calc(50% + 50px - 32px)' },
              { id: 'architecture', icon: <Building className="h-6 w-6" />, left: 'calc(50% + 50px - 32px)', top: 'calc(50% + 86px - 32px)' },
              { id: 'formula', icon: <FlaskConical className="h-6 w-6" />, left: 'calc(50% + 0px - 32px)', top: 'calc(50% + 100px - 32px)' }
            ].map((transform, index) => (
              <motion.button
                key={transform.id}
                className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  transformation === transform.id
                    ? "bg-gradient-to-br from-[#2563EB] to-[#8B5CF6] text-white"
                    : "bg-[#0F172A] border border-[#64748B]/30 text-[#E2E8F0]"
                }`}
                style={{
                  left: transform.left,
                  top: transform.top,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectedStory && performAlchemy(transform.id)}
                disabled={!selectedStory}
              >
                {transform.icon}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Results Panel */}
        <div className="bg-[#0F172A]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#64748B]/30">
          <h3 className="text-2xl font-bold text-white mb-6">Transformation Result</h3>
          
          {result ? (
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">{result.title}</h4>
              <div className="bg-[#0F172A]/30 rounded-xl p-4 border border-[#64748B]/30 h-[calc(100%-4rem)]">
                <pre className="text-[#E2E8F0] whitespace-pre-wrap font-sans">
                  {result.content}
                </pre>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <Waves className="h-16 w-16 text-[#64748B] mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Alchemy Awaits</h4>
              <p className="text-[#E2E8F0]">
                Select a story and choose a transformation to witness the magic of News Alchemy
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Transformation Guide */}
      <div className="mt-12 pt-8 border-t border-[#64748B]/30">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">Alchemy Transformations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {transformations.map((transform) => (
            <div 
              key={transform.id}
              className="bg-[#0F172A]/30 rounded-xl p-4 border border-[#64748B]/30 text-center hover:border-[#2563EB]/50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${transform.color} flex items-center justify-center mx-auto mb-3`}>
                {transform.icon}
              </div>
              <h4 className="font-bold text-white mb-1">{transform.name}</h4>
              <p className="text-xs text-[#E2E8F0]">{transform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}