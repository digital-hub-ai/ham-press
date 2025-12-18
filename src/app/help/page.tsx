"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle, BookOpen, User, Settings, CreditCard, Mail } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";
import Link from "next/link";

export default function HelpCenterPage() {
  const faqs = [
    {
      category: "Account",
      questions: [
        "How do I create an account?",
        "How do I reset my password?",
        "Can I change my email address?",
        "How do I cancel my subscription?"
      ]
    },
    {
      category: "Subscriptions",
      questions: [
        "How do I subscribe to premium content?",
        "What payment methods do you accept?",
        "Can I gift a subscription?",
        "How do I update my billing information?"
      ]
    },
    {
      category: "Content",
      questions: [
        "How often is content updated?",
        "Can I download articles?",
        "How do I submit a story tip?",
        "What topics do you cover?"
      ]
    },
    {
      category: "Technical",
      questions: [
        "The website isn't loading properly",
        "How do I clear my cache?",
        "I'm having trouble playing videos",
        "How do I enable notifications?"
      ]
    }
  ];

  const helpTopics = [
    {
      icon: <User className="h-8 w-8 text-[#2563EB]" />,
      title: "Account Management",
      description: "Learn how to manage your account settings, subscriptions, and preferences.",
      link: "#"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#8B5CF6]" />,
      title: "Reading Content",
      description: "Tips for getting the most out of our premium content and features.",
      link: "#"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#F59E0B]" />,
      title: "Technical Support",
      description: "Troubleshoot common technical issues and browser compatibility.",
      link: "#"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#10B981]" />,
      title: "Billing & Payments",
      description: "Manage your subscription, payment methods, and billing history.",
      link: "#"
    }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          HELP CENTER
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          How Can We Help?
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Find answers to common questions, troubleshoot issues, and get the most out of your LuminaPress experience.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#64748B]" />
          <Input 
            placeholder="Search help articles..." 
            className="pl-12 pr-4 py-6 text-lg bg-[#0F172A] border border-[#64748B]/30 text-white rounded-full"
          />
        </div>
      </div>

      {/* Quick Help Topics */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Quick Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpTopics.map((topic, index) => (
            <AnimatedCard 
              key={index}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">{topic.title}</h3>
              <p className="text-[#E2E8F0] text-center mb-4">{topic.description}</p>
              <Button variant="outline" className="w-full border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#2563EB]/10">
                Learn More
              </Button>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <HelpCircle className="h-6 w-6 mr-3 text-[#2563EB]" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex}>
                      <Link 
                        href="#" 
                        className="text-[#E2E8F0] hover:text-[#2563EB] transition-colors flex items-start"
                      >
                        <span className="text-[#2563EB] mr-2">•</span>
                        {question}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="mb-16">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Still Need Help?</h2>
                <p className="text-xl text-[#E2E8F0] mb-6 leading-relaxed">
                  Our support team is here to assist you with any questions or issues you may have. 
                  We typically respond within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[#2563EB] mr-3" />
                    <span className="text-[#E2E8F0]">support@luminapress.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-[#8B5CF6] mr-3" />
                    <span className="text-[#E2E8F0]">Start a live chat</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-[#0A0A0F] border border-[#64748B]/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Submit a Request</h3>
                    <form className="space-y-4">
                      <Input 
                        placeholder="Your Name" 
                        className="bg-[#0F172A] border-[#64748B]/30 text-white"
                      />
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="bg-[#0F172A] border-[#64748B]/30 text-white"
                      />
                      <Input 
                        placeholder="Subject" 
                        className="bg-[#0F172A] border-[#64748B]/30 text-white"
                      />
                      <Button className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white py-3 rounded-full">
                        Send Request
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Support */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Community Support</h2>
        <p className="text-xl text-[#E2E8F0] max-w-2xl mx-auto mb-8">
          Connect with other LuminaPress users, share tips, and get advice from our community of readers.
        </p>
        <Button 
          size="lg" 
          className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-8 py-4 text-lg rounded-full"
          onClick={() => window.location.href = "/community"}
        >
          Visit Community Forum
        </Button>
      </div>
    </div>
  );
}