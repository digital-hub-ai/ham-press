"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          PRIVACY POLICY
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                  <Shield className="h-8 w-8 text-[#2563EB] mr-3" />
                  Information We Collect
                </h2>
                <p className="text-[#E2E8F0] text-lg mb-6">
                  We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, 
                  make a purchase, or contact us for support. This information may include your name, email address, postal address, 
                  phone number, payment information, and any other information you choose to provide.
                </p>
                <p className="text-[#E2E8F0] text-lg">
                  We also automatically collect certain information about your device and how you interact with our services, 
                  including your IP address, browser type, operating system, referring URLs, pages viewed, and dates/times of visits.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">How We Use Your Information</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  We use the information we collect to:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Provide, maintain, and improve our services</li>
                  <li>• Process and fulfill your subscriptions and orders</li>
                  <li>• Send you newsletters, marketing communications, and service updates</li>
                  <li>• Respond to your comments, questions, and requests</li>
                  <li>• Monitor and analyze usage and trends to enhance user experience</li>
                  <li>• Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                  <li>• Protect the security and integrity of our services</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Information Sharing</h2>
                <p className="text-[#E2E8F0] text-lg mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Service providers who perform services on our behalf</li>
                  <li>• Analytics and advertising partners to help us understand usage patterns</li>
                  <li>• Law enforcement or regulatory authorities when required by law</li>
                  <li>• Corporate affiliates and subsidiaries</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Data Security</h2>
                <p className="text-[#E2E8F0] text-lg">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized 
                  access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
                  storage is completely secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Your Rights</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Access and receive a copy of your personal information</li>
                  <li>• Correct inaccurate or incomplete personal information</li>
                  <li>• Delete your personal information</li>
                  <li>• Restrict or object to the processing of your personal information</li>
                  <li>• Withdraw your consent at any time</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Cookies and Tracking Technologies</h2>
                <p className="text-[#E2E8F0] text-lg">
                  We use cookies and similar tracking technologies to recognize you when you return to our services, 
                  remember your preferences, and improve your experience. You can control cookies through your browser settings, 
                  but disabling cookies may affect your ability to use certain features of our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Children's Privacy</h2>
                <p className="text-[#E2E8F0] text-lg">
                  Our services are not directed to children under 13, and we do not knowingly collect personal information 
                  from children under 13. If we become aware that we have collected personal information from a child 
                  under 13, we will take steps to delete such information.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Changes to This Policy</h2>
                <p className="text-[#E2E8F0] text-lg">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this 
                  Privacy Policy periodically for the latest information on our privacy practices.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
                <p className="text-[#E2E8F0] text-lg mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-[#0A0A0F] border border-[#64748B]/30 rounded-xl p-6">
                  <p className="text-[#E2E8F0] text-lg">
                    <strong>Email:</strong> privacy@luminapress.com
                  </p>
                  <p className="text-[#E2E8F0] text-lg mt-2">
                    <strong>Address:</strong> Privacy Officer, LuminaPress, 123 News Avenue, New York, NY 10001
                  </p>
                </div>
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