"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PX_PER_FRAME = 10;

export type Viewer360Props = {
  frames: string[];
  alt: string;
  dragLabel: string;
  className?: string;
};

export function Viewer360({ frames, alt, dragLabel, className = "" }: Viewer360Props) {
  const [index, setIndex] = useState(0);
  const frameCount = frames.length;
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const accumRef = useRef(0);

  const step = useCallback(
    (delta: number) => {
      setIndex((prev) => {
        const next = (prev + delta) % frameCount;
        return next < 0 ? next + frameCount : next;
      });
    },
    [frameCount],
  );

  useEffect(() => {
    frames.forEach((src) => {
      const preload = new window.Image();
      preload.src = src;
    });
  }, [frames]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    lastXRef.current = event.clientX;
    accumRef.current = 0;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || frameCount === 0) return;
    const dx = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    accumRef.current += dx;

    while (accumRef.current >= PX_PER_FRAME) {
      step(1);
      accumRef.current -= PX_PER_FRAME;
    }
    while (accumRef.current <= -PX_PER_FRAME) {
      step(-1);
      accumRef.current += PX_PER_FRAME;
    }
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  if (frameCount === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div
        className="relative aspect-[3/2] cursor-grab touch-none select-none overflow-hidden border border-gwm-line bg-gwm-panel active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onPointerCancel={stopDragging}
        role="img"
        aria-label={alt}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frames[index]}
          alt={alt}
          className="pointer-events-none h-full w-full select-none object-contain"
          draggable={false}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white/85">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M20 12a8 8 0 1 1-3-6.2" />
            <path d="M20 3v5h-5" />
          </svg>
          {dragLabel}
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={frameCount - 1}
        step={1}
        value={index}
        onChange={(event) => setIndex(Number(event.target.value))}
        aria-label={alt}
        className="mt-4 w-full accent-gwm-red"
      />
    </div>
  );
}
