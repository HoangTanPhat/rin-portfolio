"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from '@mui/material/Skeleton';

export interface ImageWithTextProps {
  src: StaticImageData | string;
  title?: string;
  href?: string;
  description?: string;
}

export default function ImageWithText({
  src,
  title,
  href,
}: ImageWithTextProps) {
    const [loaded, setLoaded] = useState(false);

  if (!href) {
    return (
      <React.Fragment>
        <Image
        className="aspect-square rounded-md object-cover object-center"
        src={typeof src === "string" ? src : src.src}
        fill
        alt="Social media post item"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 45vw"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
            <Skeleton 
                className='bg-gray-300 rounded-md'
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
            />
        )}
      </React.Fragment>
    )
  } 

  return (
    <Link href={href} passHref title={title} aria-label={title}>
        {loaded && 
            <div className="absolute flex flex-col px-2 md:px-4 py-2 justify-end rounded-sm top-0 right-0 left-0 bottom-0 bg-gradient-to-b from-transparent from-60% to-stone-800 z-10">
                {title && <h3 className='text-white font-bold uppercase text-md md:text-lg leading-[1.2]'>{title}</h3>}
            </div>
        }
      <Image
        className="aspect-square rounded-sm"
        src={typeof src === "string" ? src : src.src}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 45vw"
        alt="Social media post item"
        onLoad={() => setLoaded(true)}
      />
      {!loaded && (
            <Skeleton 
                className='bg-gray-300 rounded-sm'
                variant="rectangular"
                width="100%"
                height="100%"
                animation="wave"
            />
        )}
    </Link>
  );
}
