"use client";

import React, { useState, useEffect } from "react";
import { Badge, Row } from "@once-ui-system/core";

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Set initial state
    setIsOnline(navigator.onLine);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <Badge
      background="warning-weak"
      paddingX="12"
      paddingY="4"
      onBackground="warning-strong"
      textVariant="label-default-s"
      arrow={false}
      style={{
        position: "fixed",
        top: "16px",
        right: "16px",
        zIndex: 9999,
        animation: "pulse 2s infinite",
      }}
    >
      <Row paddingY="2">Offline Mode</Row>
    </Badge>
  );
}