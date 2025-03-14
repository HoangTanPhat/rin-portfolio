"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import img9 from "public/images/branding-xynio/9.png";
import img10 from "public/images/branding-xynio/10.png";
import img11 from "public/images/branding-xynio/11.png";

const images = Array.from(
  { length: 8 },
  (_, i) => `/images/branding-xynio/${i + 1}.png`,
);

export default function XynioBrandingSection() {
  return (
    <section id="xynio-branding-section">
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        {images.map((src, itemIndex) => {
          return (
            <div key={itemIndex} className="relative aspect-video">
              <ImageWithText src={src} />
            </div>
          );
        })}
      </div>
      <h2 className="py-5 text-md md:text-xl font-semibold text-center">
        NAME CARD
      </h2>
      <div className="relative">
        <ImageWithText src={img9} fullSize />
      </div>
      <h2 className="py-5 text-md md:text-xl font-semibold text-center">
        MOCKUP
      </h2>
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        <div className="relative">
              <ImageWithText src={img10} fullSize />
            </div>
            <div className="relative">
              <ImageWithText src={img11} fullSize />
            </div>
      </div>
    </section>
  );
}
