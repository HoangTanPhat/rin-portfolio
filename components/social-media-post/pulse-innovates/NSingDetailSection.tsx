"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

import img1 from "@/lib/images/social-media-post-pulse-innovates/7.png";
import img2 from "@/lib/images/social-media-post-pulse-innovates/8.png";

export default function NSingDetailSection() {
  return (
    <section id="social-media-post-nsing" className="relative scroll-smooth">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mb-3">
        <div className="relative aspect-[600/972]">
          <ImageWithText src={img1} />
        </div>
        <div className="relative aspect-[600/972]">
          <ImageWithText src={img2} />
        </div>
      </div>
    </section>
  );
}
