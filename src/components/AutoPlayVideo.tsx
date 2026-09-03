"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AutoPlayVideoProps {
  src: string;
  poster?: string;
  /** Load & play immediately (above-the-fold). Without this, the video lazy-loads. */
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AutoPlayVideo
 *
 * – priority=true  → src assigned immediately; works on iOS Safari + Chrome
 * – priority=false → lazy: src only assigned once element is near viewport
 *
 * CRITICAL iOS notes:
 *  1. `muted` must be set as a DOM *property* (videoEl.muted = true), not just
 *     the React prop, because Safari ignores the attribute for autoplay gating.
 *  2. The video element itself is always rendered (never conditionally removed)
 *     so Safari does not lose its media session context between renders.
 *  3. We use a next/image `<Image>` poster layer on top (z-index) and fade it out once
 *     the video fires `canplay`, hiding Safari's native black placeholder frame.
 *  4. preload="auto" for priority videos tells Safari to load enough data to
 *     start playing without a user gesture (combined with muted).
 */
export function AutoPlayVideo({
  src,
  poster,
  priority = false,
  className = "",
  style,
}: AutoPlayVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcReady, setSrcReady] = useState(priority); // true → attach src to <video>
  const [videoReady, setVideoReady] = useState(false); // true → hide poster overlay

  /* ── 1. Priority: kick off immediately after mount ────────────── */
  useEffect(() => {
    if (!priority) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // DOM property – required by iOS for autoplay
    v.load();
    v.play().catch(() => {});
  }, [priority]);

  /* ── 2. Lazy: IntersectionObserver, disconnect after first load ─ */
  useEffect(() => {
    if (priority) return; // skip for priority videos
    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSrcReady(true);
        } else {
          setSrcReady(false);
          setVideoReady(false);
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [priority]);

  /* ── 3. Once srcReady + src assigned, ensure muted & play ───── */
  useEffect(() => {
    if (!srcReady) return;
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.load();
    v.play().catch(() => {});
  }, [srcReady]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`} style={style}>
      {/* ── Video element (always present in DOM) ── */}
      <video
        ref={videoRef}
        src={srcReady ? src : undefined}
        muted /* HTML attribute (for SSR / hydration) */
        autoPlay
        loop
        playsInline
        preload={priority ? "metadata" : "none"}
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Poster overlay: sits on top until video is ready ── */}
      {poster && (
        <Image
          src={poster}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority={priority}
          className={[
            "object-cover pointer-events-none transition-opacity duration-700",
            videoReady ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />
      )}
    </div>
  );
}
