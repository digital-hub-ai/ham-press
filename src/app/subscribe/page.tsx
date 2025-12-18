"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Check, Star, TrendingUp, Mail, Bell, Bookmark } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function SubscribePage() {
  const plans = [
    {
      name: "Digital Basic",
      price: "$4.99",
      period: "per month",
      description: "Essential access to our premium content",
      features: [
        "Unlimited articles",
        "Ad-free reading experience",
        "Offline reading",
        "Basic newsletter"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Digital Plus",
      price: "$9.99",
      period: "per month",
      description: "Enhanced access with exclusive benefits",
      features: [
        "Everything in Basic",
        "Exclusive premium articles",
        "Early access to new content",
        "Advanced newsletter",
        "Commenting privileges"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Digital Premium",
      price: "$14.99",
      period: "per month",
      description: "Complete access to all premium features",
      features: [
        "Everything in Plus",
        "VIP event invitations",
        "Personalized content recommendations",
        "Priority customer support",
        "Special subscriber-only content"
      ],
      popular: false,
      color: "gold"
    }
  ];

  const benefits = [
    {
      icon: <Star className="h-8 w-8 text-[#F59E0B]" />,
      title: "Exclusive Content",
      description: "Access to premium articles and investigations not available to the public"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#10B981]" />,
      title: "Early Access",
      description: "Be the first to read breaking news and exclusive reports"
    },
    {
      icon: <Mail className="h-8 w-8 text-[#2563EB]" />,
      title: "Premium Newsletter",
      description: "Curated insights delivered directly to your inbox"
    },
    {
      icon: <Bell className="h-8 w-8 text-[#8B5CF6]" />,
      title: "Custom Alerts",
      description: "Personalized notifications for topics you care about"
    },
    {
      icon: <Bookmark className="h-8 w-8 text-[#EC4899]" />,
      title: "Save & Organize",
      description: "Bookmark and organize articles in personalized collections"
    }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          SUBSCRIBE
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Premium Access
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Join thousands of subscribers who rely on LuminaPress for in-depth reporting, exclusive insights, 
          and unparalleled access to premium journalism.
        </p>
      </div>

      {/* Subscription Plans */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <AnimatedCard 
              key={index}
              className={`bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl overflow-hidden relative ${
                plan.popular ? 'ring-2 ring-[#8B5CF6] ring-offset-2 ring-offset-[#0A0A0F]' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#8B5CF6] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-[#E2E8F0]">/{plan.period}</span>
                </div>
                <CardDescription className="text-[#E2E8F0]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#10B981] mr-3 flex-shrink-0" />
                      <span className="text-[#E2E8F0]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-3 text-lg rounded-full ${
                    plan.color === 'blue' ? 'bg-[#2563EB] hover:bg-[#2563EB]/90' :
                    plan.color === 'purple' ? 'bg-[#8B5CF6] hover:bg-[#8B5CF6]/90' :
                    'bg-[#F59E0B] hover:bg-[#F59E0B]/90'
                  } text-white`}
                >
                  Get Started
                </Button>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Premium Subscriber Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedCard 
              key={index}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center hover:border-[#2563EB]/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-[#E2E8F0] text-sm">{benefit.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">What Our Subscribers Say</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#F59E0B] fill-current" />
              ))}
            </div>
            <p className="text-[#E2E8F0] mb-4">
              "LuminaPress Premium has completely transformed how I stay informed. The depth of reporting is unmatched."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold mr-3">
                JD
              </div>
              <div>
                <div className="font-bold text-white">John Davis</div>
                <div className="text-sm text-[#E2E8F0]">Subscriber for 2 years</div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#F59E0B] fill-current" />
              ))}
            </div>
            <p className="text-[#E2E8F0] mb-4">
              "The exclusive content and early access make my subscription worth every penny. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white font-bold mr-3">
                SR
              </div>
              <div>
                <div className="font-bold text-white">Sarah Roberts</div>
                <div className="text-sm text-[#E2E8F0]">Subscriber for 3 years</div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#F59E0B] fill-current" />
              ))}
            </div>
            <p className="text-[#E2E8F0] mb-4">
              "As a journalism student, LuminaPress Premium gives me access to incredible resources and insights."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white font-bold mr-3">
                MP
              </div>
              <div>
                <div className="font-bold text-white">Michael Park</div>
                <div className="text-sm text-[#E2E8F0]">Subscriber for 1 year</div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex h-12 w-full rounded-full border border-[#64748B]/30 bg-[#0F172A] px-6 py-3 text-lg text-white placeholder:text-[#64748B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-3 text-lg rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}