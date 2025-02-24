"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import introvertMagazine from '@/lib/images/magazine-introvert.png';

export default function MagazineSection() {
  return (
    <section id="magazine" className="relative scroll-smooth">
        <h2 className='text-2xl text-textSecondary my-8'>Magazine</h2>
        <div className="grid grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={introvertMagazine} title="MAGAZINE: INTROVERT" href="#" />
            </div>
        </div>
    </section>
  );
}
