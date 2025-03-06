"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

const imagesLogo = Array.from(
  { length: 6 },
  (_, i) => `/images/projects-cospan/logo/${i + 1}.png`,
);
const imagesStationery = Array.from(
  { length: 10 },
  (_, i) => `/images/projects-cospan/stationery/${i + 1}.png`,
);
const imagesProduct = Array.from(
  { length: 4 },
  (_, i) => `/images/projects-cospan/product/${i + 1}.png`,
);
const imagesPoster = Array.from(
  { length: 6 },
  (_, i) => `/images/projects-cospan/poster/${i + 1}.png`,
);

export default function CospanProjectsSection() {
  return (
    <section id="cospan-projects-section">
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
        POSTERS
      </h2>
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        {imagesPoster.map((src, itemIndex) => {
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
