import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box, Hand, MousePointerClick } from "lucide-react"; // Make sure to install lucide-react
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Object3D } from "three";
import "./Page3.css";



export default function Page3() {
  const navigate = useNavigate();
  
function Model(props: { object?: Object3D }) {
  const { scene } = useGLTF("/models/Shirt.glb");
  return <primitive object={scene} {...props} />;
}
  return (
    
    <section className="gesture-section">
      <div className="gesture-content">
        
        {/* Left Side: Text & Actions */}
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

          <button
            className="cta-button"
            onClick={() => navigate("/reels")}
          >
            Try Gesture Mode
          </button>
        </div>

        {/* Right Side: Visual / Image Placeholder */}
       <div className="visual-container">
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
            <Suspense fallback={null}>
              {/* Stage handles lighting and centering automatically */}
              <Stage environment="city" intensity={0.6}>
                <Model />
              </Stage>
            </Suspense>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>

      </div>
    </section>
  );
}