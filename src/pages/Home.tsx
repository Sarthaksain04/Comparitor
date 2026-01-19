// // import Navbar from '../pages/Navbar';
// // import './Home.css';
// // import Page1 from './Page1';
// // import game from '../assets/game.png';
// // import headphone from '../assets/headphone.png'
// // import phones from '../assets/phones.png'
// // import earbuds from  '../assets/earbuds.png'
// // import study from '../assets/study.png'
// // import shop from '../assets/shop.png'
// // import book from '../assets/book.png'
// // import watch from '../assets/watch.png'
// // import './Page1.css';
// // import Page2 from './Page2';
// // import './Page2.css';
// // import { AnimatedText } from "../Components/AnimatedText";


// // const Home = () => {
// //   return (
    
// //     <div className="scroll-container">
// //       <section className="home-hero-section">
// //         <Navbar />
// //         <div className="home-hero">
// //           <div>
// //            <AnimatedText
// //             className="home-hero"
// //             textClassName="hero-text"
// //             gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
// //             gradientAnimationDuration={3}
// //             hoverEffect={true}
// //           >
// //             Compare Smarter<br />Shop Better
        
// //           </AnimatedText>
// //             <img src={phones} alt="Promotional2" className="promo-image3" />
 
// //             <div className="info-banner">
// //               <span role="img" aria-label="waving hand">👋</span>
// //               <p>
// //                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
// //               </p>
// //             </div>
// //           </div>    
// //         </div>
// //             <img src={game} alt="Promotional" className="promo-image" /> 
// //             <img src={headphone} alt="Promotional1" className="promo-image2" />
// //             {/* <img src={phones} alt="Promotional2" className="promo-image3" /> */}
// //              <img src={earbuds} alt="Promotional3" className="promo-image4" />
// //              <img src={study} alt="Promotional4" className="promo-image5" />
// //              <img src={shop} alt="Promotional5" className="promo-image6" />
// //               <img src={book} alt="Promotional6" className="promo-image7" />
// //               <img src={watch} alt="Promotional7" className="promo-image8" />
              


// //         <div className="floating-search-bar">
// //           <input type="text" placeholder="Search..." />
// //           <span className="search-icons"></span>
// //         </div>
// //       </section>

// //       <section className="page1-section">
// //         <Page1 />
// //       </section>

// //       <section className="page2-section">
// //         <Page2 />
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from  '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';
// import './Page1.css';
// import Page2 from './Page2';
// import './Page2.css';
// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setTimeout(() => {
//       navigate(`/search?query=${encodeURIComponent(query.trim())}`);
//        }, 2000);
//     }
//   }

//   return (
//     <div className="scroll-container">
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>
//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         {/* <img src={phones} alt="Promotional2" className="promo-image3" /> */}
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import Page2 from './Page2';

// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';

// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true); // trigger fade out
//       setTimeout(() => {
//         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//       }, 800); // 800ms delay
//     }
//   }

//   return (
//     <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>

//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import Page2 from './Page2';

// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';

// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const navigate = useNavigate();

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true); // trigger fade out
//       setTimeout(() => {
//         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//       }, 800); // delay for animation
//     }
//   }

//   return (
//     <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Promotional Images */}
//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         {/* Search Bar */}
//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Joyride from "react-joyride"; 

// import Navbar from '../pages/Navbar';
// import './Home.css';
// import Page1 from './Page1';
// import Page2 from './Page2';

// import game from '../assets/game.png';
// import headphone from '../assets/headphone.png';
// import phones from '../assets/phones.png';
// import earbuds from '../assets/earbuds.png';
// import study from '../assets/study.png';
// import shop from '../assets/shop.png';
// import book from '../assets/book.png';
// import watch from '../assets/watch.png';

// import { AnimatedText } from "../Components/AnimatedText";

// const Home = () => {
//   const [query, setQuery] = useState("");
//   const [fadeOut, setFadeOut] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔹 NEW
//   const navigate = useNavigate();

//   // ✅ Check login status (e.g. from localStorage)
//   React.useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);

//   const steps = [
//     {
//       target: ".login-btn",
//       content: "Sorry for the inconvenience! To continue using the comparator, you need to log in first.",
//       placement: "left" as const,
//       disableBeacon: true,
//     },
//   ];

//   function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
//     if (e.key === "Enter" && query.trim()) {
//       setFadeOut(true);
//       setTimeout(() => {
//         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
//       }, 800);
//     }
//   }

//   return (
//     <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
//       {/* ✅ Joyride (only show if not logged in) */}
//       {!isLoggedIn && (
//         <Joyride
//           steps={steps}
//           run={!localStorage.getItem("isLoggedIn")}
//           continuous
//           showProgress
//           disableCloseOnEsc={true}
//           disableOverlayClose={true}
//           spotlightClicks={true}
//           hideBackButton={true}
//           styles={{
//             options: {
//               zIndex: 10000,
//             },
//             buttonClose: {
//               display: "none",
//             },
//             buttonNext: {
//               display: "none",
//             },
//           }}
//         />
//       )}
      

//       <section className="home-hero-section">
//         <Navbar />
//         <div className="home-hero">
//           <div>
//             <AnimatedText
//               className="home-hero"
//               textClassName="hero-text"
//               gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
//               gradientAnimationDuration={3}
//               hoverEffect={true}
//             >
//               Compare Smarter<br />Shop Better
//             </AnimatedText>
//             <img src={phones} alt="Promotional2" className="promo-image3" />

//             <div className="info-banner">
//               <span role="img" aria-label="waving hand">👋</span>
//               <p>
//                 Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
//               </p>
//             </div>
//           </div>
//         </div>

//         <img src={game} alt="Promotional" className="promo-image" />
//         <img src={headphone} alt="Promotional1" className="promo-image2" />
//         <img src={earbuds} alt="Promotional3" className="promo-image4" />
//         <img src={study} alt="Promotional4" className="promo-image5" />
//         <img src={shop} alt="Promotional5" className="promo-image6" />
//         <img src={book} alt="Promotional6" className="promo-image7" />
//         <img src={watch} alt="Promotional7" className="promo-image8" />

//         <div className="floating-search-bar">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={onKeyDown}
//           />
//           <span className="search-icons"></span>
//         </div>
//       </section>

//       <section className="page1-section">
//         <Page1 />
//       </section>

//       <section className="page2-section">
//         <Page2 />
//       </section>
//     </div>
//   );
// };

// export default Home;
import { useEffect, useState } from "react";
import Joyride from "react-joyride";
import { useNavigate } from "react-router-dom";

import book from '../assets/book.png';
import Dash from '../assets/dash.png';
import earbuds from '../assets/earbuds.png';
import game from '../assets/game.png';
import headphone from '../assets/headphone.png';
import shop from '../assets/shop.png';
import study from '../assets/study.png';
import watch from '../assets/watch.png';
import Navbar from '../pages/Navbar';
import './Home.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import './Explorepage';
import './Landing.css';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Lenis from "@studio-freight/lenis";
import ContactPage from "./ContactPage";

gsap.registerPlugin(ScrollTrigger);




const Home = () => {
  const [query, setQuery] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  useEffect(() => {
  const lenis = new Lenis({
    smoothWheel: false,
    duration: 1.2,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

const path = document.querySelector<SVGPathElement>("#animated-path");
  if (!path) return;

  const length = path.getTotalLength();

  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  gsap.to(path, {
    strokeDashoffset: 0,
    scrollTrigger: {
      trigger: path,
      scroller: ".scroll-container", // 🔥 REQUIRED
      start: "top 5%",
      end: "bottom 20%",
      scrub: 5.5,
    },
    ease: "none",
  });

  return () => {
    ScrollTrigger.killAll();
    lenis.destroy();
  };
}, []);


  const steps = [
    {
      target: ".login-btn",
      content: "Sorry for the inconvenience! To continue using the comparator, you need to log in first.",
      placement: "left" as const,
      disableBeacon: true,
    },
  ];

  // ✅ Backend integration for search
  // async function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  //   if (e.key === "Enter" && query.trim()) {
  //     setFadeOut(true);

  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/search", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           query: query.trim(),
  //           language: "en",
  //           country: "in",
  //         }),
  //       });

  //       if (!response.ok) throw new Error("Backend request failed");

  //       const data = await response.json();
  //       console.log("✅ Products fetched:", data.cleaned_products);

  //       // Save to localStorage for your Cards page
  //       localStorage.setItem("searchResults", JSON.stringify(data.cleaned_products || []));

  //       // Redirect to results/loading page
  //       setTimeout(() => {
  //         navigate(`/loading?query=${encodeURIComponent(query.trim())}`);
  //       }, 800);

  //     } catch (error) {
  //       console.error("❌ Error fetching search data:", error);
  //     }
  //   }
  // }


  return (
    <div className={`scroll-container ${fadeOut ? "fade-out" : "fade-in"}`}>
    

      {!isLoggedIn && (
        <Joyride
          steps={steps}
          run={!localStorage.getItem("isLoggedIn")}
          continuous
          showProgress
          disableCloseOnEsc
          disableOverlayClose
          spotlightClicks
          hideBackButton
          styles={{ options: { zIndex: 10000 } }}
        />
      )}

      <section className="home-hero-section">
        
        <Navbar />
        {/* <div className="home-hero">
          <div>
            <AnimatedText
              className="home-hero"
              textClassName="hero-text"
              gradientColors="linear-gradient(90deg, #ffffff, #999999, #ffffff)"
              gradientAnimationDuration={3}
              hoverEffect
            >
              Compare Smarter<br />Shop Better
            </AnimatedText>
            <img src={phones} alt="Promotional2" className="promo-image3" />

            <div className="info-banner">
              <span role="img" aria-label="waving hand">👋</span>
              <p>Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.</p>
            </div>
          </div>
        </div> */}
    <div className="landing-wrapper">
      

      {/* BACKGROUND FLOATING LAYER (behind hero) */}
      <div className="float-wrapper" aria-hidden>
        

        {/* LEFT CLUSTER (9 divs: 2 big + 7 small) */}
        <div className="big-card left-big-1 card-filled"> 
           <img
            src={Dash}
            alt="Dash Promotional"
            style={{
              width: "85%",
              height: "auto",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 2,
              pointerEvents: "none",   // prevents click issues on PNG
              userSelect: "none"       // prevents drag selection
            }}
          />
        </div>
        <div className="big-card left-big-2"></div>

        {/* <div className="sq left-sq-1"></div> */}
        <div className="sq left-sq-1">
        <img
          src={game}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
      </div>

        <div className="sq left-sq-2">
           <img
          src={headphone}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>
        <div className="sq left-sq-3">
           <img
          src={earbuds}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>
        <div className="sq left-sq-4">
           <img
          src={study}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>
       
        <div className="sq left-sq-5">
           <img
          src={shop}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>
        <div className="sq left-sq-6">
           <img
          src={book}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>
        <div className="sq left-sq-7">
           <img
          src={watch}
          alt="Promotional"
          style={{
            width: "70%",
            height: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2
          }}
        />
        </div>

        {/* RIGHT CLUSTER (10 divs: 2 big + 8 small) */}
        <div className="big-card right-big-1">        </div>
        <div className="big-card right-big-2"></div>

        <div className="sq right-sq-1"></div>
        <div className="sq right-sq-2"></div>
        <div className="sq right-sq-3"></div>
        <div className="sq right-sq-4"></div>
        <div className="sq right-sq-5"></div>
        <div className="sq right-sq-6"></div>
        <div className="sq right-sq-7"></div>
        <div className="sq right-sq-8"></div>

      </div>

      {/* FOREGROUND HERO (centered, above floats) */}
      <main className="hero-content" role="main" aria-label="Hero section">
        
        <div className="hero-pills">
          <span className="pill pill-green">Fresh updates weekly</span>
          <span className="pill pill-purple">Flows now available for everyone</span>
        </div>

        <h1 className="hero-title">
              Compare Smarter<br />Shop Better
        </h1>

        <p className="hero-subtitle">
          Compare products from Amazon, Flipkart, and Meesho in one click with our smart AI-powered tool.
        </p>

<button 
  className="hero-btn"
  onClick={() => navigate("./explore")}
>
  Start Exploring
</button>
      </main>
      
    </div>
  <div className="svg-path">
        <svg width="896" height="999" viewBox="0 0 898 999" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="animated-path" d="M17.5044 17.5044C270.154 85.7504 249.14 260.416 242.004 267.504C234.869 274.593 187.042 368.305 116.004 277.004C44.9665 185.704 266.189 72.9639 326.017 98.0044C401.725 103.415 382.101 207.278 463.004 249.504C527.594 271.084 546.004 225.004 578.004 209.004C610.004 193.004 701.004 202.004 669.504 289.504C638.004 377.004 710.377 336.043 732.504 377.004C754.632 417.966 551.504 647.504 463.004 644.504C374.505 641.504 434.504 431.004 515.504 499.504C596.504 568.004 577.934 971.604 700.504 828.004C823.075 684.405 878.504 886.504 878.504 886.504" stroke="url(#paint0_linear_26_2)" stroke-width="20" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_26_2" x1="1056" y1="191.004" x2="1004" y2="55.0044" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE8BBB"/>
        <stop offset="1" stop-color="#9C79FC"/>
        </linearGradient>
        </defs>
        </svg>
      </div>

        {/* <img src={game} alt="Promotional" className="promo-image" /> */}
        {/* <img src={headphone} alt="Promotional1" className="promo-image2" /> */}
        {/* <img src={earbuds} alt="Promotional3" className="promo-image4" />
        <img src={study} alt="Promotional4" className="promo-image5" />
        <img src={shop} alt="Promotional5" className="promo-image6" />
        <img src={book} alt="Promotional6" className="promo-image7" />
        <img src={watch} alt="Promotional7" className="promo-image8" /> */}

        {/* 🔍 Floating Search Bar */}
        {/* <div className="floating-search-bar">
          <input
            type="text"
            placeholder="Search for a product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <span className="search-icons"></span>
        </div> */}

        {/* <div className="svg-path">
        <svg width="896" height="999" viewBox="0 0 898 999" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="animated-path" d="M17.5044 17.5044C270.154 85.7504 249.14 260.416 242.004 267.504C234.869 274.593 187.042 368.305 116.004 277.004C44.9665 185.704 266.189 72.9639 326.017 98.0044C401.725 103.415 382.101 207.278 463.004 249.504C527.594 271.084 546.004 225.004 578.004 209.004C610.004 193.004 701.004 202.004 669.504 289.504C638.004 377.004 710.377 336.043 732.504 377.004C754.632 417.966 551.504 647.504 463.004 644.504C374.505 641.504 434.504 431.004 515.504 499.504C596.504 568.004 577.934 971.604 700.504 828.004C823.075 684.405 878.504 886.504 878.504 886.504" stroke="url(#paint0_linear_26_2)" stroke-width="20" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_26_2" x1="1056" y1="191.004" x2="1004" y2="55.0044" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE8BBB"/>
        <stop offset="1" stop-color="#9C79FC"/>
        </linearGradient>
        </defs>
        </svg>
      </div> */}
      </section>
     
      
      <section className="page1-section">
        <Page1 />
      </section>

      <section className="page2-section">
        <Page2 />
      </section>
      <section className="page3-section">
        <Page3 />
      </section>
 <section className="contact"><ContactPage/></section>
        
    </div>
  );
};

export default Home;
