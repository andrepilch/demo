"use client";

import { usePathname } from "next/navigation";
import { AnimatedLogo } from "./AnimatedLogo";

export function FixedLogo() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Only show the big triangle logo on homepage
  if (!isHomepage) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <AnimatedLogo size={120} href="/" />
    </div>
  );
}
