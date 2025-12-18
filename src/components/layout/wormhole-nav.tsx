"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Globe, TrendingUp, Star, User, Search, Bookmark, Share2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "World", href: "/world", icon: Globe },
  { name: "Trending", href: "/trending", icon: TrendingUp },
  { name: "Premium", href: "/premium", icon: Star },
  { name: "Bookmarks", href: "/bookmarks", icon: Bookmark },
  { name: "Profile", href: "/profile", icon: User },
];

export function WormholeNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-4"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-3 bg-[#0F172A]/80 backdrop-blur-lg rounded-2xl p-4 border border-[#64748B]/30 shadow-2xl">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-12 h-12 hover:bg-[#2563EB]/20 text-[#E2E8F0]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{item.name}</span>
                  </Button>
                );
              })}
              
              <div className="w-full h-px bg-[#64748B]/30 my-2"></div>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-[#2563EB]/20 text-[#E2E8F0]"
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
              >
                {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                <span className="sr-only">Toggle theme</span>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-[#2563EB]/20 text-[#E2E8F0]"
              >
                <Search className="h-6 w-6" />
                <span className="sr-only">Search</span>
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full w-12 h-12 hover:bg-[#2563EB]/20 text-[#E2E8F0]"
              >
                <Share2 className="h-6 w-6" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="w-16 h-16 rounded-full bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-all duration-300 border-4 border-white/20"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </motion.button>
    </div>
  );
}