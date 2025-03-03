"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const images = Array.from({ length: 10 }, (_, i) => `/images/magazine-introvert/${i + 1}.png`);

export default function IntrovertMagazineSection() {
  return (
    <section id="introvert-magazine-section">
      <div className="flex flex-col gap-3 w-full mb-3">
        {
            images.map((src, itemIndex) => {
                return (
                    <div key={itemIndex} className="relative w-full">
                      <ImageWithText src={src} fullSize={true} />
                  </div>
                )
            })
        }
      </div>
    </section>
  );
}
