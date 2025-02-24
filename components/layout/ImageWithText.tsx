"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from '@mui/material/Skeleton';

export interface ImageWithTextProps {
  src: StaticImageData | string;
  title: string;
  href: string;
  description?: string;
}

export default function ImageWithText({
  src,
  title,
  href,
}: ImageWithTextProps) {
    const [loaded, setLoaded] = useState(false);

  return (
    <Link href={href} passHref title={title} aria-label={title}>
        {loaded && 
            <div className="absolute flex flex-col px-4 py-2 justify-end rounded-sm top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent from-70% to-stone-700 z-10">
                <h3 className='text-white font-bold uppercase text-lg'>{title}</h3>
            </div>
        }
      <Image
        className="aspect-square rounded-sm"
        src={typeof src === "string" ? src : src.src}
        fill
        alt="Social media post item"
        onLoadingComplete={() => setLoaded(true)}
      />
      {!loaded && (
            <Skeleton 
                className='bg-gray-500 rounded-sm'
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
            />
        )}
    </Link>
  );
}
