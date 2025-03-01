"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import VideoPlayer from "@/components/layout/VideoPlayer";

import img1 from "@/lib/images/social-media-post-monte/1.png";
import img2 from "@/lib/images/social-media-post-monte/2.png";
import img3 from "@/lib/images/social-media-post-monte/3.png";
import img4 from "@/lib/images/social-media-post-monte/4.png";
import img5 from "@/lib/images/social-media-post-monte/5.png";

export default function MonteDetailSection() {
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
        <div className="relative aspect-square">
          <ImageWithText src={img4} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img5} />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="6_ropase"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740501224/6_w0rwxn.png"
            id="social-media-post-monte-video-1"
          />
        </div>
        <div className="relative aspect-square ">
          <VideoPlayer
            publicId="7_qtklvp"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740502824/7_vjujtq.png"
            id="social-media-post-monte-video-2"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="8_m1mgsb"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740503373/8_a5wjpe.png"
            id="social-media-post-monte-video-3"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="9_lmmbhp"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740503525/9_daosvh.png"
            id="social-media-post-monte-video-4"
          />
        </div>
      </div>
    </section>
  );
}
