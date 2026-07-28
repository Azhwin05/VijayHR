"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", () => gsap.ticker.tick());

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
