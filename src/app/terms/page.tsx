"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge className="mb-6 bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 text-lg py-2 px-6">
          TERMS OF SERVICE
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#2563EB] to-[#8B5CF6] bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-2xl text-[#E2E8F0] max-w-3xl mx-auto leading-relaxed mb-10">
          Please read these terms carefully before using our services. By accessing or using LuminaPress, you agree to be bound by these terms.
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
                  <FileText className="h-8 w-8 text-[#2563EB] mr-3" />
                  Acceptance of Terms
                </h2>
                <p className="text-[#E2E8F0] text-lg mb-6">
                  Welcome to LuminaPress. These Terms of Service ("Terms") govern your access to and use of our website, 
                  applications, and services (collectively, the "Services"). By accessing or using our Services, you agree 
                  to be bound by these Terms and our Privacy Policy.
                </p>
                <p className="text-[#E2E8F0] text-lg">
                  If you do not agree to these Terms, you may not access or use our Services. We may update these Terms 
                  from time to time, and we will notify you of any material changes by posting the new Terms on this page 
                  and updating the "Last Updated" date.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Eligibility</h2>
                <p className="text-[#E2E8F0] text-lg">
                  You must be at least 13 years old to use our Services. By agreeing to these Terms, you represent and warrant 
                  that you meet this eligibility requirement. If you are using our Services on behalf of an organization, 
                  you represent and warrant that you have the authority to bind that organization to these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Account Registration</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  To access certain features of our Services, you may be required to create an account. You agree to:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Provide accurate, current, and complete information during registration</li>
                  <li>• Maintain and promptly update your account information</li>
                  <li>• Maintain the security of your password and accept responsibility for all activities under your account</li>
                  <li>• Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Use of Services</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  You agree not to:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Use the Services for any illegal or unauthorized purpose</li>
                  <li>• Interfere with or disrupt the Services or servers connected to the Services</li>
                  <li>• Attempt to gain unauthorized access to any portion of the Services</li>
                  <li>• Transmit any viruses, worms, defects, Trojan horses, or other malicious code</li>
                  <li>• Use any robot, spider, scraper, or other automated means to access the Services</li>
                  <li>• Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Services</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Intellectual Property</h2>
                <p className="text-[#E2E8F0] text-lg">
                  The Services and all content, features, and functionality are owned by LuminaPress or its licensors 
                  and are protected by United States and international copyright, trademark, patent, trade secret, and 
                  other intellectual property laws. You may not modify, copy, distribute, transmit, display, perform, 
                  reproduce, publish, license, create derivative works from, transfer, or sell any information, software, 
                  products, or services obtained from the Services without our prior written permission.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Subscriptions and Payments</h2>
                <p className="text-[#E2E8F0] text-lg mb-4">
                  Some of our Services require payment of fees. By purchasing a subscription, you agree to:
                </p>
                <ul className="text-[#E2E8F0] text-lg space-y-2 ml-6">
                  <li>• Pay all applicable fees for your subscription</li>
                  <li>• Provide accurate billing and payment information</li>
                  <li>• Authorize us to charge your payment method for subscription fees</li>
                  <li>• Accept that subscription fees may change with advance notice</li>
                </ul>
                <p className="text-[#E2E8F0] text-lg mt-4">
                  You may cancel your subscription at any time, but refunds are provided only in accordance with our refund policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Disclaimer of Warranties</h2>
                <p className="text-[#E2E8F0] text-lg">
                  Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. 
                  We disclaim all warranties, including but not limited to merchantability, fitness for a particular purpose, 
                  non-infringement, and availability. We do not warrant that the Services will be uninterrupted, timely, 
                  secure, or error-free.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Limitation of Liability</h2>
                <p className="text-[#E2E8F0] text-lg">
                  To the fullest extent permitted by law, LuminaPress shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly 
                  or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access 
                  to or use of or inability to access or use the Services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Indemnification</h2>
                <p className="text-[#E2E8F0] text-lg">
                  You agree to indemnify, defend, and hold harmless LuminaPress and its affiliates, officers, directors, 
                  employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including 
                  reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Services 
                  or your violation of these Terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-white">Termination</h2>
                <p className="text-[#E2E8F0] text-lg">
                  We may terminate or suspend your access to all or part of the Services, with or without cause, with or without notice, 
                  at any time. Upon termination, your right to use the Services will immediately cease. All provisions of these Terms 
                  which by their nature should survive termination shall survive termination, including, without limitation, ownership 
                  provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 text-white">Governing Law</h2>
                <p className="text-[#E2E8F0] text-lg">
                  These Terms shall be governed by and construed in accordance with the laws of the State of New York, 
                  without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms 
                  will be brought exclusively in the federal or state courts located in New York County, New York, 
                  and you hereby consent to the personal jurisdiction and venue therein.
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
            Print These Terms
          </Button>
        </div>
      </div>
    </div>
  );
}