"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function ContactPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          CONTACT US
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Get In Touch
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Have questions, feedback, or a story tip? Our team is ready to assist you. Reach out through any of our channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
          
          <div className="space-y-6">
            <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#2563EB]/20">
                  <Mail className="h-6 w-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-[#E2E8F0]">contact@luminapress.com</p>
                  <p className="text-[#E2E8F0] mt-1">Press inquiries: press@luminapress.com</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#8B5CF6]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#8B5CF6]/20">
                  <Phone className="h-6 w-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-[#E2E8F0]">+1 (555) 123-5678</p>
                  <p className="text-[#E2E8F0] mt-1">Mon-Fri, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#F59E0B]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#F59E0B]/20">
                  <MapPin className="h-6 w-6 text-[#F59E0B]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                  <p className="text-[#E2E8F0]">Global Newsroom Network</p>
                  <p className="text-[#E2E8F0]">123 News Avenue, New York, NY 10001</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#10B981]/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#10B981]/20">
                  <Clock className="h-6 w-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                  <p className="text-[#E2E8F0]">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-[#E2E8F0] mt-1">Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-[#E2E8F0] mt-1">Sunday: Closed</p>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Office Locations */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-[#0F172A]/50 border border-[#64748B]/30">
                <CardContent className="p-4">
                  <h4 className="font-bold text-white mb-2">New York</h4>
                  <p className="text-[#E2E8F0] text-sm">Headquarters</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0F172A]/50 border border-[#64748B]/30">
                <CardContent className="p-4">
                  <h4 className="font-bold text-white mb-2">London</h4>
                  <p className="text-[#E2E8F0] text-sm">European Bureau</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0F172A]/50 border border-[#64748B]/30">
                <CardContent className="p-4">
                  <h4 className="font-bold text-white mb-2">Berlin</h4>
                  <p className="text-[#E2E8F0] text-sm">German Operations</p>
                </CardContent>
              </Card>
              <Card className="bg-[#0F172A]/50 border border-[#64748B]/30">
                <CardContent className="p-4">
                  <h4 className="font-bold text-white mb-2">Tokyo</h4>
                  <p className="text-[#E2E8F0] text-sm">Asia Pacific Hub</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
          <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl">
            <CardContent className="p-6">
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
                  <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    rows={6}
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white py-4 text-lg rounded-full"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Media */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10">
                Twitter
              </Button>
              <Button variant="outline" className="border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10">
                Facebook
              </Button>
              <Button variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10">
                LinkedIn
              </Button>
              <Button variant="outline" className="border-[#10B981] text-[#10B981] hover:bg-[#10B981]/10">
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}