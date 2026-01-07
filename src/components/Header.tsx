"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="px-8 py-4 border-b border-neutral-200 dark:border-neutral-800 flex justify-end items-center max-w-5xl mx-auto w-full">
      <nav className="flex gap-6">
        <Link
          href="/"
          className={pathname === "/" ? "text-sky-500" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? "text-sky-500" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}
        >
          About
        </Link>
        <Link
          href="/work"
          className={pathname.startsWith("/work") ? "text-sky-500" : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"}
        >
          Work
        </Link>
      </nav>
    </header>
  );
}
