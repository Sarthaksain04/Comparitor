// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AnimatedCards() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const cards = cardsRef.current;

//     // stacked initial
//     gsap.set(cards, {
//       x: 0,
//       rotateY: 0,
//       zIndex: (i) => 10 - i,
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 9%",
//         end: "+=1500",
//         scrub: true,
//         pin: true,            // pin only this section
//         pinSpacing: true,
//       },
//     });

//     // spread horizontally
//     tl.to(cards, {
//       x: (i) => (i - 1.5) * 240,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // flip 360°
//     tl.to(
//       cards,
//       {
//         rotateY: 180,
//         duration: 1,
//         ease: "power2.inOut",
//       },
//       "<"
//     );
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         marginTop: "120px",
//         height: "100vh",   // needed for pin space
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         perspective: "1500px",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           width: "220px",
//           height: "320px",
//           marginTop: "100%"
//         }}
//       >
//         {[...Array(4)].map((_, index) => (
//           <div
//             key={index}
//             ref={(el) => {
//               if (el) cardsRef.current[index] = el;
//             }}
//             style={{
//               position: "absolute",
//               width: "220px",
//               height: "320px",
//               transformStyle: "preserve-3d",
//               borderRadius: "20px",
//               boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
//             }}
//           >
//             {/* FRONT */}
//             <div
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 backfaceVisibility: "hidden",
//                 borderRadius: "20px",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src="/src/assets/Card.png"
//                 alt="Card"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />
//             </div>

//             {/* BACK */}
//             <div
//               style={{
//                 position: "absolute",
//                 width: "100%",
//                 height: "100%",
//                 background: "#111",
//                 color: "white",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: "20px",
//                 backfaceVisibility: "hidden",
//                 transform: "rotateY(180deg)",
//                 padding: "20px",
//                 textAlign: "center",
//                 fontSize: "18px",
//               }}
//             >
//               Card {index + 1} Content
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }










"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // 🔹 RIGHT-TILT initial fan
    gsap.set(cards, {
      rotateZ: (i) => [12, 6, -6, -12][i],
      x: (i) => -i * 18,
      y: 0,
      rotateY: 0,
      zIndex: (i) => 10 - i,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        end: "+=3500",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Spread
    tl.to(cards, {
      x: (i) => (i - 1.5) * 160,
      rotateZ: (i) => (i - 1.5) * 14,
      ease: "none",
      duration: 2,
    });

    // Flip one by one
    cards.forEach((card, index) => {
      tl.to(
        card,
        {
          rotateY: 180,
          ease: "none",
          duration: 1.2,
        },
        2 + index * 0.8
      );
    });

    tl.to({}, { duration: 2 });

  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: "1200px",
      }}
    >
      <div
        ref={stackRef}
        style={{
          position: "relative",
          width: "360px",
          height: "520px",
          transformStyle: "preserve-3d",
        }}
      >
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "24px",
              transformStyle: "preserve-3d",
              boxShadow: "0 40px 100px rgba(0,0,0,0.35)",
            }}
          >
            {/* FRONT */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                backfaceVisibility: "hidden",
                overflow: "hidden",
              }}
            >
              <img
                src="/src/assets/Card.png"
                alt="Card"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* BACK */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                background: "#111",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              Card {index + 1} Content
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}