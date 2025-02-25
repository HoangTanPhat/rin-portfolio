"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import img1 from '@/lib/images/social-media-post-monte/1.png';
import img2 from '@/lib/images/social-media-post-monte/2.png';
import img3 from '@/lib/images/social-media-post-monte/3.png';
import img4 from '@/lib/images/social-media-post-monte/4.png';
import img5 from '@/lib/images/social-media-post-monte/5.png';

export default function MonteDetailSection() {
  return (
    <section id="social-media-post" className="relative scroll-smooth">
      <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative aspect-square">
          <ImageWithText src={img1} />
        </div>
        <div className="relative aspect-square">
        <ImageWithText src={img2} />
        </div>
        <div className="relative aspect-square">
        <ImageWithText src={img3} />
        </div>
        <div className="relative aspect-square ">
        <ImageWithText src={img4} />
        </div>
        <div className="relative aspect-square ">
        <ImageWithText src={img5} />
        </div>
      </div>
    </section>
  );
}
