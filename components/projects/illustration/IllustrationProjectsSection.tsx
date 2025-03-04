"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const images = Array.from(
  { length: 4 },
  (_, i) => `/images/projects-illustration/${i + 1}.png`,
);

export default function IllustrationProjectsSection() {
  return (
    <section id="illustration-projects-section">
      <div className="w-full mb-3 relative">
        <ImageWithText src={images[0]} fullSize={true} />
      </div>
      <div className="py-5 px-3 md:px-10 lg:px-40 h-[300px] md:h-[400px] bg-[#eea820] rounded-md mb-3 flex flex-col align-middle justify-center">
        <p className="text-md md:text-xl text-center font-semibold">
          ABOUT PROJECT
        </p>
        <p className="text-md md:text-xl text-center">
        Each painting represents a different emotion, inspired by literary quotes and transformed into vibrant, expressive artworks. (This is a non-commercial student project.)
        </p>
        <div className="py-3 md:py-5">
        <p className="text-md md:text-xl text-center"><span className='font-semibold'>Idea: </span>Nguyen Trong Lai</p>
      </div>
       <div className="py-3 md:py-5">
       <p className="text-md md:text-xl text-center"><span className='font-semibold'>Designer: </span>Nguyen Trong Lai</p>
     </div>
      </div>
      <div className="flex flex-col gap-3 w-full mb-3">
        {images.filter((_, index) => index > 0).map((src, itemIndex) => {
          return (
            <div key={itemIndex} className="relative w-full">
              <ImageWithText src={src} fullSize={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
