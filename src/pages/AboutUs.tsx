// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import AboutUs3Denv from "./AboutUs3Denv";



// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs() {
//   const title = useRef<HTMLHeadingElement>(null);
//   const track = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.fromTo(
//       title.current,
//       {
//         scaleY: 0.6,
//         letterSpacing: "-0.08em",
//         opacity: 0,
//       },
//       {
//         scaleY: 1.15,
//         letterSpacing: "0.04em",
//         opacity: 1,
//         scrollTrigger: {
//           trigger: ".hero",
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//         },
//       }
//     );

//     gsap.to(track.current, {
//       xPercent: -200,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".horizontal",
//         start: "top top",
//         end: "+=10000",
//         scrub: 2.5,
//         pin: true,
//         pinSpacing: true,
//       },
//     });

//     ScrollTrigger.refresh();
//   }, []);

//   return (
//     <div
//       style={{
//         background: "#050505",
//         color: "white",
//         minHeight: "400vh",
//         minWidth: "100vw",
//         overflowX: "hidden",
//         marginLeft: "-20px",
//       }}
//     >
//       {/* HERO */}
//       <section
//         className="hero"
//         style={{
//           height: "100vh",
//           display: "flex",
//           alignItems: "flex-end",
//           justifyContent: "center",
//           paddingBottom: "80px",
//         }}
//       >
       
     
          
            
//                   <AboutUs3Denv/>

      
     
//         <h1
//           ref={title}
//           style={{
//             fontSize: "210px",
//             fontWeight: 500,
//             margin: 0,
//             transformOrigin: "center bottom",
//             whiteSpace: "nowrap",
//           }}
//         >
//           COMPARITOR
//         </h1>
//       </section>

//       {/* HORIZONTAL */}
//       <section
//         className="horizontal"
//         style={{
//           height: "100vh",
//           width: "100vw",
//           overflow: "hidden",
//           pointerEvents: "none", // ⭐ allows scroll ANYWHERE
//         }}
//       >
//         <div
//           ref={track}
//           style={{
//             display: "flex",
//             width: "300vw",
//             height: "100%",
//           }}
//         >
//         <Panel
//         left={[
//           "WE ARE",
//           "COMPARITOR",
//           "A CREATIVE",
//           "PRODUCTION STUDIO",
//         ]}
//         right={[
//           "NICE TO",
//           "MEET YOU",
//         ]}
//       />


//          <Panel
//         left={[
//           "A world wide team of",
//           "experienced and skilled",
//           "professionals",
//         ]}
//         right={[
//           "who bring a wide",
//            "range of",
//          " talents and perspectives",
//           "to a project",
//         ]}
        
//       />

    

//         </div>
//       </section>

//       {/* EXIT */}
//       <section style={{ height: "100vh" }} />
//     </div>
//   );
// }

// function Panel({
//   left,
//   right,

// }: {
//   left: string[];
//   right?: string[];

// }) {
//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         padding: "140px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* LEFT BLOCK */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "19px",
//           fontSize: "49px",
//           lineHeight: 1.15,
//           textAlign: "left",
//           marginTop: "290px",
//           marginLeft: "-70px",
//         }}
//       >
//         {left.map((l, i) => (
//           <div key={i}>{l}</div>
//         ))}
//       </div>

//       {/* RIGHT BLOCK */}
//       {right && (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "19px",
//             fontSize: "49px",
//             lineHeight: 1.15,
//             textAlign: "right",
//             marginTop: "330px",
//             marginRight: "-70px",

//           }}
//         >
//           {right.map((l, i) => (
//             <div key={i}>{l}</div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }











"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AboutUs3Denv from "./AboutUs3Denv";
import ConnectPage from "@/models/connectors";


gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const container = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const verticalSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* HERO TITLE */
    gsap.fromTo(
      title.current,
      {
        scaleY: 0.6,
        letterSpacing: "-0.08em",
        opacity: 0,
      },
      {
        scaleY: 1.15,
        letterSpacing: "0.04em",
        opacity: 1,
        scrollTrigger: {
          trigger: ".hero",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    /* HORIZONTAL SCROLL */
    const panels = gsap.utils.toArray(".panel");
    const scrollWidth = window.innerWidth * (panels.length - 1);

    gsap.to(track.current, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => "+=" + scrollWidth,
        pinSpacing: true,
      },
    });

    /* COLOR TRANSITION TO WHITE */
    gsap.to(container.current, {
      backgroundColor: "#ffffff",
      color: "#000000",
      ease: "none",
      scrollTrigger: {
        trigger: verticalSection.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <div
      ref={container}
      style={{
        background: "#050505",
        color: "white",
        overflowX: "hidden",
        transition: "background 0.3s ease",
      }}
    >
      {/* HERO */}
      <section
        className="hero"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "80px",
        }}
      >
        <AboutUs3Denv />
        

        <h1
          ref={title}
          style={{
            fontSize: "210px",
            fontWeight: 500,
            margin: 0,
            transformOrigin: "center bottom",
            whiteSpace: "nowrap",
          }}
        >
          COMPARITOR
        </h1>
      </section>

      {/* WRAPPER */}
      <div ref={wrapper}>
        {/* HORIZONTAL */}
        <section
          className="horizontal"
          style={{
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            ref={track}
            style={{
              display: "flex",
              width: "200vw",
              height: "100%",
            }}
          >

            <Panel
            
              left={[
                "WE ARE",
                "COMPARITOR",
                "A CREATIVE",
                "PRODUCTION STUDIO",
              ]}
              right={["NICE TO", "MEET YOU"]}
            />

            <Panel
              left={[
                "A world wide team of",
                "experienced and skilled",
                "professionals",
              ]}
              right={[
                "who bring a wide",
                "range of",
                "talents and perspectives",
                "to a project",
              ]}
            />
          </div>
        </section>

        {/* SPACER */}
        <div style={{ height: "100vw" }} />

        {/* VERTICAL WHITE SECTION */}
        <section
      ref={verticalSection}
      style={{
        minHeight: "160vh",
        padding: "160px",
      }}
      
    >

  {/* 3D CONNECT SECTION */}

<div
  style={{
    marginTop: "-1400px",
    marginLeft: "-90px",
    height: "441px",
    width: "1390px",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
  }}
>
  <ConnectPage />
</div>

{/* <div className="cards">
    {[...Array(4)].map((_, index)=>(
      <Card
      key={index}
      id={`card-${index + 1}`}
      frontSrc="/assets/Card.png"
      frontAlt="Card Image"
      backText="hey Bro!"
      
      />
    ))}
</div> */}
</section>



      </div>
    </div>
  );
}

function Panel({
  left,
  right,
}: {
  left: string[];
  right?: string[];
}) {
  return (
    <div
      className="panel"
      style={{
        width: "100vw",
        height: "100vh",
        padding: "140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "19px",
          fontSize: "49px",
          lineHeight: 1.15,
          textAlign: "left",
          marginTop: "290px",
          marginLeft: "-70px",
        }}
      >
        {left.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {right && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "19px",
            fontSize: "49px",
            lineHeight: 1.15,
            textAlign: "right",
            marginTop: "330px",
            marginRight: "-70px",
          }}
        >
          {right.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </div>
      )}
    </div>
  );
}


//  <ConnectPage />