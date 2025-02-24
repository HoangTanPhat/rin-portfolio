"use client";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "@/lib/emotion/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface AllProvidersProps {
  children: React.ReactNode;
}
export default function AllProviders({ children }: AllProvidersProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFBA00",
        contrastText: "#fff",
      },
      secondary: {
        main: "#02807D",
      },
    },
  });

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
