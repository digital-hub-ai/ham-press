"use client";

import { useEffect, useRef } from "react";

interface ProfessionalImagePlaceholderProps {
  width?: number;
  height?: number;
  title: string;
  category?: string;
  variant?: "default" | "market" | "event" | "science" | "world" | "trending" | "premium";
}

export function ProfessionalImagePlaceholder({
  width = 600,
  height = 300,
  title,
  category = "News",
  variant = "default"
}: ProfessionalImagePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = width;
    canvas.height = height;
    
    // Background colors based on variant
    const backgroundColors = {
      default: ["#0F172A", "#1A1A2E"],
      market: ["#0A0A0F", "#1A1A2E"],
      event: ["#1A1A2E", "#0F172A"],
      science: ["#0A0A0F", "#1A1A2E"],
      world: ["#0A0A0F", "#1A1A2E"],
      trending: ["#0A0A0F", "#1A1A2E"],
      premium: ["#1A1A2E", "#0A0A0F"]
    };
    
    const colors = backgroundColors[variant];
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add subtle pattern
    ctx.strokeStyle = "rgba(37, 99, 235, 0.1)";
    ctx.lineWidth = 1;
    
    // Draw grid pattern
    for (let x = 0; x < width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y < height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Add category badge
    ctx.fillStyle = "rgba(37, 99, 235, 0.8)";
    ctx.beginPath();
    ctx.roundRect(20, 20, 120, 30, 5);
    ctx.fill();
    
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(category.toUpperCase(), 80, 40);
    
    // Add title text
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    
    // Wrap text
    const words = title.split(" ");
    let line = "";
    let y = 100;
    const maxWidth = width - 40;
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, 20, y);
        line = words[i] + " ";
        y += 30;
      } else {
        line = testLine;
      }
    }
    
    ctx.fillText(line, 20, y);
    
    // Add decorative elements based on variant
    switch (variant) {
      case "market":
        // Draw chart-like elements
        ctx.strokeStyle = "rgba(16, 185, 129, 0.6)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(450, 150);
        ctx.lineTo(500, 180);
        ctx.lineTo(550, 120);
        ctx.stroke();
        
        // Draw data points
        ctx.fillStyle = "rgba(16, 185, 129, 1)";
        const dataPoints = [200, 150, 180, 120];
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.arc(400 + i * 50, dataPoints[i], 5, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case "event":
        // Draw confetti-like elements
        ctx.fillStyle = "rgba(245, 158, 11, 0.7)";
        for (let i = 0; i < 20; i++) {
          const x = 400 + Math.random() * 150;
          const y = 100 + Math.random() * 100;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case "science":
        // Draw molecular structure
        ctx.strokeStyle = "rgba(139, 92, 246, 0.7)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(450, 150, 30, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(500, 180, 30, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(450, 150);
        ctx.lineTo(500, 180);
        ctx.stroke();
        break;
        
      case "world":
        // Draw globe-like elements
        ctx.strokeStyle = "rgba(37, 99, 235, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(450, 150, 50, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw meridians
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          ctx.beginPath();
          ctx.ellipse(450, 150, 50, 20 * Math.abs(Math.cos(angle)), angle, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        // Draw continents
        ctx.fillStyle = "rgba(16, 185, 129, 0.7)";
        ctx.beginPath();
        ctx.ellipse(430, 140, 15, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.ellipse(470, 160, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case "trending":
        // Draw trending-specific elements
        ctx.strokeStyle = "rgba(245, 158, 11, 0.6)";
        ctx.lineWidth = 2;
        // Draw a simple trending arrow
        ctx.beginPath();
        ctx.moveTo(450, 200);
        ctx.lineTo(500, 150);
        ctx.lineTo(550, 200);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(500, 150);
        ctx.lineTo(500, 220);
        ctx.stroke();
        break;
        
      case "premium":
        // Draw premium-specific elements
        ctx.strokeStyle = "rgba(139, 92, 246, 0.6)";
        ctx.lineWidth = 2;
        // Draw a crown-like shape
        ctx.beginPath();
        ctx.moveTo(450, 180);
        ctx.lineTo(470, 150);
        ctx.lineTo(490, 180);
        ctx.lineTo(510, 150);
        ctx.lineTo(530, 180);
        ctx.lineTo(530, 200);
        ctx.lineTo(450, 200);
        ctx.closePath();
        ctx.stroke();
        
        // Draw gemstones
        ctx.fillStyle = "rgba(245, 158, 11, 0.8)";
        ctx.beginPath();
        ctx.arc(470, 165, 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(510, 165, 4, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    
    // Add logo watermark
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.textAlign = "right";
    ctx.fillText("LUMINA PRESS", width - 20, height - 20);
  }, [width, height, title, category, variant]);
  
  return (
    <div className="relative overflow-hidden rounded-lg">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}