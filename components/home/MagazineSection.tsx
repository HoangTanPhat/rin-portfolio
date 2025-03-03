"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import introvertMagazine from '@/lib/images/magazine-introvert.png';
import AnimateSection from "@/components/layout/AnimateSection";

export default function MagazineSection({
  noTitle = false,
}: {
  noTitle?: boolean
}) {
  return (
    <AnimateSection id="magazine">
        {!noTitle && <h2 className='text-xl md:text-2xl text-textSecondary my-8'>Magazine</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={introvertMagazine} title="MAGAZINE: INTROVERT" href="/magazine/introvert" />
            </div>
        </div>
    </AnimateSection>
  );
}
