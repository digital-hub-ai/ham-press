import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "News",
    links: [
      { name: "Latest", href: "/" },
      { name: "World", href: "/world" },
      { name: "Trending", href: "/trending" },
      { name: "Premium", href: "/premium" },
      { name: "Food News", href: "/food-news" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Lumina", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Advertise", href: "/advertise" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Subscribe", href: "/subscribe" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#64748B]/30 bg-gradient-to-b from-[#0F172A] to-[#0A0A0F] text-[#E2E8F0]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
                Lumina<span className="font-light">Press</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-[#E2E8F0]/80 text-lg leading-relaxed">
              Delivering the finest premium news from around the globe with editorial excellence and digital innovation since 2025.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#2563EB]" />
                <span>contact@luminapress.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#2563EB]" />
                <span>+1 (555) 123-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#2563EB]" />
                <span>Global Newsroom Network</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <Link href="#" className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-[#64748B]/30">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#E2E8F0]/80 hover:text-[#2563EB] transition-colors text-lg">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#64748B]/30 md:flex md:items-center md:justify-between">
          <p className="text-[#E2E8F0]/80 text-lg">
            &copy; {new Date().getFullYear()} LuminaPress. All rights reserved. Crafted with precision for news enthusiasts worldwide.
          </p>
          <div className="mt-4 flex flex-wrap gap-6 md:mt-0">
            <Link href="#" className="text-[#E2E8F0]/80 hover:text-[#2563EB] transition-colors text-lg">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#E2E8F0]/80 hover:text-[#2563EB] transition-colors text-lg">
              Terms of Service
            </Link>
            <Link href="#" className="text-[#E2E8F0]/80 hover:text-[#2563EB] transition-colors text-lg">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}