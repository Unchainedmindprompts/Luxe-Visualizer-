import type { Metadata } from "next";
import ArizonaContent from "./ArizonaContent";

export const metadata: Metadata = {
  title: "Escape the Heat | Northern Idaho Second Homes | INW Basecamp",
  description:
    "Phoenix Valley families are discovering Northern Idaho as their summer basecamp. Direct flights from Sky Harbor. Crystal lakes. Mountain trails. Call Shirin Abplanalp to find yours.",
  openGraph: {
    title: "Escape the Heat | Northern Idaho Second Homes | INW Basecamp",
    description:
      "Phoenix Valley families are discovering Northern Idaho as their summer basecamp. Direct flights from Sky Harbor. Crystal lakes. Mountain trails.",
    images: [{ url: "/images/bluff-panorama.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ArizonaPage() {
  return <ArizonaContent />;
}
