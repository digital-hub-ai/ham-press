"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, Globe, TrendingUp, Award, Mail } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior News Reporter",
      department: "Newsroom",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
    },
    {
      id: 2,
      title: "Data Journalist",
      department: "Investigative",
      location: "London, UK",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      id: 3,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
    },
    {
      id: 4,
      title: "Content Strategist",
      department: "Marketing",
      location: "Berlin, Germany",
      type: "Part-time",
      experience: "2+ years",
    },
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-[#2563EB]" />,
      title: "Global Impact",
      description: "Work on stories that reach millions of readers worldwide"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#8B5CF6]" />,
      title: "Career Growth",
      description: "Opportunities for advancement in a rapidly growing organization"
    },
    {
      icon: <Award className="h-8 w-8 text-[#F59E0B]" />,
      title: "Recognition",
      description: "Industry awards and recognition for outstanding work"
    },
    {
      icon: <Users className="h-8 w-8 text-[#10B981]" />,
      title: "Collaborative Culture",
      description: "Work with talented professionals from diverse backgrounds"
    }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          JOIN OUR TEAM
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Build the Future of News
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Join LuminaPress and help shape the future of premium journalism. We're looking for passionate professionals 
          who want to make a difference in how the world receives and understands news.
        </p>
      </div>

      {/* Company Culture */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedCard 
              key={index}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-[#E2E8F0]">{benefit.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Current Openings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobOpenings.map((job) => (
            <AnimatedCard 
              key={job.id}
              className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl overflow-hidden hover:border-[#8B5CF6]/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-[#2563EB]/20 text-[#2563EB]">
                        {job.department}
                      </Badge>
                      <Badge variant="secondary" className="bg-[#8B5CF6]/20 text-[#8B5CF6]">
                        {job.location}
                      </Badge>
                      <Badge variant="secondary" className="bg-[#10B981]/20 text-[#10B981]">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  <Briefcase className="h-8 w-8 text-[#64748B]" />
                </div>
                <div className="flex items-center text-[#E2E8F0] mb-6">
                  <Award className="h-5 w-5 mr-2" />
                  <span>{job.experience} experience required</span>
                </div>
                <Button className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white py-3 rounded-full">
                  Apply Now
                </Button>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Diversity & Inclusion */}
      <div className="mb-16">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Diversity & Inclusion</h2>
                <p className="text-xl text-[#E2E8F0] mb-6 leading-relaxed">
                  We believe that diverse perspectives lead to better journalism. LuminaPress is committed to creating 
                  an inclusive workplace where people from all backgrounds can thrive and contribute to our mission.
                </p>
                <p className="text-xl text-[#E2E8F0] mb-8 leading-relaxed">
                  Our newsroom reflects the diversity of our global audience, with correspondents and staff from over 
                  50 countries working together to provide comprehensive coverage of world events.
                </p>
                <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-3 text-lg rounded-full">
                  Learn About Our Initiatives
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-[#0A0A0F] border border-[#64748B]/30 rounded-2xl p-8 text-center">
                    <Users className="h-16 w-16 text-[#8B5CF6] mx-auto mb-6" />
                    <div className="text-5xl font-bold text-white mb-2">50+</div>
                    <div className="text-2xl text-[#E2E8F0] mb-4">Nationalities</div>
                    <div className="text-[#E2E8F0]">
                      Represented in our global workforce
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Process */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Hiring Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Application</h3>
            <p className="text-[#E2E8F0]">
              Submit your resume and cover letter through our careers portal
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Interview</h3>
            <p className="text-[#E2E8F0]">
              Connect with our hiring team for a discussion about your experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#F59E0B] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Offer</h3>
            <p className="text-[#E2E8F0]">
              Receive a competitive offer to join our team
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-3xl bg-gradient-to-r from-[#0A0A0F] to-[#1A1A2E] p-12 border border-[#2563EB]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Make an Impact?</h2>
          <p className="text-xl text-[#E2E8F0] mb-8 max-w-2xl mx-auto">
            Join our team of dedicated professionals who are shaping the future of premium journalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full">
              View All Positions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/10 px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = "mailto:careers@luminapress.com"}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Recruiting
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}