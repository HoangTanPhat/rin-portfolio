"use client";

import React from "react";
import ImageWithText from "@/components/layout/ImageWithText";
import cospanProjects from '@/lib/images/projects-cospan.png';
import ngocNguuProjects from '@/lib/images/projects-ngoc-nguu.png';
import illustrationProjects from '@/lib/images/projects-illu.png';
import AnimateSection from '@/components/layout/AnimateSection';

export default function ProjectsSection({
    noTitle = false,
  }: {
    noTitle?: boolean
  }) {
  return (
    <AnimateSection id="projects">
        {!noTitle && <h2 className='text-xl md:text-2xl text-textSecondary my-8'>Projects</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full mb-3">
            <div className='relative aspect-square'>
                <ImageWithText src={cospanProjects} title="BRAND: COSPAN" href="#" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={ngocNguuProjects} title="BRAND: NGOC NGUU" href="/projects/ngoc-nguu" />
            </div>
            <div className='relative aspect-square'>
                <ImageWithText src={illustrationProjects} title="ILLUSTRATION" href="#" />
            </div>
        </div>
    </AnimateSection>
  );
}
