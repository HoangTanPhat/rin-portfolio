"use client";

import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export interface VideoPlayerProps {
  publicId: string;
  id?: string;
  poster?: string;
  description?: string;
}

export default function VideoPlayer({
  publicId,
  id,
  poster,
}: VideoPlayerProps) {
  const [loaded, setLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Cleanup on unmount
  }, []);

  return (
    <div className='relative'>
        {isMounted && <CldVideoPlayer
          width="1080"
          height="1080"
          src={publicId}
          id={`video-${id}`}
          logo={false}
          poster={poster}
          hideContextMenu={true}
          onDataLoad={() => setLoaded(true)}
          className="rounded-md video-clip-path"
        />}

      {!loaded && (
        <Skeleton
          className="bg-gray-300 rounded-md absolute top-0 right-0 left-0 bottom-0"
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
    </div>
  );
}
