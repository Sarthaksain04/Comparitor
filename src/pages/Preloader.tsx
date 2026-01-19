import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

type PreloaderProps = {
  onComplete: () => void;
};

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const counter1Ref = useRef<HTMLDivElement>(null);
  const counter2Ref = useRef<HTMLDivElement>(null);
  const counter3Ref = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const loader1Ref = useRef<HTMLDivElement>(null);
  const loader2Ref = useRef<HTMLDivElement>(null);

  gsap.set(loaderRef.current, {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%",
});


  useEffect(() => {
    if (
      !counter1Ref.current ||
      !counter2Ref.current ||
      !counter3Ref.current ||
      !loaderRef.current ||
      !loader1Ref.current ||
      !loader2Ref.current
    )
      return;

    // ---- Smooth counter animation ----
    const animateCounter = (
      el: HTMLDivElement,
      duration: number,
      delay = 0
    ) => {
      const numHeight = el.querySelector(".num")!.clientHeight;
      const totalDistance =
        (el.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(el, {
        y: -totalDistance,
        duration,
        delay,
        ease: "none", // 🔥 smooth roll
      });
    };

    const tl = gsap.timeline({ onComplete });

    // Counters
    animateCounter(counter3Ref.current, 5);
    animateCounter(counter2Ref.current, 6);
    animateCounter(counter1Ref.current, 2, 4);

    // Digits slide out (GPU safe)
    tl.to(
      ".digit",
      {
        yPercent: -150,
        stagger: { amount: 0.25 },
        duration: 1,
        ease: "power4.inOut",
      },
      6
    );

    // Loader bars fill
    tl.from(loader1Ref.current, { width: 0, duration: 6 }, 0);
    tl.from(loader2Ref.current, { width: 0, duration: 2 }, 1.9);

    // Rotate bars
    tl.to(loader1Ref.current, { rotate: 90, y: -50, duration: 0.5 }, 6);
    tl.to(loader2Ref.current, { x: -75, y: 75, duration: 0.5 }, "<");

    // Remove gray background BEFORE scale
    tl.to(
      ".loader-bars",
      { background: "transparent", duration: 0.2, ease: "none" },
      5.8
    );

    // Scale loader (ONLY ONCE)
 // Scale from true center
tl.to(
  loaderRef.current,
  {
    scale: 100,
    duration: 1.1,
    ease: "power3.inOut",
  },
  6.4
);

// Rotate cleanly around center
tl.to(
  loaderRef.current,
  {
    rotate: 45,
    duration: 1,
    ease: "power3.inOut",
  },
  "<"
);

// THEN move it away (after rotation is visible)
tl.to(
  loaderRef.current,
  {
    x: 2000,
    y: 500,
    duration: 1,
    ease: "power3.inOut",
  },
  "<0.2"
);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <>
      {/* Loader */}
      <div ref={loaderRef} className="loader">
        <div className="loader-bars">
          <div ref={loader1Ref} className="loader-1 bar" />
          <div ref={loader2Ref} className="loader-2 bar" />
        </div>
      </div>

      {/* Counter */}
      <div className="counter">
        <div ref={counter1Ref} className="counter-1 digit">
          <div className="num">0</div>
          <div className="num">1</div>
        </div>

        <div ref={counter2Ref} className="counter-2 digit">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="num">
              {i % 10}
            </div>
          ))}
        </div>

        <div ref={counter3Ref} className="counter-3 digit">
          {Array.from({ length: 21 }).map((_, i) => (
            <div key={i} className="num">
              {i % 10}
            </div>
          ))}
          <div className="num">0</div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
