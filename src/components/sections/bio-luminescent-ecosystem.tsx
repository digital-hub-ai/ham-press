"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface NewsParticle {
  id: number;
  title: string;
  category: string;
  sentiment: "positive" | "negative" | "neutral";
  importance: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  pulse: boolean;
  connectedTo: number[];
}

export function BioLuminescentEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [hoveredParticle, setHoveredParticle] = useState<NewsParticle | null>(null);
  const [particles, setParticles] = useState<NewsParticle[]>([]);
  
  // Initialize particles
  useEffect(() => {
    const initialParticles: NewsParticle[] = [
      {
        id: 1,
        title: "World's Largest Ham Festival Sets New Record",
        category: "Events",
        sentiment: "positive",
        importance: 0.9,
        x: 0.3,
        y: 0.4,
        z: 0.5,
        vx: 0.001,
        vy: 0.0005,
        vz: 0.0002,
        size: 25,
        pulse: true,
        connectedTo: [2, 3]
      },
      {
        id: 2,
        title: "Scientists Develop Revolutionary Ham Preservation",
        category: "Science",
        sentiment: "positive",
        importance: 0.8,
        x: 0.7,
        y: 0.3,
        z: 0.4,
        vx: -0.0008,
        vy: 0.0012,
        vz: 0.0003,
        size: 22,
        pulse: false,
        connectedTo: [1, 4]
      },
      {
        id: 3,
        title: "Ham Prices Reach All-Time High",
        category: "Economics",
        importance: 0.85,
        sentiment: "negative",
        x: 0.5,
        y: 0.7,
        z: 0.3,
        vx: 0.0015,
        vy: -0.0007,
        vz: 0.0001,
        size: 24,
        pulse: false,
        connectedTo: [1, 4, 5]
      },
      {
        id: 4,
        title: "Sustainable Pork Farming Initiative Launched",
        category: "Environment",
        sentiment: "positive",
        importance: 0.7,
        x: 0.8,
        y: 0.6,
        z: 0.6,
        vx: -0.001,
        vy: -0.0009,
        vz: -0.0002,
        size: 20,
        pulse: false,
        connectedTo: [2, 3]
      },
      {
        id: 5,
        title: "Study Reveals Health Benefits of Ham",
        category: "Health",
        sentiment: "positive",
        importance: 0.6,
        x: 0.2,
        y: 0.8,
        z: 0.7,
        vx: 0.0012,
        vy: -0.0011,
        vz: 0.0004,
        size: 18,
        pulse: false,
        connectedTo: [3]
      }
    ];
    
    setParticles(initialParticles);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setParticles(prev => {
        return prev.map(p => {
          // Update position
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newZ = p.z + p.vz;
          
          // Boundary checks with bounce
          if (newX <= 0 || newX >= 1) {
            p.vx *= -1;
            newX = Math.max(0, Math.min(1, newX));
          }
          
          if (newY <= 0 || newY >= 1) {
            p.vy *= -1;
            newY = Math.max(0, Math.min(1, newY));
          }
          
          if (newZ <= 0 || newZ >= 1) {
            p.vz *= -1;
            newZ = Math.max(0, Math.min(1, newZ));
          }
          
          // Pulse important particles deterministically to avoid hydration issues
          const shouldPulse = p.importance > 0.7 && Date.now() % 1000 > 950;
          
          return {
            ...p,
            x: newX,
            y: newY,
            z: newZ,
            pulse: shouldPulse
          };
        });
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const render = () => {
      if (!ctx) return;
      
      // Clear with dark space background
      ctx.fillStyle = "#0A0A0F";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars in background
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      for (let i = 0; i < 100; i++) {
        const x = (i * 37) % canvas.width;
        const y = (i * 73) % canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Draw connections between particles
      particles.forEach(particle => {
        particle.connectedTo.forEach(targetId => {
          const target = particles.find(p => p.id === targetId);
          if (target) {
            const p1x = particle.x * canvas.width;
            const p1y = particle.y * canvas.height;
            const p2x = target.x * canvas.width;
            const p2y = target.y * canvas.height;
            
            // Create gradient connection
            const gradient = ctx.createLinearGradient(p1x, p1y, p2x, p2y);
            
            // Get particle colors
            const getColor = (category: string) => {
              switch(category) {
                case "Events": return "#F59E0B";
                case "Science": return "#2563EB";
                case "Economics": return "#10B981";
                case "Environment": return "#0EA5E9";
                case "Health": return "#EC4899";
                default: return "#8B5CF6";
              }
            };
            
            gradient.addColorStop(0, getColor(particle.category) + "80");
            gradient.addColorStop(1, getColor(target.category) + "80");
            
            ctx.beginPath();
            ctx.moveTo(p1x, p1y);
            ctx.lineTo(p2x, p2y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });
      
      // Draw particles
      particles.forEach(particle => {
        const x = particle.x * canvas.width;
        const y = particle.y * canvas.height;
        const z = particle.z; // Depth factor
        
        // Particle glow
        const gradient = ctx.createRadialGradient(
          x, y, 0,
          x, y, particle.size * 2
        );
        
        // Get particle color based on category and sentiment
        const getColor = (category: string, sentiment: string) => {
          const baseColor = {
            "Events": "#F59E0B",
            "Science": "#2563EB",
            "Economics": "#10B981",
            "Environment": "#0EA5E9",
            "Health": "#EC4899"
          }[category] || "#8B5CF6";
          
          // Adjust for sentiment
          if (sentiment === "negative") {
            return baseColor + "AA";
          } else if (sentiment === "positive") {
            return baseColor;
          } else {
            return baseColor + "CC";
          }
        };
        
        gradient.addColorStop(0, getColor(particle.category, particle.sentiment));
        gradient.addColorStop(1, getColor(particle.category, particle.sentiment));
        
        ctx.beginPath();
        ctx.arc(x, y, particle.size * z, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Pulsing effect for important particles
        if (particle.pulse) {
          ctx.beginPath();
          ctx.arc(x, y, particle.size * z * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = getColor(particle.category, particle.sentiment);
          ctx.fill();
        }
        
        // Particle core
        ctx.beginPath();
        ctx.arc(x, y, particle.size * 0.4 * z, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particles]);
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Events": return "from-[#F59E0B] to-[#D97706]";
      case "Science": return "from-[#2563EB] to-[#1D4ED8]";
      case "Economics": return "from-[#10B981] to-[#047857]";
      case "Environment": return "from-[#0EA5E9] to-[#0284C7]";
      case "Health": return "from-[#EC4899] to-[#DB2777]";
      default: return "from-[#8B5CF6] to-[#7C3AED]";
    }
  };
  
  return (
    <div className="relative w-full h-screen bg-[#0A0A0F] rounded-3xl overflow-hidden border border-[#64748B]/30">
      {/* 3D Canvas Visualization */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Overlay UI */}
      <div className="absolute inset-0 flex flex-col">
        {/* Top Controls */}
        <div className="flex justify-between items-center p-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
              Bio-Luminescent News Ecosystem
            </h2>
            <p className="text-[#E2E8F0]">A living visualization of global ham news consciousness</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              className="p-3 rounded-full bg-[#0F172A]/80 backdrop-blur-lg border border-[#64748B]/30 hover:bg-[#2563EB]/20 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white" />}
            </button>
            
            <button 
              className="p-3 rounded-full bg-[#0F172A]/80 backdrop-blur-lg border border-[#64748B]/30 hover:bg-[#EC4899]/20 transition-colors"
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX className="h-6 w-6 text-white" /> : <Volume2 className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
        
        {/* Center Personal Black Hole */}
        <div className="flex-grow flex items-center justify-center">
          <motion.div 
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#000000] to-[#2563EB] shadow-[0_0_60px_rgba(37,99,235,0.5)]"
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 60px rgba(37,99,235,0.5)",
                "0 0 80px rgba(37,99,235,0.7)",
                "0 0 60px rgba(37,99,235,0.5)"
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="absolute inset-4 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-xs font-bold text-center">YOUR<br/>BLACK<br/>HOLE</span>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Info Panel */}
        <div className="p-6">
          <div className="bg-[#0F172A]/80 backdrop-blur-lg rounded-2xl p-6 border border-[#64748B]/30">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <div>
                  <div className="text-white font-medium">Politics Galaxy</div>
                  <div className="text-[#E2E8F0] text-sm">Red Nebula</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#2563EB]"></div>
                <div>
                  <div className="text-white font-medium">Tech Constellation</div>
                  <div className="text-[#E2E8F0] text-sm">Blue Circuits</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#EC4899]"></div>
                <div>
                  <div className="text-white font-medium">Culture Aurora</div>
                  <div className="text-[#E2E8F0] text-sm">Multicolored Waves</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                <div>
                  <div className="text-white font-medium">Sports Supernova</div>
                  <div className="text-[#E2E8F0] text-sm">Exploding Energy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Particle Detail Popup */}
      <AnimatePresence>
        {hoveredParticle && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0F172A]/90 backdrop-blur-lg rounded-2xl p-6 border border-[#2563EB] w-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(hoveredParticle.category)} inline-block mb-3`}>
              {hoveredParticle.category}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{hoveredParticle.title}</h3>
            <div className="flex justify-between items-center mt-4">
              <div className="text-[#E2E8F0]">
                Importance: {(hoveredParticle.importance * 100).toFixed(0)}%
              </div>
              <button className="px-4 py-2 bg-[#2563EB] text-white rounded-full text-sm hover:bg-[#2563EB]/90 transition-colors">
                Read Story
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-[#0F172A]/80 backdrop-blur-lg rounded-xl p-4 border border-[#64748B]/30 max-w-md">
        <h4 className="text-white font-bold mb-2">How to Interact</h4>
        <ul className="text-[#E2E8F0] text-sm space-y-1">
          <li>• Move cursor to attract particles</li>
          <li>• Click to read story details</li>
          <li>• Watch connections form between related news</li>
          <li>• Your black hole attracts stories as you read</li>
        </ul>
      </div>
    </div>
  );
}