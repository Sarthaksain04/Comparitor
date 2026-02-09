import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useEffect } from "react";
import * as THREE from "three";

/* ================= MODEL ================= */

function Model() {
  const { scene } = useGLTF("/models/Scene.glb");
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());
    ref.current.position.sub(center);
  }, []);

  return (
    <group ref={ref}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

/* ================= PARTICLES ================= */

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const count = 2000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = -Math.random() * 20;
  }

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.06}
        color="#ffffff"
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}

/* ================= CAMERA ================= */

function ScrollCamera() {
  const { camera } = useThree();

  const baseZ = useRef(6);
  const currentZ = useRef(6);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useFrame(() => {
    const scrollY = window.scrollY;
    const targetZ = baseZ.current + scrollY * 0.0025;

    currentZ.current = THREE.MathUtils.lerp(currentZ.current, targetZ, 0.07);

    camera.position.z = currentZ.current;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.3, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouse.current.y * 0.3 + 2, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ================= DISTORTION SHADER ================= */

function DistortionPlane() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
      clock.elapsedTime;
  });

  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        transparent
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main(){
            float n = sin(vUv.y*10. + uTime)*0.02;
            gl_FragColor = vec4(0.,0.,0.,n);
          }
        `}
      />
    </mesh>
  );
}

/* ================= MAIN ================= */

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 50 }}
      style={{
        height: "800px",
        width: "1550px",
        marginTop: "-75px",
        marginLeft: "1px",
      }}
    >
      {/* STEP 8 — Fog + grayscale lighting */}
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 5, 25]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#dddddd" />

      <ParticleField />
      <Model />
      <DistortionPlane />
      <ScrollCamera />

      {/* STEP 9 — Bloom */}
      <EffectComposer>
        <Bloom luminanceThreshold={0} intensity={0.6} radius={0.6} />
      </EffectComposer>

      <OrbitControls />
    </Canvas>
  );
}
