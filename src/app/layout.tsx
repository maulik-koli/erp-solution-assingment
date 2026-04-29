import React from "react";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "@/style/globals.css";
import { cn } from "@/lib/utils";
import AppProvider from "@/provider";
import { Toaster } from "@ui/sonner";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3100";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Sterling Cloud ERP",
    template: "%s | Sterling Cloud",
  },
  description:
    "Manage vendors, procurement, purchase workflows, and business operations in Sterling Cloud ERP.",
  keywords: [
    "erp system",
    "vendor management",
    "purchase management",
    "procurement software",
    "sterling cloud",
  ],
  openGraph: {
    title: "Sterling Cloud ERP",
    description:
      "Manage vendors, procurement, purchase workflows, and business operations in Sterling Cloud ERP.",
    url: "/",
    siteName: "Sterling Cloud",
    type: "website",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Sterling Cloud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Cloud ERP",
    description:
      "Manage vendors, procurement, purchase workflows, and business operations in Sterling Cloud ERP.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className='h-full antialiased'
      suppressHydrationWarning
    >
      <body className={cn(inter.className, "min-h-full flex flex-col")}>
        <AppProvider>
          {children}
          <Toaster position="top-right" />
        </AppProvider>
      </body>
    </html>
  );
}
