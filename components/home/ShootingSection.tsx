"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import coopMartShooting from '@/lib/images/shooting-coop-mart.jpg';
import ontheBodyShooting from '@/lib/images/shooting-otb.png';

export default function ShootingSection() {
  return (
    <section id="shooting" className="relative scroll-smooth">
        <h2 className='text-2xl text-textSecondary my-8'>Shooting</h2>
        <div className="grid grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={coopMartShooting} title="BRAND: CO.OPMART" href="#" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={ontheBodyShooting} title="BRAND: ON THE BODY" href="#" />
            </div>
        </div>
    </section>
  );
}
