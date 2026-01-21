"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FixedLogo() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Only show the big triangle logo on homepage
  if (!isHomepage) {
    return null;
  }

  return (
    <Link
      href="/"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        transition: "opacity 0.2s",
      }}
    >
      <img
        src="/ap_logo.svg"
        alt="André Pilch logo"
        style={{ height: "120px", width: "auto", display: "block" }}
      />
    </Link>
  );
}
