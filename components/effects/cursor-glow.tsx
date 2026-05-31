"use client";
/* eslint-disable @next/next/no-inline-styles */

import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    setEnabled(true);
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (!enabled || !glowRef.current) return
    glowRef.current.style.left = `${position.x}px`
    glowRef.current.style.top = `${position.y}px`
  }, [position, enabled])

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-inline-styles */}
      <div
        ref={glowRef}
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-transform duration-75 cursor-glow-dot"
      />
    </div>
  )
}
