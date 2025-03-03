import AllProviders from "@/components/AllProviders";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home | Rin Portfolio",
  description: "Hello :) Welcome to my world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={workSans.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body
          className={workSans.className}
          style={{
            backgroundImage: `url("/images/background-img.png")`,
            backgroundSize: "170px 170px",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundColor: "#fffff0",
          }}
        >
          <AllProviders>
            <LayoutContainer>{children}</LayoutContainer>
          </AllProviders>
        </body>
      </html>
    </ViewTransitions>
  );
}
