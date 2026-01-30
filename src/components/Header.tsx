"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import * as styles from "./Header.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Case Studies" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/andrepilch",
    icon: (
      <svg
        className={styles.socialIcon}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/andrepilch",
    icon: (
      <svg
        className={styles.socialIcon}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const isActive = (linkHref: string) =>
    linkHref === "/" ? pathname === "/" : pathname.startsWith(linkHref);
  
  const headerClassName = `${styles.header} ${
    isHomepage && !scrolled ? styles.headerTransparent : styles.headerScrolled
  } ${scrolled ? styles.headerHidden : ""}`;

  return (
    <header className={headerClassName}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Logo - show on non-homepage or when scrolled on homepage */}
          <Link href="/" className={styles.logoLink}>
            <svg
              className={`${styles.logo} ${
                isHomepage ? styles.logoHidden : styles.logoVisible
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 58"
              fill="currentColor"
            >
              <path d="M9.515 36.987C4.201 36.987 0 41.273 0 47.163s4.202 10.174 9.515 10.174c3.007 0 4.902-1.484 6.097-2.472l-3.154.433c-.873.361-1.836.555-2.943.555-3.954 0-7.867-3.666-7.867-8.69 0-5.026 3.913-8.693 7.867-8.693 4.695 0 7.95 4.161 7.95 8.693v6.613l1.565 3.148v-9.761c0-5.89-4.202-10.176-9.515-10.176M32.828 36.987c-4.366 0-7.827 3.214-7.827 8.033v11.904l1.566-3.148v-8.55c0-4.078 2.841-6.756 6.261-6.756s6.26 2.678 6.26 6.756v8.55l1.566 3.148V45.02c0-4.819-3.46-8.033-7.826-8.033M72.532 27.805c-1.105 0-2.069-.196-2.942-.556l-3.153-.433c1.195.989 3.09 2.472 6.095 2.472 5.315 0 9.516-4.285 9.516-10.175s-4.2-10.175-9.516-10.175c-5.313 0-9.513 4.284-9.513 10.175v28.05c0 4.53-3.253 8.69-7.949 8.69-3.953 0-7.867-3.666-7.867-8.69 0-5.026 3.914-8.693 7.867-8.693 1.106 0 2.07.195 2.944.556l3.153.433c-1.195-.99-3.089-2.472-6.097-2.472-5.314 0-9.515 4.286-9.515 10.176s4.202 10.174 9.515 10.174 9.517-4.285 9.517-10.174V26.817h-.004v-7.704c0-4.53 3.254-8.691 7.95-8.691 3.955 0 7.868 3.666 7.868 8.691s-3.913 8.692-7.869 8.692M90.788 9.31l-1.565 3.146v16.378h1.565zM98.44 25.686l1.564 3.148V0L98.44 3.146zM116.129 10.55l3.151-1.652h-2.924c-5.684 0-9.968 4.036-9.968 9.968s4.284 9.968 9.968 9.968h2.925l-3.152-1.652c-4.815-.138-8.092-3.477-8.092-8.316-.001-4.84 3.276-8.179 8.092-8.316M132.172 8.898a8 8 0 0 0-3.233.656c-.987.436-1.903-.145-2.205-.43-.814-.767-.772-1.791-.772-1.791l-.029-4.187L124.347 0v7.333s-.181 2.157 1.647 3.315c.939.594 2.471.79 3.666.254a6.1 6.1 0 0 1 2.513-.522c3.419 0 6.26 2.677 6.26 6.755v11.698L140 25.685v-8.756c-.001-4.818-3.463-8.031-7.828-8.031" />
              <path d="M73.057 38.579c-2.86 2.25-2.454 4.745-2.5 5.445-.047.7 0 12.9 0 12.9l1.566-3.148V46.71c0-2.193.063-3.015.097-3.47.258-3.476 2.681-4.273 4.414-4.36l3.15-1.479H77.97c-2.554 0-4.006.465-4.915 1.179M90.615 55.854c-4.86 0-8.485-3.954-8.485-8.568 0-4.654 3.503-8.815 8.485-8.815a8.25 8.25 0 0 1 3.202.632c1.166.49 1.566 1.564 1.451 2.469-.147 1.162-1.038 1.68-1.038 1.68l-9.875 6.67 3.535-.398 7.121-4.843s1.623-.866 1.772-3.093c.113-1.747-.824-3.231-2.434-3.915-.51-.217-1.907-.685-3.734-.685-6.013 0-10.133 4.697-10.133 10.215 0 5.727 4.368 10.133 10.463 10.133a9.7 9.7 0 0 0 2.699-.379 9.7 9.7 0 0 0 3.147-1.576l-3.337-.008c-.885.311-1.84.48-2.839.48M90.006 35.683a2.555 2.555 0 0 0 2.552-2.553 2.555 2.555 0 0 0-2.553-2.553 2.556 2.556 0 0 0-2.552 2.553 2.556 2.556 0 0 0 2.552 2.553m0-3.71a1.16 1.16 0 0 1 0 2.316 1.16 1.16 0 0 1-1.16-1.158c0-.64.522-1.158 1.16-1.158" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          {!isHomepage && <div className={styles.desktopNav}>
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
          </div>}

          {/* Desktop CTA */}
          {!isHomepage && <div className={styles.desktopCta}>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="mailto:hello@andrepilch.com" className={styles.ctaButton}>
              Contact
            </a>
          </div>}
        </nav>
      </div>
    </header>
  );
}
