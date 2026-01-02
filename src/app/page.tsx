import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Calculator from "./components/home/calculator";
import Info from "./components/home/info";

// Global components
import AudioWelcome from "./components/AudioWelcome";

/* -------------------------------------
   METADATA — OPTIVANCE HR AFRICA
------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://optivancehr.africa"),

  title: {
    default: "Optivance HR Africa",
    template: "%s | Optivance HR Africa",
  },

  description:
    "Optivance HR Africa is an AI-powered workforce platform helping businesses hire, train, certify, and manage blue-collar workers — all through WhatsApp.",

  keywords: [
    "Optivance HR Africa",
    "blue collar recruitment Africa",
    "workforce management Africa",
    "HR platform Africa",
    "WhatsApp HR platform",
    "blue collar jobs Africa",
    "AI workforce platform",
    "staff recruitment and payroll",
    "worker training and certification",
    "HR compliance Africa",
  ],

  openGraph: {
    title: "Optivance HR Africa",
    description:
      "Hire, train, certify, and manage trusted blue-collar workers — powered by AI and delivered through WhatsApp.",
    url: "https://optivancehr.africa",
    siteName: "Optivance HR Africa",
    type: "website",
    images: [
      {
        url: "https://optivancehr.africa/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Optivance HR Africa — AI-Powered Workforce Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Optivance HR Africa",
    description:
      "The AI-powered workforce platform for hiring and managing blue-collar workers across Africa.",
    images: ["https://optivancehr.africa/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://optivancehr.africa",
  },
};

/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      <AudioWelcome />

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Calculator />
      <Info />
    </main>
  );
}
