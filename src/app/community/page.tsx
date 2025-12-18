"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, TrendingUp, Star, Calendar, ThumbsUp, Reply, Send } from "lucide-react";
import { AnimatedCard } from "@/components/elements/animated-card";

export default function CommunityPage() {
  const discussions = [
    {
      id: 1,
      title: "Best practices for investigative reporting in the digital age",
      author: "Sarah Johnson",
      replies: 24,
      likes: 42,
      timestamp: "2 hours ago",
      category: "Journalism",
      isPopular: true
    },
    {
      id: 2,
      title: "How to spot misinformation in news articles",
      author: "Michael Chen",
      replies: 18,
      likes: 37,
      timestamp: "5 hours ago",
      category: "Media Literacy",
      isPopular: true
    },
    {
      id: 3,
      title: "Discussion: The future of premium news subscriptions",
      author: "Emma Rodriguez",
      replies: 31,
      likes: 56,
      timestamp: "1 day ago",
      category: "Subscriptions",
      isPopular: false
    },
    {
      id: 4,
      title: "Favorite news sources in 2025 - Share your recommendations",
      author: "David Kim",
      replies: 42,
      likes: 89,
      timestamp: "2 days ago",
      category: "Recommendations",
      isPopular: true
    }
  ];

  const members = [
    { id: 1, name: "Alex Morgan", role: "Senior Editor", posts: 127 },
    { id: 2, name: "Priya Sharma", role: "Data Analyst", posts: 89 },
    { id: 3, name: "James Wilson", role: "Correspondent", posts: 204 },
    { id: 4, name: "Maria Garcia", role: "Photojournalist", posts: 156 }
  ];

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          COMMUNITY
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          LuminaPress Community
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Connect with fellow news enthusiasts, share insights, and engage in meaningful discussions about journalism, 
          media literacy, and current events.
        </p>
      </div>

      {/* Community Stats */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center">
            <Users className="h-10 w-10 text-[#2563EB] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">12,482</div>
            <div className="text-[#E2E8F0]">Active Members</div>
          </AnimatedCard>
          
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center">
            <MessageCircle className="h-10 w-10 text-[#8B5CF6] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">5,731</div>
            <div className="text-[#E2E8F0]">Discussions</div>
          </AnimatedCard>
          
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center">
            <TrendingUp className="h-10 w-10 text-[#F59E0B] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">89.4K</div>
            <div className="text-[#E2E8F0]">Monthly Posts</div>
          </AnimatedCard>
          
          <AnimatedCard className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 text-center">
            <Star className="h-10 w-10 text-[#10B981] mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-[#E2E8F0]">Community Rating</div>
          </AnimatedCard>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* New Discussion Form */}
          <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Start a Discussion</CardTitle>
              <CardDescription className="text-[#E2E8F0]">
                Share your thoughts, ask questions, or start a conversation with the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <label htmlFor="discussionTitle" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Discussion Title
                  </label>
                  <Input 
                    id="discussionTitle" 
                    placeholder="What would you like to discuss?" 
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="discussionContent" className="block text-sm font-medium text-[#E2E8F0] mb-2">
                    Your Message
                  </label>
                  <Textarea 
                    id="discussionContent" 
                    placeholder="Share your thoughts..." 
                    rows={4}
                    className="bg-[#0A0A0F] border-[#64748B]/30 text-white"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-6 py-3 rounded-full">
                    <Send className="h-4 w-4 mr-2" />
                    Post Discussion
                  </Button>
                  <Button variant="outline" className="border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#2563EB]/10 px-6 py-3 rounded-full">
                    Add Media
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Popular Discussions */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-white">Popular Discussions</h2>
            <div className="space-y-6">
              {discussions.map((discussion) => (
                <AnimatedCard 
                  key={discussion.id}
                  className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl p-6 hover:border-[#2563EB]/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{discussion.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-[#2563EB]/20 text-[#2563EB]">
                          {discussion.category}
                        </Badge>
                        {discussion.isPopular && (
                          <Badge variant="secondary" className="bg-[#F59E0B]/20 text-[#F59E0B]">
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#E2E8F0] hover:text-[#2563EB]">
                      <ThumbsUp className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center text-[#E2E8F0]">
                      <span className="font-medium">{discussion.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{discussion.timestamp}</span>
                    </div>
                    
                    <div className="flex items-center text-[#E2E8F0]">
                      <Button variant="ghost" size="sm" className="text-[#E2E8F0] hover:text-[#2563EB] p-1 h-auto">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {discussion.replies}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#E2E8F0] hover:text-[#2563EB] p-1 h-auto ml-2">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {discussion.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[#E2E8F0] hover:text-[#2563EB] p-1 h-auto ml-2">
                        <Reply className="h-4 w-4 mr-1" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Active Members */}
          <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-[#2563EB]" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{member.name}</div>
                      <div className="text-sm text-[#E2E8F0]">{member.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#2563EB] font-medium">{member.posts}</div>
                      <div className="text-xs text-[#E2E8F0]">posts</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Community Guidelines */}
          <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Community Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-[#E2E8F0]">
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">•</span>
                  <span>Be respectful and constructive in all interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">•</span>
                  <span>Stay on topic and avoid personal attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">•</span>
                  <span>No spam, self-promotion, or advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563EB] mr-2">•</span>
                  <span>Report inappropriate content to moderators</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6 border-[#64748B]/30 text-[#E2E8F0] hover:bg-[#2563EB]/10">
                Read Full Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}