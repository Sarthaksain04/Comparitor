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

export default ThreeD;