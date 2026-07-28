"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Rule({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        duration: 0.9,
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`rule h-px w-full bg-hairline ${className}`}
      style={{ backgroundColor: "var(--hairline)" }}
    />
  );
}
