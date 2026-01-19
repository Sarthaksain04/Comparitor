import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 15.2,          // smooth + slightly slow
      smoothWheel: true,
      wheelMultiplier: 0.85,
        touchMultiplier: 0.7,
  // slows mouse wheel
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
