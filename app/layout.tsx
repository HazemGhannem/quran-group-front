import type { Metadata, Viewport } from "next";
import { Aref_Ruqaa, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://thequrangroup.space";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display face. Only the weights actually used by headings (500/600/700) —
// 400 and every italic were being downloaded and never rendered.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["600", "700"],
  display: "swap",
});

// Arabic display face. Nothing renders it bold, and it is never the LCP
// element, so we ship one weight and keep it out of the preload budget.
const arefRuqaa = Aref_Ruqaa({
  subsets: ["arabic"],
  variable: "--font-aref-ruqaa",
  weight: ["400"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "The Quran Group",
    template: "%s | The Quran Group",
  },

  description:
    "Learn the Quran, Tajweed, Fiqh, and Arabic with qualified teachers.",

  applicationName: "The Quran Group",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "The Quran Group",
    description:
      "Learn the Quran, Tajweed, Fiqh, and Arabic with qualified teachers.",
    url: SITE_URL,
    siteName: "The Quran Group",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Quran Group",
    description:
      "Learn the Quran, Tajweed, Fiqh, and Arabic with qualified teachers.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f6f1" },
    { media: "(prefers-color-scheme: dark)", color: "#12201a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${cormorant.variable} ${arefRuqaa.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
