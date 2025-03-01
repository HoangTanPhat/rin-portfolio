"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import monteSocialMedia from '@/lib/images/brand-monte-social-post.png';
import onTheBodyMedia from '@/lib/images/brand-on-the-body.png';
import tgbMedia from '@/lib/images/brand-tgb.png';
import physiogelMedia from '@/lib/images/brand-physiogel.png';
import pulseInnovatesMedia from '@/lib/images/brand-pulse-innovates.png';

export default function SocialMediaSection() {
  return (
    <section id="social-media-post" className="relative scroll-smooth">
        <h2 className='text-xl md:text-2xl text-textSecondary my-4 md:my-8'>Social Media Post</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={monteSocialMedia} title="BRAND: MONTE" href="/social-media-post/monte" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={onTheBodyMedia} title="BRAND: ON THE BODY" href="/social-media-post/on-the-body" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={tgbMedia} title="BRAND: TIGER BALM" href="/social-media-post/tiger-balm" />
            </div>
            <div className='relative aspect-square '>
                <ImageWithText src={physiogelMedia} title="BRAND: PHYSIOGEL" href="/social-media-post/physiogel" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={pulseInnovatesMedia} title="BRAND: PULSE INNOVATES" href="/social-media-post/pulse-innovates" />
            </div>
        </div>
    </section>
  );
}
