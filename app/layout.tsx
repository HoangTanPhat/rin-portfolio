import AllProviders from "@/components/AllProviders";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { Work_Sans } from "next/font/google";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import Script from 'next/script'

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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID; // Replace with your GTM ID or use process.env.NEXT_PUBLIC_GTM_ID

  return (
    <ViewTransitions>
      <html lang="en" className={workSans.className}>
        <head>
          <Script id='gtm-script' strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        </head>
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
         <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
          <AllProviders>
            <LayoutContainer>{children}</LayoutContainer>
          </AllProviders>
        </body>
      </html>
    </ViewTransitions>
  );
}
