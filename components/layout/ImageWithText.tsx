"use client";

// import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from '@mui/material/Skeleton';
import { Dialog } from '@mui/material';
import closeIcon from 'public/icons/close-white.png';
import { Link } from 'next-view-transitions'

export interface ImageWithTextProps {
  src: StaticImageData | string;
  title?: string;
  href?: string;
  description?: string;
  fullSize?: boolean
}

export default function ImageWithText({
  src,
  title,
  href,
  fullSize
}: ImageWithTextProps) {
    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);

  if (!href) {
    return (
      <React.Fragment>
        <Image
        className={`${!fullSize ? 'aspect-square object-cover object-center' : 'w-full h-auto'} rounded-md cursor-pointer ${!loaded ? 'pointer-events-none' : ''}`}
        src={typeof src === "string" ? src : src.src}
        fill={!fullSize}
        alt="Social media post item"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 45vw"
        onLoad={() => setLoaded(true)}
        onClick={() => setOpen(true)}
        width={fullSize ? 0 : undefined}
        height={fullSize ? 0 : undefined}
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
        <Dialog
        fullScreen
        open={open && loaded}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { style: { backgroundColor: 'black' }  }}}
      >
        <div className="h-screen w-screen p-4 relative">
          <div className="relative w-full h-full max-w-screen max-h-screen flex justify-center items-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white w-[20px] h-[20px cursor-pointer"
            aria-label="Close"
        >
          <Image src={closeIcon} width={20} height={20} alt='white close icon' />
        </button>
            <Image
              src={src}
              alt="Full Image"
              layout="intrinsic"
              width={1920} 
              height={1080}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </Dialog>
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
