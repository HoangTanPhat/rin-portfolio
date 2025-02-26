"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import VideoPlayer from "@/components/layout/VideoPlayer";

import img1 from "@/lib/images/social-media-post-otb/1.png";
import img2 from "@/lib/images/social-media-post-otb/2.png";
import img3 from "@/lib/images/social-media-post-otb/3.png";
import img4 from "@/lib/images/social-media-post-otb/4.png";
import img5 from "@/lib/images/social-media-post-otb/5.png";
import img6 from "@/lib/images/social-media-post-otb/6.jpg";
import img7 from "@/lib/images/social-media-post-otb/7.png";

export default function OnTheBodyDetailSection() {
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
        <div className="relative aspect-square">
          <ImageWithText src={img4} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img5} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img6} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={img7} />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="8_ccrz4w"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740584711/8_q4mmu3.png"
            id="social-media-post-on-the-body-video-1"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="10_rnksso"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740584711/9_ofhigm.png"
            id="social-media-post-on-the-body-video-2"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="9_lbpcx4"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585069/10_dldrij.png"
            id="social-media-post-on-the-body-video-3"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="12_q0xecl"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585157/11_j6vctj.png"
            id="social-media-post-on-the-body-video-4"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="11_sfnwgh"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585193/12_ouvusd.png"
            id="social-media-post-on-the-body-video-5"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="13_uq6qlr"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585562/13_k6v8ha.png"
            id="social-media-post-on-the-body-video-6"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="14_djhji4"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585562/14_di6wxr.png"
            id="social-media-post-on-the-body-video-7"
          />
        </div>
        <div className="relative aspect-square">
          <VideoPlayer
            publicId="15_yz6snl"
            poster="https://res.cloudinary.com/djw6zuvia/image/upload/v1740585562/15_pywsx0.png"
            id="social-media-post-on-the-body-video-8"
          />
        </div>
      </div>
    </section>
  );
}
