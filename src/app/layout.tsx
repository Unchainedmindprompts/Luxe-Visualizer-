import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zero Click Strategies",
    template: "%s | Zero Click Strategies",
  },
  description:
    "Zero Click Strategies helps CEOs and founders make their business legible to AI agents, wearables, and the next generation of search.",
  metadataBase: new URL("https://zeroclickstrategies.com"),
  openGraph: {
    type: "website",
    siteName: "Zero Click Strategies",
    title: "Zero Click Strategies",
    description:
      "Make your business legible to AI agents, wearables, and the next generation of search.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero Click Strategies",
    description:
      "Make your business legible to AI agents, wearables, and the next generation of search.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
