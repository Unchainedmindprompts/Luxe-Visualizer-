import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/layout/ConditionalLayout";
import { siteMetadata } from "@/lib/metadata";
import {
  generateLocalBusinessSchema,
  generateRealEstateAgentSchema,
  generateWebsiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Cormorant Garamond (display) + DM Sans (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateLocalBusinessSchema(),
              generateRealEstateAgentSchema(),
              generateWebsiteSchema(),
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-[#2C2C2C]">
        <ConditionalLayout>{children}</ConditionalLayout>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '543201385842303');
fbq('track', 'PageView');
            `.trim(),
          }}
        />
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}
