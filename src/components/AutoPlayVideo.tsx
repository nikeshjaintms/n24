"use client";

import { useEffect, useRef } from "react";

interface AutoPlayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export function AutoPlayVideo(props: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Extract autoPlay so it's NOT rendered into the initial HTML.
  // This prevents iOS Safari from halting the page load to buffer video data.
  const { autoPlay, ...rest } = props;

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch((e) => {
        console.warn("AutoPlayVideo play failed:", e);
      });
    }
  }, [autoPlay]);

  return (
    <video
      ref={videoRef}
      {...rest}
    />
  );
}
