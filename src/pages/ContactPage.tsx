import React from "react";
import "./ContactPage.css";
import { TextAnimate } from "../Components/ui/text-animate";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);


function ContactPage() {
  const progressFillRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();



   useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-section",
      scroller: ".scroll-container", // 🔥 THIS IS THE KEY
      start: "bottom bottom",
      end: "+=180",
      scrub: true,
    },
  });

  tl.fromTo(".next-text", { y: 12, opacity: 0 }, { y: 0, opacity: 1 })
    .fromTo(".next-page .line", { scaleX: 0 }, { scaleX: 1 }, 0)
    .fromTo(".arrow", { x: -8, opacity: 0 }, { x: 0, opacity: 1 }, 0);

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}, []);


useEffect(() => {
  const section = document.querySelector(".projects-section");
  if (!section || !progressFillRef.current) return;

  const duration = 3000; // ⏱ 10 seconds total
  let startTime: number | null = null;
  let elapsed = 0;
  let rafId: number | null = null;
  let isVisible = false;

  function animate(now: number) {
    if (!startTime) startTime = now;

    const delta = now - startTime;
    const progress = Math.min((elapsed + delta) / duration, 1);

    if (progressFillRef.current) {
      progressFillRef.current.style.transform = `scaleX(${progress})`;
      progressFillRef.current.style.transformOrigin = "left center";
    }

    if (progress < 1 && isVisible) {
      rafId = requestAnimationFrame(animate);
    } else if (progress >= 1) {
      navigate("/aboutus");
    }
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // ▶️ RESUME
        isVisible = true;
        startTime = null;
        rafId = requestAnimationFrame(animate);
      } else {
        // ⏸ PAUSE
        isVisible = false;
        if (startTime) {
          elapsed += performance.now() - startTime;
          startTime = null;
        }
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    },
    { threshold: 0.6 }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
    if (rafId) cancelAnimationFrame(rafId);
  };
}, [navigate]);




//  useEffect(() => {
//     if (!progressFillRef.current) return;

//     gsap.fromTo(
//       progressFillRef.current,
//       { scaleX: 0 },
//       {
//         scaleX: 1,
//         ease: "none",
//         transformOrigin: "left center",
//         scrollTrigger: {
//           trigger: ".projects-section",
//           scroller: ".scroll-container",
//           start: "top bottom",
//           end: "bottom+=400 top", // 👈 allows extra scroll AFTER end
//           scrub: true,
//         },
//       }
//     );
//   }, []);

  return (
    <>
    <section className="contact-wrapper">
        
      {/* Header */}
      <header className="contact-header">
      </header>

      {/* Main Content */}
      <div className="contact-main">
        {/* Left Column */}
        <div className="left-column">
            <div className="address">
              <TextAnimate animation="fadeIn" by="line" as="p">A 14</TextAnimate>
              <TextAnimate animation="fadeIn" by="line" as="p">KartarPura ,Jaipur</TextAnimate>
              <TextAnimate animation="fadeIn" by="line" as="p">Rajasthan</TextAnimate>
              <TextAnimate animation="fadeIn" by="line" as="p">India</TextAnimate>
            </div>

          <div className="social">
            <TextAnimate animation="fadeIn" by="line" as="p">Twitter / X</TextAnimate> 
            <TextAnimate animation="fadeIn" by="line" as="p">Instagram</TextAnimate>
            <TextAnimate animation="fadeIn" by="line" as="p">Linkedin</TextAnimate>
          </div>

          <div className="emails">
            <div className="enquires">
              <TextAnimate animation="fadeIn" by="line" as="p" className="label">General enquires</TextAnimate> 
               <TextAnimate animation="fadeIn" by="line" as="p">hello@comparator.co</TextAnimate>
            </div>

            <div className="business">
               <TextAnimate animation="fadeIn" by="line" as="p" className="label">New business</TextAnimate> 
              <TextAnimate animation="fadeIn" by="line" as="p" className="mail">business@comparator.co</TextAnimate>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
         <TextAnimate
            animation="fadeIn"
            by="line"
            as="h2"
            className="newsletter-heading"
            >
            {`Subscribe to
our newsletter`}
            </TextAnimate>


          <div className="input-wrapper">
            <input type="email" placeholder="Your email" />
            <span className="arrow">→</span>
          </div>
        </div>
      </div>

      {/* Footer */}
        

        <footer className="contact-footer">

        <TextAnimate
            animation="slideUp"
            by="word"
            as="p"
        >
            ©2025 COMPARATOR Creative Studio
        </TextAnimate>

        <TextAnimate
            animation="slideUp"
            by="word"
            as="p"
        >
            S&H: labs.comparator.co
        </TextAnimate>

        <p className="built-by">
            <TextAnimate
            animation="slideUp"
            by="word"
            as="span"
            >
            Built by Comparator with
            </TextAnimate>
            <TextAnimate
            animation="slideUp"
            by="word"
            as="span"
            className="heart"
            >❤️</TextAnimate> 
        </p>

        </footer>


            {/* Scroll To Top Button */}
            {/* <button
                className="scroll-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                
            </button> */}
        
    </section>

    {/* ===== DARK PROJECTS SECTION ===== */}
     <section className="projects-section">
        {/* 🔥 PROGRESS BAR (RIGHT, HORIZONTAL) */}
        <div className="progress-track-horizontal">
          <div ref={progressFillRef} className="progress-fill-horizontal" />
        </div>


        <p className="scroll-hint">
          KEEP SCROLLING<br />TO LEARN MORE
        </p>

        <h2 className="projects-title">ABOUT US</h2>

        <div className="projects-row">
          <span>+</span><span>+</span><span>+</span><span>+</span><span>+</span>
        </div>

        <div className="next-page">
          <span className="next-text">NEXT PAGE</span>
          <div className="line"></div>
          <span className="arrow">→</span>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
