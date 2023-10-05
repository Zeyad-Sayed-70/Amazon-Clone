"use client";

import React from "react";
import { theme } from "@/style/theme";
import { ThemeProvider } from "styled-components";

// config i18n
// import "../i18n/config";

export default function Globe({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
