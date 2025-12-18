"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Globe, Lightbulb, TrendingUp } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          ABOUT LUMINAPRESS
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          World's Largest Premium News
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Delivering the finest premium news from around the globe with editorial excellence and digital innovation since 2025.
        </p>
      </div>

      {/* Mission Statement */}
      <div className="mb-16">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-xl text-[#E2E8F0] mb-6 leading-relaxed">
                  At LuminaPress, we're committed to delivering unparalleled premium news coverage that informs, inspires, and empowers our global audience. 
                  We believe in the power of quality journalism to shape a better world.
                </p>
                <p className="text-xl text-[#E2E8F0] mb-8 leading-relaxed">
                  Our team of expert correspondents and analysts work tirelessly to bring you the most important stories from every corner of the globe, 
                  with a focus on accuracy, depth, and insight.
                </p>
                <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
                  Meet Our Team
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-[#0A0A0F] border border-[#64748B]/30 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-[#2563EB] mx-auto mb-4" />
                        <div className="text-3xl font-bold text-white">500+</div>
                        <div className="text-[#E2E8F0]">Journalists</div>
                      </div>
                      <div className="text-center">
                        <Globe className="h-12 w-12 text-[#8B5CF6] mx-auto mb-4" />
                        <div className="text-3xl font-bold text-white">120+</div>
                        <div className="text-[#E2E8F0]">Countries</div>
                      </div>
                      <div className="text-center">
                        <Award className="h-12 w-12 text-[#F59E0B] mx-auto mb-4" />
                        <div className="text-3xl font-bold text-white">250+</div>
                        <div className="text-[#E2E8F0]">Awards</div>
                      </div>
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-[#10B981] mx-auto mb-4" />
                        <div className="text-3xl font-bold text-white">240K+</div>
                        <div className="text-[#E2E8F0]">Daily Readers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-8 hover:border-[#2563EB]/50 transition-all duration-300">
            <Target className="h-12 w-12 text-[#2563EB] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Accuracy</h3>
            <p className="text-[#E2E8F0] leading-relaxed">
              We hold ourselves to the highest standards of journalistic integrity, verifying every fact and source before publication.
            </p>
          </AnimatedCard>

          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-8 hover:border-[#8B5CF6]/50 transition-all duration-300">
            <Lightbulb className="h-12 w-12 text-[#8B5CF6] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Innovation</h3>
            <p className="text-[#E2E8F0] leading-relaxed">
              We embrace cutting-edge technology and storytelling techniques to deliver news in engaging, immersive ways.
            </p>
          </AnimatedCard>

          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-8 hover:border-[#F59E0B]/50 transition-all duration-300">
            <Globe className="h-12 w-12 text-[#F59E0B] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Global Perspective</h3>
            <p className="text-[#E2E8F0] leading-relaxed">
              Our international network of correspondents ensures comprehensive coverage of world events from multiple viewpoints.
            </p>
          </AnimatedCard>
        </div>
      </div>

      {/* History Timeline */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#2563EB] to-[#8B5CF6]"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative flex items-center">
              <div className="hidden md:block md:w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2025</h3>
                  <p className="text-[#E2E8F0]">
                    LuminaPress launches with a vision to revolutionize premium news delivery through innovative digital experiences.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#2563EB] border-4 border-[#0A0A0F] z-10"></div>
              <div className="md:hidden w-full pl-8 mt-4">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2025</h3>
                  <p className="text-[#E2E8F0]">
                    LuminaPress launches with a vision to revolutionize premium news delivery through innovative digital experiences.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 pl-8"></div>
            </div>

            <div className="relative flex items-center">
              <div className="hidden md:block md:w-1/2 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#8B5CF6] border-4 border-[#0A0A0F] z-10"></div>
              <div className="md:hidden w-full pl-8 mt-4">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2026</h3>
                  <p className="text-[#E2E8F0]">
                    Expanded to 50 countries with over 200 journalists, establishing bureaus in major global capitals.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 pl-8">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2026</h3>
                  <p className="text-[#E2E8F0]">
                    Expanded to 50 countries with over 200 journalists, establishing bureaus in major global capitals.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="hidden md:block md:w-1/2 pr-8 text-right">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2027</h3>
                  <p className="text-[#E2E8F0]">
                    Reached 1 million daily readers and won the prestigious Global Journalism Excellence Award.
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#F59E0B] border-4 border-[#0A0A0F] z-10"></div>
              <div className="md:hidden w-full pl-8 mt-4">
                <div className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">2027</h3>
                  <p className="text-[#E2E8F0]">
                    Reached 1 million daily readers and won the prestigious Global Journalism Excellence Award.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2 pl-8"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Community</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Become part of the world's largest premium news community. Subscribe today for exclusive content and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
              Subscribe Now
            </Button>
            <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-4 text-lg rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}