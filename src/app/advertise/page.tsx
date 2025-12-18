"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, BarChart3, Target, Mail, Phone, MessageCircle } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function AdvertisePage() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-[#2563EB]" />,
      value: "240K+",
      label: "Daily Readers",
      description: "Active readers across all platforms"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#8B5CF6]" />,
      value: "98%",
      label: "Engagement",
      description: "High reader engagement with content"
    },
    {
      icon: <Target className="h-8 w-8 text-[#F59E0B]" />,
      value: "4.2M+",
      label: "Monthly Impressions",
      description: "Total impressions across all placements"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#10B981]" />,
      value: "32%",
      label: "CTR",
      description: "Average click-through rate"
    }
  ];

  const adFormats = [
    {
      name: "Leaderboard Banner",
      size: "728x90",
      description: "Top of page banner with high visibility",
      bestFor: "Brand awareness campaigns"
    },
    {
      name: "Sidebar Rectangle",
      size: "300x250",
      description: "Sticky sidebar placement for continuous exposure",
      bestFor: "Conversion-focused campaigns"
    },
    {
      name: "In-Content Banner",
      size: "600x300",
      description: "Native integration within article content",
      bestFor: "Content marketing and storytelling"
    },
    {
      name: "Newsletter Sponsorship",
      size: "Variable",
      description: "Prominent placement in our daily newsletter",
      bestFor: "Direct response campaigns"
    }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          ADVERTISE WITH US
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Reach Premium Audiences
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Connect with our engaged community of news enthusiasts through targeted advertising solutions 
          designed to maximize your ROI and brand visibility.
        </p>
      </div>

      {/* Audience Stats */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Audience Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard 
              key={index}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center hover:border-[#2563EB]/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-medium text-[#E2E8F0] mb-2">{stat.label}</div>
              <div className="text-sm text-[#E2E8F0]">{stat.description}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Demographics */}
      <div className="mb-16">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Audience Demographics</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">By Location</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">United States</span>
                      <span className="text-white font-medium">42%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#2563EB] h-3 rounded-full" style={{width: "42%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">United Kingdom</span>
                      <span className="text-white font-medium">18%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#8B5CF6] h-3 rounded-full" style={{width: "18%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Germany</span>
                      <span className="text-white font-medium">12%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#F59E0B] h-3 rounded-full" style={{width: "12%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Other Countries</span>
                      <span className="text-white font-medium">28%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#10B981] h-3 rounded-full" style={{width: "28%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">By Interest</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Politics & Government</span>
                      <span className="text-white font-medium">35%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#2563EB] h-3 rounded-full" style={{width: "35%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Business & Economy</span>
                      <span className="text-white font-medium">28%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#8B5CF6] h-3 rounded-full" style={{width: "28%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Technology</span>
                      <span className="text-white font-medium">22%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#F59E0B] h-3 rounded-full" style={{width: "22%"}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-[#E2E8F0]">Environment</span>
                      <span className="text-white font-medium">15%</span>
                    </div>
                    <div className="w-full bg-[#64748B]/30 rounded-full h-3">
                      <div className="bg-[#10B981] h-3 rounded-full" style={{width: "15%"}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ad Formats */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Advertising Formats</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {adFormats.map((format, index) => (
            <AnimatedCard 
              key={index}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl overflow-hidden hover:border-[#8B5CF6]/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{format.name}</h3>
                    <div className="text-[#2563EB] font-medium mb-2">{format.size}</div>
                  </div>
                  <div className="bg-[#0A0A0F] border border-[#64748B]/30 rounded-lg w-16 h-16 flex items-center justify-center">
                    <span className="text-[#E2E8F0] text-xs text-center">Ad</span>
                  </div>
                </div>
                <p className="text-[#E2E8F0] mb-4">{format.description}</p>
                <div className="flex items-center text-sm text-[#8B5CF6]">
                  <Target className="h-4 w-4 mr-2" />
                  <span>Best for: {format.bestFor}</span>
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-16">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Custom Pricing Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2563EB] mb-4">$500+</div>
                <div className="text-xl font-medium text-white mb-2">Starter Package</div>
                <div className="text-[#E2E8F0]">Perfect for small businesses</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#8B5CF6] mb-4">$2,500+</div>
                <div className="text-xl font-medium text-white mb-2">Professional Package</div>
                <div className="text-[#E2E8F0]">Ideal for growing brands</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#F59E0B] mb-4">Custom</div>
                <div className="text-xl font-medium text-white mb-2">Enterprise Solution</div>
                <div className="text-[#E2E8F0]">Tailored for large organizations</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-[#E2E8F0] mb-6">
                Packages include creative development, campaign management, and detailed performance reporting.
              </p>
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
                Request Custom Quote
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">Start Your Campaign</h2>
          <p className="text-xl text-[#E2E8F0] mb-12 text-center max-w-2xl mx-auto">
            Get in touch with our advertising team to discuss your marketing objectives and create a customized solution.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#2563EB] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-[#E2E8F0]">advertise@luminapress.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#8B5CF6] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-[#E2E8F0]">+1 (555) 123-5678</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-[#F59E0B] mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium">Chat</div>
                    <div className="text-[#E2E8F0]">Available Monday-Friday, 9AM-6PM EST</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Name" 
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Tell us about your campaign
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Describe your advertising goals and target audience..." 
                    rows={4}
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white py-4 text-lg rounded-full"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}