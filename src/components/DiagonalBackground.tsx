"use client";

import { useEffect, useState } from "react";
import * as styles from "./DiagonalBackground.css";

export function DiagonalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.diagonalBackground} aria-hidden="true">
      <div className={styles.diagonalShape} />
    </div>
  );
}
