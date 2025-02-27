"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";

import imgC11 from "@/lib/images/shooting-coop-mart/concept-1/c1-1.png";
import imgC12 from "@/lib/images/shooting-coop-mart/concept-1/c1-2.png";

import imgC21 from "@/lib/images/shooting-coop-mart/concept-2/c2-1.png";
import imgC22 from "@/lib/images/shooting-coop-mart/concept-2/c2-2.png";
import imgC23 from "@/lib/images/shooting-coop-mart/concept-2/c2-3.png";
import imgC24 from "@/lib/images/shooting-coop-mart/concept-2/c2-4.png";
import imgC25 from "@/lib/images/shooting-coop-mart/concept-2/c2-5.png";
import imgC26 from "@/lib/images/shooting-coop-mart/concept-2/c2-6.png";

import imgC31 from "@/lib/images/shooting-coop-mart/concept-3/c3-1.png";
import imgC32 from "@/lib/images/shooting-coop-mart/concept-3/c3-2.png";
import imgC33 from "@/lib/images/shooting-coop-mart/concept-3/c3-3.png";
import imgC34 from "@/lib/images/shooting-coop-mart/concept-3/c3-4.png";
import imgC35 from "@/lib/images/shooting-coop-mart/concept-3/c3-5.png";
import imgC36 from "@/lib/images/shooting-coop-mart/concept-3/c3-6.png";

import imgC41 from "@/lib/images/shooting-coop-mart/concept-4/c4-1.png";
import imgC42 from "@/lib/images/shooting-coop-mart/concept-4/c4-2.png";

export default function CoopMartShootingDetail({
  conceptNumber,
}: {
  conceptNumber: number;
}) {
  if (conceptNumber === 1) {
    return (
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        <div className="relative aspect-[500/419]">
          <ImageWithText src={imgC11} />
        </div>
        <div className="relative aspect-[500/419]">
          <ImageWithText src={imgC12} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 2) {
    return (
      <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative aspect-square">
          <ImageWithText src={imgC21} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={imgC22} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={imgC23} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={imgC24} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={imgC25} />
        </div>
        <div className="relative aspect-square">
          <ImageWithText src={imgC26} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 3) {
    return (
      <div className="grid grid-cols-2 gap-3 w-full mb-3">
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC31} />
        </div>
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC32} />
        </div>
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC33} />
        </div>
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC34} />
        </div>
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC35} />
        </div>
        <div className="relative aspect-[1000/749]">
          <ImageWithText src={imgC36} />
        </div>
      </div>
    );
  }

  if (conceptNumber === 4) {
    return (
      <div className="grid grid-cols-3 gap-3 w-full mb-3">
        <div className="relative col-span-2 aspect-[1000/667]">
          <ImageWithText src={imgC41} />
        </div>
        <div className="relative aspect-auto">
          <ImageWithText src={imgC42} />
        </div>
      </div>
    );
  }

  return null;
}
