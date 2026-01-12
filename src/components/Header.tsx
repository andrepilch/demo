"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import * as styles from "./Header.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoBox}>AP</div>
            <span className={styles.logoText}>André Pilch</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive(link.href) ? styles.navLinkActive : ""
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className={styles.navLinkIndicator} />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className={styles.desktopCta}>
            <ThemeToggle />
            <a href="mailto:hello@andrepilch.com" className={styles.ctaButton}>
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${styles.mobileNavLink} ${
                    isActive(link.href) ? styles.mobileNavLinkActive : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: "0.5rem" }}>
                <ThemeToggle />
              </div>
              <a
                href="mailto:hello@andrepilch.com"
                className={styles.mobileCta}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
