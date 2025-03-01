"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import dynamicDomainWebsite from '@/lib/images/website-dynamic-domain.png';
import xomMediaWebsite from '@/lib/images/website-xom-media.png';

export default function WebsiteSection() {
  return (
    <section id="website" className="relative scroll-smooth">
        <h2 className='text-xl md:text-2xl text-textSecondary my-8'>Website</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={dynamicDomainWebsite} title="BRAND: DYNAMIC DOMAIN" href="#" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={xomMediaWebsite} title="BRAND: XOM COMMUNICATION" href="#" />
            </div>
        </div>
    </section>
  );
}
