"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const imagesLogo = Array.from(
  { length: 8 },
  (_, i) => `/images/projects-ngoc-nguu/logo/${i + 1}.png`,
);
const imagesStationery = Array.from(
  { length: 6 },
  (_, i) => `/images/projects-ngoc-nguu/stationery/${i + 1}.png`,
);
const imagesProduct = Array.from(
  { length: 4 },
  (_, i) => `/images/projects-ngoc-nguu/product/${i + 1}.png`,
);

import brochure from "public/images/projects-ngoc-nguu/brochure.png";
import poster from "public/images/projects-ngoc-nguu/poster.png";

export default function NgocNguuProjectsSection() {
  return (
    <section id="ngoc-nguu-projects-section">
      <h2 className="uppercase text-md md:text-xl font-semibold text-center py-5">
        LOGO GUIDELINES
      </h2>
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        {imagesLogo.map((src, itemIndex) => {
          return (
            <div key={itemIndex} className="relative w-full">
              <ImageWithText src={src} fullSize={true} />
            </div>
          );
        })}
      </div>
      <h2 className="uppercase text-md md:text-xl font-semibold text-center py-5">
        STATIONERY
      </h2>
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        {imagesStationery.map((src, itemIndex) => {
          return (
            <div key={itemIndex} className="relative w-full">
              <ImageWithText src={src} fullSize={true} />
            </div>
          );
        })}
      </div>
      <h2 className="uppercase text-md md:text-xl font-semibold text-center py-5">
        PRODUCTS
      </h2>
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        {imagesProduct.map((src, itemIndex) => {
          return (
            <div key={itemIndex} className="relative w-full">
              <ImageWithText src={src} fullSize={true} />
            </div>
          );
        })}
      </div>
      <h2 className="uppercase text-md md:text-xl font-semibold text-center py-5">
        BROCHURE
      </h2>
      <div className="w-full mb-3 relative">
        <ImageWithText src={brochure} fullSize={true} />
      </div>
      <h2 className="uppercase text-md md:text-xl font-semibold text-center py-5">
        POSTER
      </h2>
      <div className="w-full mb-3 relative">
        <ImageWithText src={poster} fullSize={true} />
      </div>
    </section>
  );
}
