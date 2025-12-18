"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface NewsNode {
  id: number;
  title: string;
  category: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  importance: number;
}

interface Connection {
  id: string;
  source: number;
  target: number;
  strength: number;
}

export function NeuralNetworkVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NewsNode | null>(null);
  
  // Mock news data for the neural network
  const newsNodes: NewsNode[] = [
    {
      id: 1,
      title: "Global Ham Festival Breaks Records",
      category: "Events",
      x: 0.2,
      y: 0.3,
      vx: 0.001,
      vy: 0.0005,
      radius: 25,
      connections: [2, 3, 4],
      importance: 0.9
    },
    {
      id: 2,
      title: "Revolutionary Ham Preservation Tech",
      category: "Science",
      x: 0.7,
      y: 0.2,
      vx: -0.0008,
      vy: 0.0012,
      radius: 20,
      connections: [1, 3, 5],
      importance: 0.8
    },
    {
      id: 3,
      title: "Ham Market Prices Soar Globally",
      category: "Economics",
      x: 0.4,
      y: 0.6,
      vx: 0.0015,
      vy: -0.0007,
      radius: 22,
      connections: [1, 2, 4, 6],
      importance: 0.85
    },
    {
      id: 4,
      title: "Sustainable Pork Farming Initiative",
      category: "Environment",
      x: 0.8,
      y: 0.7,
      vx: -0.001,
      vy: -0.0009,
      radius: 18,
      connections: [1, 3, 6],
      importance: 0.7
    },
    {
      id: 5,
      title: "Ham Nutrition Study Reveals Benefits",
      category: "Health",
      x: 0.1,
      y: 0.8,
      vx: 0.0012,
      vy: -0.0011,
      radius: 16,
      connections: [2, 6],
      importance: 0.6
    },
    {
      id: 6,
      title: "Artisanal Ham Makers See Boom",
      category: "Business",
      x: 0.5,
      y: 0.9,
      vx: 0.0007,
      vy: -0.0013,
      radius: 19,
      connections: [3, 4, 5],
      importance: 0.75
    }
  ];

  // Create connections between nodes
  const connections: Connection[] = [];
  newsNodes.forEach(node => {
    node.connections.forEach(targetId => {
      const targetNode = newsNodes.find(n => n.id === targetId);
      if (targetNode) {
        connections.push({
          id: `${node.id}-${targetId}`,
          source: node.id,
          target: targetId,
          strength: (node.importance + targetNode.importance) / 2
        });
      }
    });
  });

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
    
    // Animation variables
    let animationFrameId: number;
    const nodes = [...newsNodes];
    
    // Convert normalized coordinates to pixel coordinates
    const getNodePosition = (node: NewsNode) => ({
      x: node.x * canvas.width,
      y: node.y * canvas.height
    });
    
    // Get connection by node IDs
    const getConnection = (sourceId: number, targetId: number) => {
      return connections.find(c => 
        (c.source === sourceId && c.target === targetId) ||
        (c.source === targetId && c.target === sourceId)
      );
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      // Clear canvas with a semi-transparent overlay for motion blur effect
      ctx.fillStyle = "rgba(10, 10, 15, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= 1) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(1, node.x));
        }
        
        if (node.y <= 0 || node.y >= 1) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(1, node.y));
        }
      });
      
      // Draw connections
      connections.forEach(conn => {
        const sourceNode = nodes.find(n => n.id === conn.source);
        const targetNode = nodes.find(n => n.id === conn.target);
        
        if (sourceNode && targetNode) {
          const sourcePos = getNodePosition(sourceNode);
          const targetPos = getNodePosition(targetNode);
          
          // Calculate distance for dynamic opacity
          const dx = targetPos.x - sourcePos.x;
          const dy = targetPos.y - sourcePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(sourcePos.x, sourcePos.y);
          ctx.lineTo(targetPos.x, targetPos.y);
          
          // Gradient line effect
          const gradient = ctx.createLinearGradient(
            sourcePos.x, sourcePos.y,
            targetPos.x, targetPos.y
          );
          
          // Color based on categories
          const getSourceColor = (category: string) => {
            switch(category) {
              case "Events": return "#F59E0B"; // Amber Glow
              case "Science": return "#2563EB"; // Neon Azure
              case "Economics": return "#10B981"; // Emergent Green
              case "Environment": return "#8B5CF6"; // Quantum Purple
              case "Health": return "#EC4899"; // Holographic Pink
              case "Business": return "#F59E0B"; // Amber Glow
              default: return "#2563EB";
            }
          };
          
          gradient.addColorStop(0, getSourceColor(sourceNode.category) + "80");
          gradient.addColorStop(1, getSourceColor(targetNode.category) + "80");
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + conn.strength * 3;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        const pos = getNodePosition(node);
        
        // Create glow effect
        const gradient = ctx.createRadialGradient(
          pos.x, pos.y, 0,
          pos.x, pos.y, node.radius * 2
        );
        
        // Color based on category
        const getNodeColor = (category: string) => {
          switch(category) {
            case "Events": return "#F59E0B"; // Amber Glow
            case "Science": return "#2563EB"; // Neon Azure
            case "Economics": return "#10B981"; // Emergent Green
            case "Environment": return "#8B5CF6"; // Quantum Purple
            case "Health": return "#EC4899"; // Holographic Pink
            case "Business": return "#F59E0B"; // Amber Glow
            default: return "#2563EB";
          }
        };
        
        gradient.addColorStop(0, getNodeColor(node.category));
        gradient.addColorStop(1, getNodeColor(node.category) + "00");
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw main node
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = getNodeColor(node.category);
        ctx.fill();
        
        // Draw inner highlight
        ctx.beginPath();
        ctx.arc(pos.x - node.radius/3, pos.y - node.radius/3, node.radius/3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start animation
    setTimeout(() => {
      setIsLoaded(true);
      animate();
    }, 500);
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden border border-[#64748B]/30 bg-gradient-to-br from-[#0A0A0F] to-[#1A1A2E]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Neural News Network
        </motion.h2>
        
        <motion.p 
          className="text-xl text-[#E2E8F0] max-w-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Watch how stories connect and evolve in real-time. Our AI maps the intricate web of global ham news.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="flex items-center gap-2 bg-[#2563EB]/20 px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#2563EB]"></div>
            <span className="text-[#E2E8F0]">Live Updates</span>
          </div>
          <div className="flex items-center gap-2 bg-[#8B5CF6]/20 px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
            <span className="text-[#E2E8F0]">AI Powered</span>
          </div>
          <div className="flex items-center gap-2 bg-[#10B981]/20 px-4 py-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            <span className="text-[#E2E8F0]">Global Reach</span>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-24 h-24 rounded-full bg-[#2563EB]/10 blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[#8B5CF6]/10 blur-xl"></div>
    </div>
  );
}