import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { MainLayout } from "@/components/layout/main-layout";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ham News - World's Premier News Destination",
    template: "%s | Ham News"
  },
  description: "Stay informed with Ham News, your premier destination for breaking news, in-depth analysis, and exclusive coverage from around the globe.",
  keywords: ["ham news", "world news", "breaking news", "politics", "business", "technology", "environment", "international affairs"],
  authors: [{ name: "Ham News Team" }],
  creator: "Ham News",
  publisher: "Ham News",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ham-news.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ham-news.vercel.app",
    title: "Ham News - World's Premier News Destination",
    description: "Stay informed with Ham News, your premier destination for breaking news, in-depth analysis, and exclusive coverage from around the globe.",
    siteName: "Ham News",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ham News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ham News - World's Premier News Destination",
    description: "Stay informed with Ham News, your premier destination for breaking news, in-depth analysis, and exclusive coverage from around the globe.",
    images: ["/og-image.jpg"],
    creator: "@HamNews",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="LuminaPress" />
        <meta name="application-name" content="LuminaPress" />
        <meta name="msapplication-TileColor" content="#2563EB" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="LBIeQN0P9NmMDc52HgxtMo-SAhmjBB3REjrhiK6yb3k" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://ham-news.vercel.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainLayout>{children}</MainLayout>
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
