"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const images = Array.from({ length: 9 }, (_, i) => `/images/branding-dang-khoi-travel/${i + 1}.png`);

export default function DangKhoiTravelBrandingSection() {
  return (
    <section id="pulse-innovates-branding-section">
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        <div className="relative col-span-2 aspect-video">
          <ImageWithText src={images[0]} />
        </div>
        {
            images.filter((_, index) => index > 0).map((src, itemIndex) => {
                return (
                    <div key={itemIndex} className="relative aspect-video">
                    <ImageWithText src={src} />
                  </div>
                )
            })
        }
      </div>
    </section>
  );
}
