// import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Box, Hand, MousePointerClick } from "lucide-react"; // Make sure to install lucide-react
// import { Suspense } from "react";
// import { useNavigate } from "react-router-dom";
// import { Object3D } from "three";
// import "./Page3.css";



// export default function Page3() {
//   const navigate = useNavigate();
  
// function Model(props: { object?: Object3D }) {
//   const { scene } = useGLTF("/models/Shirt.glb");
//   return <primitive object={scene} {...props} />;
// }
//   return (
    
//     <section className="gesture-section">
//       <div className="gesture-content">
        
//         {/* Left Side: Text & Actions */}
//         <div className="text-container">
//           <div className="badge">
//             <Hand size={16} />
//             <span>New Feature</span>
//           </div>
          
//           <h1 className="Title">
//             Touch-Free <br />
//             <span className="Highlight">3D Shopping.</span>
//           </h1>

//           <p className="Subtitle">
//             Experience the future of e-commerce. Wave your hand to rotate, 
//             zoom, and inspect products in real-time. No mouse or touchscreen required.
//           </p>

//           <div className="features-grid">
//             <div className="feature-item">
//               <Box className="feature-icon" size={24} />
//               <div>
//                 <h3>360° Rotation</h3>
//                 <p>View every angle naturally.</p>
//               </div>
//             </div>
//             <div className="feature-item">
//               <MousePointerClick className="feature-icon" size={24} />
//               <div>
//                 <h3>Zero Contact</h3>
//                 <p>Hygienic and futuristic control.</p>
//               </div>
//             </div>
//           </div>

//           <button
//             className="cta-button"
           
//           >
//             Try Gesture Mode
//           </button>
//         </div>

//         {/* Right Side: Visual / Image Placeholder */}
//        <div className="visual-container">
//           <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
//             <Suspense fallback={null}>
//               {/* Stage handles lighting and centering automatically */}
//               <Stage environment="city" intensity={0.6}>
//                 <Model />
//               </Stage>
//             </Suspense>
//             <OrbitControls autoRotate enableZoom={false} />
//           </Canvas>
//         </div>

//       </div>
//     </section>
//   );
// }


import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box, Hand, MousePointerClick } from "lucide-react";
import { Suspense, useEffect, useRef, useState } from "react";
import { Object3D } from "three";
import "./Page3.css";


function Model(props: { object?: Object3D }) {
  const { scene } = useGLTF("/models/Shirt.glb");
  return <primitive object={scene} {...props} />;
}

export default function Page3() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // ✅ Detect when Page3 is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollBtn(entry.isIntersecting);
      },
      {
        threshold: 1, // 50% of Page3 visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="gesture-section" ref={sectionRef}>
      <div className="gesture-content">
        
        {/* LEFT SIDE */}
        <div className="text-container">
          <div className="badge">
            <Hand size={16} />
            <span>New Feature</span>
          </div>

          <h1 className="Title">
            Touch-Free <br />
            <span className="Highlight">3D Shopping.</span>
          </h1>

          <p className="Subtitle">
            Experience the future of e-commerce. Wave your hand to rotate,
            zoom, and inspect products in real-time. No mouse or touchscreen required.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <Box className="feature-icon" size={24} />
              <div>
                <h3>360° Rotation</h3>
                <p>View every angle naturally.</p>
              </div>
            </div>

            <div className="feature-item">
              <MousePointerClick className="feature-icon" size={24} />
              <div>
                <h3>Zero Contact</h3>
                <p>Hygienic and futuristic control.</p>
              </div>
            </div>
          </div>

          <button className="cta-button">
            Try Gesture Mode
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="visual-container">
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6}>
                <Model />
              </Stage>
            </Suspense>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>

      {/* ✅ BUTTON APPEARS ONLY WHEN PAGE 3 IS VISIBLE */}
      {showScrollBtn && (
        <button className="continue-scroll-btn" onClick={handleScroll}>
          <span className="arrow">↓</span>
          <span className="text">CONTINUE TO SCROLL</span>
          <span className="arrow">↓</span>
        </button>
       
      )}
    </section>
    
  );
}
