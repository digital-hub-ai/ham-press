"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WormholeNav } from "@/components/layout/wormhole-nav";
import { ParticleBackground } from "@/components/elements/particle-background";
import { useTheme } from "next-themes";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen flex-col ${theme === "dark" ? "dark" : ""}`}>
      <ParticleBackground />
      <Header />
      <main className="flex-1 relative">{children}</main>
      <Footer />
      <WormholeNav />
    </div>
  );
}