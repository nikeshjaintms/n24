"use client";

import React, { useEffect, useRef, useState } from "react";

interface AutoPlayVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  priority?: boolean;
}

export function AutoPlayVideo({
  src,
  autoPlay = true,
  poster,
  priority = false,
  className = "",
  style,
  ...rest
}: AutoPlayVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Priority videos load immediately (isInView starts true)
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Priority videos load immediately without IntersectionObserver
    if (priority) {
      setIsInView(true);
      if (videoRef.current) {
        videoRef.current.muted = true;
        if (autoPlay) {
          videoRef.current.play().catch(() => {});
        }
      }
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    let observer: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (videoRef.current) {
              videoRef.current.muted = true;
              if (autoPlay) {
                videoRef.current.load();
                videoRef.current.play().catch(() => {});
              }
            }
            if (observer) {
              observer.disconnect();
              observer = null;
            }
          }
        });
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(el);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [priority, autoPlay]);

  // Ensure DOM element has muted property explicitly set for iOS Safari
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      if ((priority || isInView) && autoPlay) {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [priority, isInView, autoPlay]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} style={style}>
      {poster && (
        <img
          src={poster}
          alt=""
          className={`absolute inset-0 size-full object-cover z-0 transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      <video
        ref={videoRef}
        src={priority || isInView ? src : undefined}
        poster={poster}
        muted
        autoPlay={autoPlay}
        loop
        playsInline
        // @ts-ignore iOS WebKit playsInline support
        webkit-playsinline="true"
        preload={priority ? "metadata" : isInView ? "metadata" : "none"}
        onLoadedData={() => setIsLoaded(true)}
        onPlaying={() => setIsLoaded(true)}
        className={`size-full object-cover transition-opacity duration-500 ${
          isLoaded || !poster ? "opacity-100" : "opacity-90"
        }`}
        {...rest}
      />
    </div>
  );
}


