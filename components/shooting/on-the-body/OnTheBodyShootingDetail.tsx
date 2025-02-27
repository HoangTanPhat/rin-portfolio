"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

import imgC11 from "@/lib/images/shooting-on-the-body/concept-1/c1-1.png";
import imgC12 from "@/lib/images/shooting-on-the-body/concept-1/c1-2.png";
import imgC13 from "@/lib/images/shooting-on-the-body/concept-1/c1-3.png";
import imgC14 from "@/lib/images/shooting-on-the-body/concept-1/c1-4.png";

import imgC21 from "@/lib/images/shooting-on-the-body/concept-2/c2-1.png";
import imgC22 from "@/lib/images/shooting-on-the-body/concept-2/c2-2.png";
import imgC23 from "@/lib/images/shooting-on-the-body/concept-2/c2-3.png";
import imgC24 from "@/lib/images/shooting-on-the-body/concept-2/c2-4.png";

import imgC31 from "@/lib/images/shooting-on-the-body/concept-3/c3-1.png";
import imgC32 from "@/lib/images/shooting-on-the-body/concept-3/c3-2.png";
import imgC33 from "@/lib/images/shooting-on-the-body/concept-3/c3-3.png";
import imgC34 from "@/lib/images/shooting-on-the-body/concept-3/c3-4.png";

import imgC41 from "@/lib/images/shooting-on-the-body/concept-4/c4-1.png";
import imgC42 from "@/lib/images/shooting-on-the-body/concept-4/c4-2.png";
import imgC43 from "@/lib/images/shooting-on-the-body/concept-4/c4-3.png";
import imgC44 from "@/lib/images/shooting-on-the-body/concept-4/c4-4.png";

export default function OnTheBodyShootingDetail({
  conceptNumber,
}: {
  conceptNumber: number;
}) {
  if (conceptNumber === 1) {
    return (
      <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative col-span-3 aspect-[73/49]">
          <ImageWithText src={imgC11} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC12} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC13} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC14} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 2) {
    return (
        <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative col-span-3 aspect-[73/49]">
          <ImageWithText src={imgC21} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC22} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC23} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC24} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 3) {
    return (
        <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative col-span-3 aspect-[73/49]">
          <ImageWithText src={imgC31} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC32} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC33} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC34} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 4) {
    return (
        <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative col-span-3 aspect-[73/49]">
          <ImageWithText src={imgC41} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC42} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC43} />
        </div>
        <div className="relative aspect-[125/178]">
          <ImageWithText src={imgC44} />
        </div>
      </div>
    );
  }

  return null;
}
