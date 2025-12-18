"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          COOKIE POLICY
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Cookie Policy
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          This Cookie Policy explains how LuminaPress uses cookies and similar tracking technologies 
          to recognize you when you visit our website.
        </p>
        <p className="text-lg text-[#E2E8F0]/80">
          Last Updated: December 17, 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-[#0F172A] to-[#1A1A2E] border border-[#64748B]/30 rounded-2xl overflow-hidden">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                  <Cookie className="h-8 w-8 text-[#2563EB] mr-3" />
                  What Are Cookies?
                </h2>
                <p className="text-[#E2E8F0] text-lg mb-6">
                  Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                  Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, 
                  as well as to provide reporting information.
                </p>
                <p className="text-[#E2E8F0] text-lg">
                  Cookies set by the website owner (in this case, LuminaPress) are called "first-party cookies." 
                  Cookies set by parties other than the website owner are called "third-party cookies." 
                  Third-party cookies enable third-party features or functionality to be provided on or through the website 
                  (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies 
                  can recognize your computer both when it visits the website in question and also when it visits certain other websites.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Why Do We Use Cookies?</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  We use first-party and third-party cookies for several reasons. Some cookies are required for technical 
                  reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
                  Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. 
                  Third parties serve cookies through our website for advertising, analytics, and other purposes. 
                  This is described in more detail below.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">How Often Do We Update This Cookie Policy?</h2>
                <p className="text-[#E2E8F0] text-lg">
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use 
                  or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly 
                  to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy 
                  indicates when it was last updated.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Where Can I Get Further Information?</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  For any questions or concerns regarding this Cookie Policy, please contact us at:
                </p>
                <div className="bg-[#0A0A0F] border border-[#64748B]/30 rounded-xl p-6 mb-6">
                  <p className="text-[#E2E8F0] text-lg">
                    <strong>Email:</strong> privacy@luminapress.com
                  </p>
                  <p className="text-[#E2E8F0] text-lg mt-2">
                    <strong>Address:</strong> Privacy Officer, LuminaPress, 123 News Avenue, New York, NY 10001
                  </p>
                </div>
                <p className="text-[#E2E8F0] text-lg">
                  You can also learn more about cookies by visiting the following third-party websites:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6 mt-4">
                  <li>• <a href="http://www.allaboutcookies.org" className="text-[#2563EB] hover:underline">All About Cookies</a></li>
                  <li>• <a href="http://www.youronlinechoices.com" className="text-[#2563EB] hover:underline">Your Online Choices</a></li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Consent</h2>
                <p className="text-[#E2E8F0] text-lg">
                  By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree 
                  to LuminaPress's use of cookies as described in this Cookie Policy.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Button 
            onClick={() => window.print()} 
            className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-4 text-lg rounded-full"
          >
            Print This Policy
          </Button>
        </div>
      </div>
    </div>
  );
}