import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FixedLogo } from "@/components/FixedLogo";
import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/global.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | André Pilch",
    default: "André Pilch | Senior Product Designer & Frontend Engineer",
  },
  description:
    "I bridge the gap between product vision and engineering reality. 14 years designing and building innovative mobile & web products.",
  keywords: [
    "Product Designer",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "UX Design",
    "Design Systems",
    "Wisconsin",
  ],
  authors: [{ name: "André Pilch" }],
  creator: "André Pilch",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrepilch.com",
    siteName: "André Pilch",
    title: "André Pilch | Senior Product Designer & Frontend Engineer",
    description:
      "I bridge the gap between product vision and engineering reality. 14 years designing and building innovative mobile & web products.",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "André Pilch - Senior Product Designer & Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "André Pilch | Senior Product Designer & Frontend Engineer",
    description:
      "I bridge the gap between product vision and engineering reality. 14 years designing and building innovative mobile & web products.",
    images: ["/images/og/home.jpg"],
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
    <html lang="en" className={figtree.variable}>
      <body className={figtree.className}>
        <ThemeProvider defaultTheme="light">
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <FixedLogo />
        </ThemeProvider>
      </body>
    </html>
  );
}
