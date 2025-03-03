"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const images = Array.from({ length: 6 }, (_, i) => `/images/website-dynamic-domain/${i + 1}.png`);

export default function DynamicDomainWebsiteSection() {
  return (
    <section id="xom-communication-website-section">
      <h2 className='uppercase text-md md:text-xl font-semibold text-center pb-10'>WEB DESIGN</h2>
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
