"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as styles from "./AnimatedLogo.css";

interface AnimatedLogoProps {
  size?: number;
  href?: string;
}

// SVG path definitions for the triangle
// Sharp corners: M 0 121 L 190 0 L 0 0 Z
// Rounded corners uses quadratic bezier curves (Q) at each corner
const SHARP_PATH = "M 0 121 L 190 0 L 0 0 Z";
const ROUNDED_PATH = "M 0 96 Q 0 121 20 108 L 160 18 Q 190 0 160 0 L 30 0 Q 0 0 0 30 Z";

// Hypotenuse line paths (matching the diagonal edge)
const SHARP_HYPOTENUSE = "M 0 121 L 190 0";
const ROUNDED_HYPOTENUSE = "M 20 108 Q 95 55 160 18";

export function AnimatedLogo({ size = 120, href = "/" }: AnimatedLogoProps) {
  const [isRounded, setIsRounded] = useState(false); // false = sharp, true = rounded
  const [fillOpacity, setFillOpacity] = useState(0); // 0 = outline only, 1 = fully filled
  const [outlineDrawn, setOutlineDrawn] = useState(false);

  // Start corner animation cycle and mark outline as drawn
  useEffect(() => {
    // Mark outline as drawn after initial animation
    const outlineTimer = setTimeout(() => {
      setOutlineDrawn(true);
    }, 1500);

    // Pulse between sharp and rounded corners very slowly
    const roundingInterval = setInterval(() => {
      setIsRounded((prev) => !prev);
    }, 8000);

    return () => {
      clearTimeout(outlineTimer);
      clearInterval(roundingInterval);
    };
  }, []);

  // Handle scroll-based fill animation
  useEffect(() => {
    const handleScroll = () => {
      // Fill completes within the first 300px of scroll
      const scrollThreshold = 300;
      const scrollY = window.scrollY;
      const newFillOpacity = Math.min(1, scrollY / scrollThreshold);
      setFillOpacity(newFillOpacity);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scale based on size (base is 121px height)
  const scale = size / 121;
  const containerStyle = {
    width: `${190 * scale}px`,
    height: `${121 * scale}px`,
  };

  // Get current path based on rounding state
  const currentPath = isRounded ? ROUNDED_PATH : SHARP_PATH;
  const currentHypotenuse = isRounded ? ROUNDED_HYPOTENUSE : SHARP_HYPOTENUSE;

  const svgClassNames = [
    styles.triangleSvg,
    styles.triangleGrowAnimation,
  ].join(" ");

  const content = (
    <div
      className={styles.logoContainer}
      style={containerStyle}
    >
      {/* SVG Triangle with animated rounded corners */}
      <svg
        className={svgClassNames}
        viewBox="0 0 190 121"
        preserveAspectRatio="xMinYMin meet"
      >
        <defs>
          {/* Animated gradient for fill */}
          <linearGradient
            id="triangleGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              className={styles.gradientStop1}
              stopColor="#00aeef"
            />
            <stop
              offset="50%"
              className={styles.gradientStop2}
              stopColor="#00d4ff"
            />
            <stop
              offset="100%"
              className={styles.gradientStop3}
              stopColor="#0088cc"
            />
          </linearGradient>
        </defs>

        {/* Main triangle fill - opacity controlled by scroll */}
        <path
          className={styles.trianglePath}
          d={currentPath}
          fill="url(#triangleGradient)"
          style={{
            d: `path("${currentPath}")`,
            opacity: fillOpacity,
            transition: "opacity 0.15s ease-out",
          } as React.CSSProperties}
        />

        {/* Triangle outline - always visible, draws on load */}
        <path
          className={`${styles.triangleOutline} ${outlineDrawn ? styles.outlineDrawn : ""}`}
          d={currentPath}
          style={
            { d: `path("${currentPath}")` } as React.CSSProperties
          }
        />

        {/* Hypotenuse highlight line */}
        <path
          className={styles.hypotenuseLine}
          d={currentHypotenuse}
          style={
            {
              d: `path("${currentHypotenuse}")`,
            } as React.CSSProperties
          }
        />
      </svg>

      {/* Edge glow effect on hover */}
      <svg
        className={styles.edgeGlow}
        viewBox="0 0 190 121"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          className={styles.edgePath}
          d={currentPath}
          style={
            { d: `path("${currentPath}")` } as React.CSSProperties
          }
        />
      </svg>

      {/* Logo text SVG overlay */}
      <svg
        className={styles.logoText}
        viewBox="0 0 253 161"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          fill="currentColor"
          d="M26.428 50.223c-4.707 0-8.428 3.734-8.428 8.865 0 5.13 3.721 8.863 8.428 8.863 2.663 0 4.341-1.292 5.4-2.153l-2.794.377c-.773.315-1.626.484-2.606.484-3.502 0-6.969-3.194-6.969-7.571 0-4.379 3.467-7.573 6.969-7.573 4.158 0 7.041 3.625 7.041 7.573v5.761l1.386 2.743v-8.504c0-5.131-3.722-8.865-8.427-8.865M47.077 50.223c-3.868 0-6.933 2.8-6.933 6.998v10.371l1.387-2.743V57.4c0-3.552 2.516-5.885 5.546-5.885 3.028 0 5.544 2.333 5.544 5.886v7.448l1.387 2.743v-10.37c0-4.199-3.065-6.999-6.931-6.999M82.243 42.223c-.98 0-1.833-.17-2.606-.484l-2.793-.377c1.058.861 2.736 2.153 5.399 2.153 4.707 0 8.428-3.732 8.428-8.863 0-5.133-3.72-8.865-8.428-8.865-4.706 0-8.426 3.732-8.426 8.865v24.436c0 3.946-2.882 7.571-7.04 7.571-3.502 0-6.969-3.194-6.969-7.571 0-4.379 3.467-7.573 6.968-7.573.98 0 1.833.17 2.608.484l2.793.378c-1.059-.862-2.736-2.154-5.4-2.154-4.707 0-8.428 3.734-8.428 8.865s3.721 8.863 8.427 8.863c4.707 0 8.43-3.732 8.43-8.863V41.363h-.004v-6.711c0-3.948 2.882-7.572 7.041-7.572 3.503 0 6.97 3.194 6.97 7.572s-3.467 7.571-6.97 7.571M98.412 26.112l-1.386 2.74V43.12h1.386zM105.189 40.377l1.386 2.743V18l-1.386 2.741zM120.857 27.191l2.791-1.439h-2.589c-5.035 0-8.829 3.516-8.829 8.684s3.794 8.684 8.829 8.684h2.59l-2.792-1.44c-4.265-.12-7.167-3.028-7.167-7.244-.001-4.216 2.902-7.125 7.167-7.245M135.067 25.752a7.2 7.2 0 0 0-2.863.572c-.875.38-1.686-.127-1.954-.376-.721-.668-.684-1.56-.684-1.56l-.025-3.648-1.405-2.74v6.388s-.16 1.88 1.458 2.889c.832.517 2.189.688 3.248.22a5.5 5.5 0 0 1 2.225-.454c3.029 0 5.545 2.333 5.545 5.885V43.12L142 40.377v-7.629c-.001-4.197-3.067-6.996-6.933-6.996"
        />
        <path
          fill="currentColor"
          d="M82.707 51.61c-2.533 1.96-2.173 4.134-2.214 4.743-.041.61 0 11.24 0 11.24l1.387-2.743v-6.157c0-1.911.056-2.627.086-3.024.229-3.028 2.375-3.722 3.91-3.797l2.79-1.29H87.06c-2.262.001-3.548.405-4.353 1.028M98.26 66.66a7.457 7.457 0 0 1-7.516-7.465c0-4.054 3.102-7.68 7.515-7.68 1.015 0 1.973.195 2.836.551 1.032.426 1.387 1.363 1.285 2.151-.13 1.012-.919 1.464-.919 1.464l-8.747 5.812 3.131-.348 6.308-4.22s1.437-.753 1.569-2.693c.101-1.523-.73-2.816-2.156-3.412-.452-.189-1.689-.596-3.307-.596-5.326 0-8.975 4.092-8.975 8.9 0 4.988 3.869 8.827 9.267 8.827a8.667 8.667 0 0 0 5.178-1.704l-2.955-.006c-.784.27-1.63.418-2.515.418M97.72 49.087c1.247 0 2.26-.998 2.26-2.224s-1.013-2.224-2.26-2.224-2.262.998-2.262 2.224 1.015 2.224 2.261 2.224m0-3.233c.565 0 1.025.452 1.025 1.01 0 .556-.46 1.009-1.026 1.009a1.02 1.02 0 0 1-1.026-1.01c0-.557.461-1.009 1.026-1.009"
        />
      </svg>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        style={{
          display: "block",
          textDecoration: "none",
        }}
      >
        {content}
      </Link>
    );
  }

  return content;
}
