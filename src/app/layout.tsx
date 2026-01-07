import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const didactGothic = Didact_Gothic({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "André Pilch",
  description: "Senior Product Designer & Front-end Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${didactGothic.className} min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}
      >
        <Header />
        <main className="flex-1 px-8 py-8 max-w-5xl mx-auto w-full">
          {children}
        </main>
        <Footer />
        <Link href="/" className="fixed bottom-0 right-0">
          <Image
            src="/logo.svg"
            alt="André Pilch logo"
            width={156}
            height={69}
          />
        </Link>
      </body>
    </html>
  );
}
