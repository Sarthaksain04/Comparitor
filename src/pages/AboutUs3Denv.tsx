// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// export default function AboutUs3Denv() {
//   const mount = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mount.current) return;

//     // SCENE
//     const scene = new THREE.Scene();

//     // CAMERA
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       500
//     );

//     // RENDERER
//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mount.current.appendChild(renderer.domElement);

//     // CONTROLS (enabled initially for capture)
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableRotate = true;
//     controls.enableZoom = true;
//     controls.enablePan = true;

//     scene.add(new THREE.AmbientLight(0xffffff, 1));

//     const loader = new GLTFLoader();
//     let mixer: THREE.AnimationMixer | undefined;

//     loader.load("/models/Comparitor.glb", (gltf) => {
//       const model = gltf.scene;
      

//       // ✅ APPLY FINAL MODEL TRANSFORMS FIRST
//       model.scale.set(1.3, 1.3, 1.3);
//       // model.rotation.y = Math.PI / 2; // if needed
      

//       scene.add(model);
//       const box = new THREE.Box3().setFromObject(model);
//       const center = box.getCenter(new THREE.Vector3());
//       model.position.sub(center);


//       // ============================
//       // 🔥 LOCK CAMERA AFTER MODEL
//       // ============================

//       camera.position.set(
//         138.08809545856857,
//         7.574525448612621,
//         43.26865809007038
//       );

//       controls.target.set(
//         138.14436001829094,
//         7.666819064349882,
//         44.26412494828112
//       );

//       // Disable controls AFTER locking camera
//       controls.enableRotate = false;
//       controls.enableZoom = false;
//       controls.enablePan = false;
//       controls.enableDamping = false;

//       controls.update();

//       // Animations
//       if (gltf.animations.length) {
//         mixer = new THREE.AnimationMixer(model);
//         gltf.animations.forEach((clip) => {
//           mixer!.clipAction(clip).play();
//         });
//       }
//     });

//     const clock = new THREE.Clock();

//     const resize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", resize);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixer) mixer.update(clock.getDelta());

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       controls.dispose();
//       renderer.dispose();
//       mount.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mount}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 0,
//         pointerEvents: "auto",
//       }}
//     />
//   );
// }


//// 2 



// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs3Denv() {
//   const mount = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mount.current) return;

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       500
//     );

//     // 🔥 YOUR SAVED CAMERA POSITION
//     const startPos = new THREE.Vector3(
//       138.08809545856857,
//       7.574525448612621,
//       43.26865809007038
//     );

//     // 🔥 YOUR SAVED TARGET
//     const startTarget = new THREE.Vector3(
//       138.14436001829094,
//       7.666819064349882,
//       44.26412494828112
//     );

//     camera.position.copy(startPos);

//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//       powerPreference: "high-performance",
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mount.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);

//     scene.add(new THREE.AmbientLight(0xffffff, 1));

//     const loader = new GLTFLoader();
//     let mixer: THREE.AnimationMixer | undefined;

//     loader.load("/models/Comparitor.glb", (gltf) => {
//       const model = gltf.scene;

//       model.scale.set(1.3, 1.3, 1.3);

//       scene.add(model);
//       const box = new THREE.Box3().setFromObject(model);
//       const center = box.getCenter(new THREE.Vector3());
//       model.position.sub(center);

//       camera.position.copy(startPos);
//       controls.target.copy(startTarget);

//       controls.enableRotate = false;
//       controls.enableZoom = false;
//       controls.enablePan = false;
//       controls.enableDamping = false;

//       controls.update();

//       if (gltf.animations.length) {
//         mixer = new THREE.AnimationMixer(model);
//         gltf.animations.forEach((clip) =>
//           mixer!.clipAction(clip).play()
//         );
//       }
//     });

//     // ======================
//     // GSAP SCROLL PROGRESS
//     // ======================
//     const progress = { value: 0 };

//     ScrollTrigger.create({
//       trigger: ".hero",
//       start: "top top",
//       end: "+=4000",
//       scrub: true,
//       onUpdate: (self) => {
//         progress.value = self.progress;
//       },
//     });

//     const clock = new THREE.Clock();

//     const resize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", resize);

//     // 🔥 CAMERA BACKWARD DIRECTION
//     const zoomDir = new THREE.Vector3()
//       .subVectors(startPos, startTarget)
//       .normalize();

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixer) mixer.update(clock.getDelta());

//       // 🎥 CINEMATIC ZOOM OUT
//       const zoomDistance = progress.value * 80; // change 80 if needed

//       camera.position.copy(startPos).addScaledVector(zoomDir, zoomDistance);

//       // ALWAYS LOOK AT ORIGINAL TARGET
//       camera.lookAt(startTarget);

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       ScrollTrigger.killAll();
//       controls.dispose();
//       renderer.dispose();
//       mount.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mount}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 0,
//         pointerEvents: "none",
//       }}
//     />
//   );
// }

/// 3 

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs3Denv() {
//   const mount = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mount.current) return;

//     // ✅ GSAP smooth scrolling support
//     ScrollTrigger.normalizeScroll(true);

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       500
//     );

//     // YOUR SAVED CAMERA
//     const startPos = new THREE.Vector3(
//       138.08809545856857,
//       7.574525448612621,
//       43.26865809007038
//     );

//     const startTarget = new THREE.Vector3(
//       138.14436001829094,
//       7.666819064349882,
//       44.26412494828112
//     );

//     camera.position.copy(startPos);

//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//       powerPreference: "high-performance",
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mount.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);

//     scene.add(new THREE.AmbientLight(0xffffff, 1));

//     const loader = new GLTFLoader();
//     let mixer: THREE.AnimationMixer | undefined;

//     loader.load("/models/Comparitor.glb", (gltf) => {
//       const model = gltf.scene;

//       model.scale.set(1.3, 1.3, 1.3);

//       scene.add(model);
//       const box = new THREE.Box3().setFromObject(model);
//       const center = box.getCenter(new THREE.Vector3());
//       model.position.sub(center);

//       camera.position.copy(startPos);
//       controls.target.copy(startTarget);

//       controls.enabled = false;

//       if (gltf.animations.length) {
//         mixer = new THREE.AnimationMixer(model);
//         gltf.animations.forEach((clip) =>
//           mixer!.clipAction(clip).play()
//         );
//       }
//     });

//     // ====================
//     // GSAP PROGRESS
//     // ====================
//     const progress = { value: 0 };
//     const smooth = { value: 0 };

//     ScrollTrigger.create({
//       trigger: ".hero",
//       start: "top top",
//       end: "+=4000",
//       scrub: 1.5,
//       onUpdate: (self) => {
//         progress.value = self.progress;
//       },
//     });

//     const zoomDir = new THREE.Vector3()
//       .subVectors(startPos, startTarget)
//       .normalize();

//     const clock = new THREE.Clock();

//     const resize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", resize);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixer) mixer.update(clock.getDelta());

//       // 🔥 SMOOTH INTERPOLATION
//       smooth.value += (progress.value - smooth.value) * 0.08;

//       const zoomDistance = smooth.value * 100;

//       camera.position.copy(startPos).addScaledVector(zoomDir, zoomDistance);

//       camera.lookAt(startTarget);

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       ScrollTrigger.killAll();
//       controls.dispose();
//       renderer.dispose();
//       mount.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mount}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 0,
//       }}
//     />
//   );
// }




// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs3Denv() {
//   const mount = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mount.current) return;

//     ScrollTrigger.normalizeScroll(true);
//     gsap.ticker.lagSmoothing(0);

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       500
//     );

//     // START CAMERA
//     const startPos = new THREE.Vector3(
//       138.08809545856857,
//       7.574525448612621,
//       43.26865809007038
//     );

//     const startTarget = new THREE.Vector3(
//       138.14436001829094,
//       7.666819064349882,
//       44.26412494828112
//     );

//     camera.position.copy(startPos);

//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//       powerPreference: "high-performance",
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mount.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enabled = false;

//     // scene.add(new THREE.AmbientLight(0xffffff, 1));

//     scene.add(new THREE.AmbientLight(0xffffff, 0.6));

//     const dir = new THREE.DirectionalLight(0xffffff, 1.5);
//     dir.position.set(5, 10, 5);
//     scene.add(dir);

//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.outputColorSpace = THREE.SRGBColorSpace;


//     // ================= DARK BACKDROP =================

//     const darkPlane = new THREE.Mesh(
//       new THREE.PlaneGeometry(1000, 1000),
//       new THREE.MeshBasicMaterial({
//         color: 0x000000,
//         transparent: true,
//         opacity: 1,
//         depthWrite: false,
//       })
//     );

//     darkPlane.position.z = -200;
//     scene.add(darkPlane);

//     // =================================================

//     const loader = new GLTFLoader();
//     let mixer: THREE.AnimationMixer | undefined;

//     loader.load("/models/Comparitor.glb", (gltf) => {
//       const model = gltf.scene;

//       model.scale.set(1.3, 1.3, 1.3);

//       scene.add(model);

//       const box = new THREE.Box3().setFromObject(model);
//       const center = box.getCenter(new THREE.Vector3());
//       model.position.sub(center);

//       camera.position.copy(startPos);
//       controls.target.copy(startTarget);

//       if (gltf.animations.length) {
//         mixer = new THREE.AnimationMixer(model);
//         gltf.animations.forEach((clip) =>
//           mixer!.clipAction(clip).play()
//         );
//       }
//     });

//     // ================= GSAP PROGRESS =================

//     const progress = { value: 0 };
//     const smooth = { value: 0 };

//     ScrollTrigger.create({
//       trigger: ".hero",
//       start: "top top",
//       end: "+=4500",
//       scrub: 2,
//       onUpdate: (self) => {
//         progress.value = self.progress;
//       },
//     });

//     // =================================================

//     const zoomDir = new THREE.Vector3()
//       .subVectors(startPos, startTarget)
//       .normalize();

//     const clock = new THREE.Clock();

//     const resize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", resize);

//     const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixer) mixer.update(clock.getDelta());

//       // EXTRA SMOOTH
//       smooth.value += (progress.value - smooth.value) * 0.05;

//       const eased = easeOut(smooth.value);

//       // ZOOM
//       const zoomDistance = eased * 120;

//       // UPWARD DRIFT
//       const lift = eased * 6;

//       camera.position
//         .copy(startPos)
//         .addScaledVector(zoomDir, zoomDistance);

//       camera.position.y += lift;

//       camera.lookAt(startTarget);

//       // DARK FADE
//       darkPlane.material.opacity = 1 - eased;

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       ScrollTrigger.killAll();
//       controls.dispose();
//       renderer.dispose();
//       mount.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return (
//     <div
//       ref={mount}
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 0,
//       }}
//     />
//   );
// }



// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutUs3Denv() {
//   const mount = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!mount.current) return;

//     ScrollTrigger.normalizeScroll(true);
//     gsap.ticker.lagSmoothing(0);

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       500
//     );

//     const startPos = new THREE.Vector3(
//       138.08809545856857,
//       7.574525448612621,
//       43.26865809007038
//     );

//     const startTarget = new THREE.Vector3(
//       138.14436001829094,
//       7.666819064349882,
//       44.26412494828112
//     );

//     camera.position.copy(startPos);

//     const renderer = new THREE.WebGLRenderer({
//       alpha: true,
//       antialias: true,
//       powerPreference: "high-performance",
//     });

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mount.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enabled = false;

//     scene.add(new THREE.AmbientLight(0xffffff, 0.6));

//     const dir = new THREE.DirectionalLight(0xffffff, 1.5);
//     dir.position.set(5, 10, 5);
//     scene.add(dir);

//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.outputColorSpace = THREE.SRGBColorSpace;

//     const darkPlane = new THREE.Mesh(
//       new THREE.PlaneGeometry(1000, 1000),
//       new THREE.MeshBasicMaterial({
//         color: 0x000000,
//         transparent: true,
//         opacity: 1,
//       })
//     );

//     darkPlane.position.z = -200;
//     scene.add(darkPlane);
    

//     const loader = new GLTFLoader();
//     let mixer: THREE.AnimationMixer | undefined;
//     let modelRef: THREE.Group | null = null;

//     loader.load("/models/Comparitor.glb", (gltf) => {
//       modelRef = gltf.scene;

//       modelRef.scale.set(1.3, 1.3, 1.3);

//       modelRef.traverse((c: any) => {
//         if (c.isMesh) {
//           c.material.transparent = true;
//           c.material.opacity = 1;
//         }
//       });

//       scene.add(modelRef);

//       const box = new THREE.Box3().setFromObject(modelRef);
//       const center = box.getCenter(new THREE.Vector3());
//       modelRef.position.sub(center);

//       controls.target.copy(startTarget);

//       if (gltf.animations.length) {
//         mixer = new THREE.AnimationMixer(modelRef);
//         gltf.animations.forEach((clip) =>
//           mixer!.clipAction(clip).play()
//         );
//       }
//     });

//     const progress = { value: 0 };
//     const smooth = { value: 0 };

//     ScrollTrigger.create({
//       trigger: ".hero",
//       start: "top top",
//       end: "+=4500",
//       scrub: 2,
//       onUpdate: (self) => (progress.value = self.progress),
//     });

//     const zoomDir = new THREE.Vector3()
//       .subVectors(startPos, startTarget)
//       .normalize();

//     const clock = new THREE.Clock();

//     const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       if (mixer) mixer.update(clock.getDelta());

//       smooth.value += (progress.value - smooth.value) * 0.05;
//       const eased = easeOut(smooth.value);

//       // BACK MOVE
//       const zoom = eased * 210;

//       // DELAYED UP MOVE
//       const liftProgress = Math.max(0, (eased - 0.3) / 0.5);
//       const lift = easeOut(liftProgress) * 50;

//       camera.position.copy(startPos).addScaledVector(zoomDir, zoom);
//       camera.position.y += lift;

//       camera.lookAt(startTarget);

//       // BACKDROP FADE
//       darkPlane.material.opacity = 1 - eased;

//       // MODEL FADE SYNCED WITH UP MOVE
//       if (modelRef) {
//         const fade = 1 - liftProgress;
//         modelRef.traverse((c: any) => {
//           if (c.isMesh) c.material.opacity = fade;
//         });
//       }

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       ScrollTrigger.killAll();
//       renderer.dispose();
//       mount.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mount} style={{ position: "fixed", inset: 0 }} />;
// }



import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs3Denv() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mount.current) return;

    ScrollTrigger.normalizeScroll(true);
    gsap.ticker.lagSmoothing(0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );

    const startPos = new THREE.Vector3(
      138.08809545856857,
      7.574525448612621,
      43.26865809007038
    );

    const startTarget = new THREE.Vector3(
      138.14436001829094,
      7.666819064349882,
      44.26412494828112
    );

    camera.position.copy(startPos);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const dir = new THREE.DirectionalLight(0xffffff, 1.5);
    dir.position.set(5, 10, 5);
    scene.add(dir);

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const darkPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 1,
      })
    );

    darkPlane.position.z = -200;
    scene.add(darkPlane);

    const loader = new GLTFLoader();
    let mixer: THREE.AnimationMixer | undefined;
    let modelRef: THREE.Group | null = null;

    // ===== PARTICLE REFERENCES =====
    let particleMesh: THREE.Mesh | null = null;
    let particleBase: Float32Array | null = null;

    loader.load("/models/Comparitor.glb", (gltf) => {
      modelRef = gltf.scene;

      modelRef.scale.set(1.3, 1.3, 1.3);

      modelRef.traverse((c: any) => {
        if (c.isMesh) {
          c.material.transparent = true;
          c.material.opacity = 1;

          // ONLY Plane.002 (your geometry node particles)
          if (c.name === "Plane.002") {
            particleMesh = c;
            const geo = c.geometry;
            particleBase = (geo.attributes.position.array as Float32Array).slice();
          }
        }
      });

      scene.add(modelRef);

      const box = new THREE.Box3().setFromObject(modelRef);
      const center = box.getCenter(new THREE.Vector3());
      modelRef.position.sub(center);

      controls.target.copy(startTarget);

      if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(modelRef);
        gltf.animations.forEach((clip) =>
          mixer!.clipAction(clip).play()
        );
      }
    });

    const progress = { value: 0 };
    const smooth = { value: 0 };

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "+=4500",
      scrub: 2,
      onUpdate: (self) => (progress.value = self.progress),
    });

    const zoomDir = new THREE.Vector3()
      .subVectors(startPos, startTarget)
      .normalize();

    const clock = new THREE.Clock();

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      requestAnimationFrame(animate);

      if (mixer) mixer.update(clock.getDelta());

      smooth.value += (progress.value - smooth.value) * 0.05;
      const eased = easeOut(smooth.value);

      const zoom = eased * 210;
      const liftProgress = Math.max(0, (eased - 0.3) / 0.5);
      const lift = easeOut(liftProgress) * 50;

      camera.position.copy(startPos).addScaledVector(zoomDir, zoom);
      camera.position.y += lift;
      camera.lookAt(startTarget);

      darkPlane.material.opacity = 1 - eased;

      if (modelRef) {
        const fade = 1 - liftProgress;
        modelRef.traverse((c: any) => {
          if (c.isMesh) c.material.opacity = fade;
        });
      }

      // ===== THREE.JS PARTICLE ANIMATION (ONLY Plane.002) =====

      if (particleMesh && particleBase) {
        const geo = particleMesh.geometry;
        const pos = geo.attributes.position.array as Float32Array;
        const t = clock.elapsedTime;

        for (let i = 0; i < pos.length; i += 3) {
          pos[i]     = particleBase[i]     + Math.sin(t + i) * 0.6;
          pos[i + 1] = particleBase[i + 1] + Math.cos(t + i) * 0.8;
          pos[i + 2] = particleBase[i + 2] + Math.sin(t * 0.5 + i) * 0.6;
        }

        geo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      ScrollTrigger.killAll();
      renderer.dispose();
      mount.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} style={{ position: "fixed", inset: 0 }} />;
}