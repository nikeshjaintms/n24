"use client";

import { useEffect, useRef, useState } from "react";

interface AutoPlayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export function AutoPlayVideo({
  src,
  autoPlay = true,
  poster,
  className = "",
  style,
  ...rest
}: AutoPlayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to delay video loading until near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current && autoPlay) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlay]);

  useEffect(() => {
    if (isInView && videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {});
    }
  }, [isInView, autoPlay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      {poster && !isLoaded && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 size-full object-cover z-0 transition-opacity duration-500"
          loading="lazy"
        />
      )}
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        // @ts-ignore
        webkit-playsinline="true"
        preload={isInView ? "metadata" : "none"}
        onLoadedData={() => setIsLoaded(true)}
        className={`size-full object-cover transition-opacity duration-500 ${
          isLoaded || !poster ? "opacity-100" : "opacity-0"
        }`}
        {...rest}
      />
    </div>
  );
}

