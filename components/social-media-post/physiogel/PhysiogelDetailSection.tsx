"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

import img1 from "@/lib/images/social-media-post-physiogel/1.png";
import img2 from "@/lib/images/social-media-post-physiogel/2.png";
import img3 from "@/lib/images/social-media-post-physiogel/3.png";

export default function PhysiogelDetailSection() {
  return (
    <section id="social-media-post" className="relative scroll-smooth">
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
      </div>
    </section>
  );
}
