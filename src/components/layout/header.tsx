"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, User, Home, Globe, TrendingUp, Star, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "World", href: "/world", icon: Globe },
  { name: "Trending", href: "/trending", icon: TrendingUp },
  { name: "Premium", href: "/premium", icon: Star },
  { name: "Ham News", href: "/ham-news", icon: null },
  { name: "You", href: "/profile", icon: UserCircle },
];

export function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#64748B]/30 bg-background/90 backdrop-blur-lg">
      <div className="container flex h-14 md:h-16 items-center justify-between px-2 md:px-4">
        {/* Logo */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/" className="flex items-center gap-1 md:gap-2 font-bold text-lg md:text-2xl">
            <span className="bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
              Ham<span className="font-light">Press</span>
            </span>
          </Link>
        </div>

        {/* Navigation - Visible on all devices */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                  pathname === item.href
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "text-foreground hover:bg-[#2563EB]/10"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">{Icon && <Icon className="h-4 w-4" />}</span>
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile Navigation - Always visible */}
        <nav className="flex md:hidden items-center gap-1">
          {navigationItems.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-2 py-1.5 text-xs font-medium rounded-full transition-all duration-300 flex items-center gap-1 ${
                  pathname === item.href
                    ? "bg-[#2563EB] text-white shadow-lg"
                    : "text-foreground hover:bg-[#2563EB]/10"
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                <span className="hidden xs:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2563EB]/10">
            <Search className="h-5 w-5 text-foreground" />
            <span className="sr-only">Search</span>
          </Button>
          
          <ThemeToggle className="hidden md:flex" />
          
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-[#2563EB]/10">
            <User className="h-5 w-5 text-foreground" />
            <span className="sr-only">User account</span>
          </Button>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full hover:bg-[#2563EB]/10">
                <Menu className="h-5 w-5 text-foreground" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-[#64748B]/30">
              <nav className="flex flex-col gap-4 pt-8">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center gap-3 ${
                        pathname === item.href
                          ? "bg-[#2563EB] text-white"
                          : "text-foreground hover:bg-[#2563EB]/10"
                      }`}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}