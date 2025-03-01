"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

import img1 from "@/lib/images/social-media-post-pulse-innovates/1.png";
import img2 from "@/lib/images/social-media-post-pulse-innovates/2.png";
import img3 from "@/lib/images/social-media-post-pulse-innovates/3.png";
import img4 from "@/lib/images/social-media-post-pulse-innovates/4.png";
import img5 from "@/lib/images/social-media-post-pulse-innovates/5.png";
import img6 from "@/lib/images/social-media-post-pulse-innovates/6.png";

export default function PulseViralDetailSection() {
  return (
    <section id="social-media-post-pulse-viral" className="relative scroll-smooth">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
        <div className="relative aspect-square">
          <ImageWithText src={img1} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img2} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img3} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img4} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img5} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img6} />
        </div>
      </div>
    </section>
  );
}
