import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Results } from "@mediapipe/hands";
import { MediaPipeHands } from "@/three/MediaPipeHands";
import { SceneManager } from "@/three/SceneManager";
import { Object3D } from "three";


const ThreeD: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const modelRef = useRef<THREE.Object3D | null>(null);
  const cursorRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return;

    // Init scene
    SceneManager.init(containerRef.current);

    // Cursor (hand point)
    const cursor = new THREE.Mesh(
      new THREE.SphereGeometry(0.06),
      new THREE.MeshStandardMaterial({ color: "hotpink" })
    );
    SceneManager.scene.add(cursor);
    cursorRef.current = cursor;

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load("/models/Shirt.glb", (gltf) => {
      const model = gltf.scene;

      model.position.set(0, 0, 0);
      model.rotation.set(0, 0, 0);
      model.scale.setScalar(0.01); // 👈 CRITICAL

      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.6,
            metalness: 0.2,
          });
        }
      });

      SceneManager.scene.add(model);
      modelRef.current = model;

      // Debug box (remove later)
      const box = new THREE.BoxHelper(model, 0xff0000);
      SceneManager.scene.add(box);
    });

    // MediaPipe
    const mp = new MediaPipeHands(videoRef.current, onHandResults);
    mp.start();

    animate();
  }, []);

  const onHandResults = (results: Results) => {
    if (!results.multiHandLandmarks?.length) return;

    const lm = results.multiHandLandmarks[0];

    // MIRRORED coordinates
    const x = (0.5 - lm[9].x) * 3;
    const y = (0.5 - lm[9].y) * 3;

    // Depth
    const dx = lm[0].x - lm[10].x;
    const dy = lm[0].y - lm[10].y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const z = THREE.MathUtils.clamp(
      THREE.MathUtils.mapLinear(dist, 0.05, 0.25, -1, 1),
      -1,
      1
    );

    if (cursorRef.current) {
      cursorRef.current.position.set(x, y, z);
    }

    // ALWAYS follow cursor (debug mode)
    if (modelRef.current && cursorRef.current) {
      modelRef.current.position.lerp(cursorRef.current.position, 0.15);
      modelRef.current.rotation.y += 0.02;
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    SceneManager.render();
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ display: "none" }}
      />
      <div ref={containerRef} />
    </>
  );
};

// export default ThreeD;
// import React, { useEffect, useRef } from "react";
// import { MediaPipeHands } from "@/three/MediaPipeHands";
// import { SceneManager } from "@/three/SceneManager";
// import { Results } from "@mediapipe/hands";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// const ThreeD: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const modelRef = useRef<THREE.Object3D | null>(null);

//   // Smooth state
//   const rotationVelocity = useRef({ x: 0, y: 0 });
//   const zoomVelocity = useRef(0);

//   useEffect(() => {
//     if (!containerRef.current || !videoRef.current) return;

//     SceneManager.init(containerRef.current);

//     // Load product model
//     const loader = new GLTFLoader();
//     loader.load("/models/Shirt.glb", (gltf) => {
//       const model = gltf.scene;

//       model.position.set(0, -0.2, 0);
//       model.scale.setScalar(0.51);
//       model.rotation.set(0, Math.PI, 0);

//       model.traverse((child) => {
//         if ((child as THREE.Mesh).isMesh) {
//           (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
//             color: 0xffffff,
//             roughness: 0.5,
//             metalness: 0.15,
//           });
//         }
//       });

//       SceneManager.scene.add(model);
//       modelRef.current = model;
//     });

//     // MediaPipe
//     const mp = new MediaPipeHands(videoRef.current, onHandResults);
//     mp.start();

//     animate();
//   }, []);

//   const onHandResults = (results: Results) => {
//     if (!results.multiHandLandmarks?.length || !modelRef.current) return;

//     const lm = results.multiHandLandmarks[0];

//     const v = (i: number) =>
//       new THREE.Vector3(lm[i].x, lm[i].y, lm[i].z);

//     const thumb = v(4);
//     const index = v(8);
//     const middleTip = v(12);
//     const middleMCP = v(9);

//     const pinchDist = thumb.distanceTo(index);
//     const fistDist = middleMCP.distanceTo(middleTip);

//     const isPinch = pinchDist < 0.04;
//     const isFist = fistDist < 0.06;
//     const isOpen = !isPinch && !isFist;

//     // ✋ Open hand → rotate Y
//     if (isOpen) {
//       rotationVelocity.current.y += (0.5 - lm[9].x) * 0.01;
//     }

//     // ✊ Fist → tilt X
//     if (isFist) {
//       rotationVelocity.current.x += (0.5 - lm[9].y) * 0.01;
//     }

//     // 🤏 Pinch → zoom
//     if (isPinch) {
//       zoomVelocity.current += (0.04 - pinchDist) * 0.3;
//     }
//   };

//   const animate = () => {
//     requestAnimationFrame(animate);

//     if (modelRef.current) {
//       // Apply inertia
//       modelRef.current.rotation.y += rotationVelocity.current.y;
//       modelRef.current.rotation.x += rotationVelocity.current.x;

//       SceneManager.camera.position.z += zoomVelocity.current;

//       // Clamp zoom
//       SceneManager.camera.position.z = THREE.MathUtils.clamp(
//         SceneManager.camera.position.z,
//         1.2,
//         3
//       );

//       // Damping (smooth stop)
//       rotationVelocity.current.y *= 0.9;
//       rotationVelocity.current.x *= 0.9;
//       zoomVelocity.current *= 0.85;

//       // Idle auto-rotate
//       if (
//         Math.abs(rotationVelocity.current.y) < 0.0001 &&
//         Math.abs(rotationVelocity.current.x) < 0.0001
//       ) {
//         modelRef.current.rotation.y += 0.002;
//       }
//     }

//     SceneManager.render();
//   };

//   return (
//     <>
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         muted
//         style={{ display: "none" }}
//       />
//       <div ref={containerRef} />
//     </>
//   );
// };

// export default ThreeD;

