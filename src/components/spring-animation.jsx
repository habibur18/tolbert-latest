// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export function SpringAnimation() {
//   const containerRef = useRef(null);
//   const controls = useAnimation();
//   const isInView = useInView(containerRef);

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         scale: 1,
//         opacity: 1,
//         transition: { duration: 0.5 },
//       });
//     }
//   }, [isInView, controls]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(400, 400);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create spring geometry
//     const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-2, 0, 0), new THREE.Vector3(2, 0, 0)]);

//     const points = curve.getPoints(50);
//     const geometry = new THREE.TubeGeometry(curve, 64, 0.2, 8, false);

//     // Create spring material
//     const material = new THREE.MeshPhongMaterial({
//       color: 0x22c55e,
//       shininess: 100,
//       specular: 0x444444,
//     });

//     const spring = new THREE.Mesh(geometry, material);
//     scene.add(spring);

//     // Add lights
//     const light = new THREE.DirectionalLight(0xffffff, 1);
//     light.position.set(1, 1, 1);
//     scene.add(light);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     camera.position.z = 5;

//     // Animation
//     function animate() {
//       requestAnimationFrame(animate);
//       spring.rotation.x += 0.01;
//       spring.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     }

//     animate();

//     return () => {
//       containerRef.current?.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <motion.div ref={containerRef} initial={{ scale: 0.8, opacity: 0 }} animate={controls} className="h-full w-full" />;
// }

//! 2nd version
// "use client";

// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";
// import * as THREE from "three";

// export function SpringAnimation() {
//   const containerRef = useRef(null);
//   const controls = useAnimation();
//   const isInView = useInView(containerRef);
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         scale: 1,
//         opacity: 1,
//         transition: { duration: 0.5, type: "spring" },
//       });
//     }
//   }, [isInView, controls]);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     // Scene setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });

//     renderer.setSize(500, 500);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create proper spring geometry using parametric function
//     const createSpringGeometry = () => {
//       const radius = 2;
//       const height = 16;
//       const coils = 16;
//       const points = [];

//       for (let i = 0; i <= 100; i++) {
//         const t = (i / 100) * Math.PI * 2 * coils;
//         const x = radius * Math.cos(t);
//         const y = radius * Math.sin(t);
//         const z = (height * i) / 100 - height / 2;
//         points.push(new THREE.Vector3(x, z, y));
//       }

//       const path = new THREE.CatmullRomCurve3(points);
//       const geometry = new THREE.TubeGeometry(path, 64, 0.3, 16, false);

//       return geometry;
//     };

//     // Spring material
//     const springMaterial = new THREE.MeshPhongMaterial({
//       color: 0x3b82f6,
//       specular: 0xffffff,
//       shininess: 100,
//       emissive: 0x1d4ed8,
//       emissiveIntensity: 0.3,
//     });

//     const spring = new THREE.Mesh(createSpringGeometry(), springMaterial);
//     scene.add(spring);

//     // Lighting
//     const pointLight = new THREE.PointLight(0xffffff, 200);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     // Background gradient
//     const gradientTexture = new THREE.CanvasTexture(
//       (() => {
//         const canvas = document.createElement("canvas");
//         canvas.width = 256;
//         canvas.height = 256;
//         const ctx = canvas.getContext("2d");

//         const gradient = ctx.createLinearGradient(0, 0, 256, 256);
//         gradient.addColorStop(0, "#0f172a");
//         gradient.addColorStop(1, "#1e293b");
//         ctx.fillStyle = gradient;
//         ctx.fillRect(0, 0, 256, 256);
//         return canvas;
//       })()
//     );

//     scene.background = gradientTexture;

//     camera.position.z = 15;

//     // Mouse interaction
//     const handleMouseMove = (event) => {
//       mouse.current = {
//         x: (event.clientX / window.innerWidth) * 2 - 1,
//         y: (event.clientY / window.innerHeight) * 2 - 1,
//       };
//     };
//     window.addEventListener("mousemove", handleMouseMove);

//     // Animation loop
//     let animationFrameId;
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);

//       spring.rotation.x = mouse.current.y * 0.3;
//       spring.rotation.y = mouse.current.x * 0.3;
//       spring.rotation.z += 0.005;

//       // Spring bounce animation
//       spring.position.y = Math.sin(Date.now() * 0.002) * 0.5;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Cleanup
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//       containerRef.current?.removeChild(renderer.domElement);
//       scene.clear();
//     };
//   }, []);

//   return <motion.div ref={containerRef} initial={{ scale: 0.8, opacity: 0 }} animate={controls} className="h-[500px] w-[500px] rounded-full shadow-2xl overflow-hidden" />;
// }

"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpringAnimation() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, type: "spring" },
      });
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(600, 600);
    containerRef.current.appendChild(renderer.domElement);

    // Create a thicker, tightly coiled spring
    const createSpringGeometry = () => {
      const radius = 3; // Increased for a larger spring
      const height = 20; // Taller spring
      const coils = 18; // More coils to reduce gap
      const tubeRadius = 0.4; // Thicker for pipe-like appearance
      const points = [];

      for (let i = 0; i <= 200; i++) {
        // Higher resolution for smoothness
        const t = (i / 200) * Math.PI * 2 * coils;
        const x = radius * Math.cos(t);
        const y = radius * Math.sin(t);
        const z = (height * i) / 200 - height / 2;
        points.push(new THREE.Vector3(x, z, y));
      }

      const path = new THREE.CatmullRomCurve3(points);
      return new THREE.TubeGeometry(path, 128, tubeRadius, 32, false);
    };

    // Spring material
    const springMaterial = new THREE.MeshPhysicalMaterial({
      //   color: 0x3b82f6,
      color: 0x3b82f6,
      metalness: 0.7,
      roughness: 0.3,
      emissive: 0x2ecc71,
      //   emissive: 0x1d4ed8,
      emissiveIntensity: 0.3,
      clearcoat: 1, // Makes it shinier
      clearcoatRoughness: 0.1,
    });

    const spring = new THREE.Mesh(createSpringGeometry(), springMaterial);
    scene.add(spring);

    // Lighting
    const pointLight = new THREE.PointLight("green", 300);
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight("green", 0.6);
    scene.add(ambientLight);

    camera.position.z = 18; // Adjusted to fit the larger spring

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouse.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      spring.rotation.x = mouse.current.y * 0.3;
      spring.rotation.y = mouse.current.x * 0.3;
      spring.rotation.z += 0.005;

      spring.position.y = Math.sin(Date.now() * 0.002) * 0.4;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
    };
  }, []);

  return <motion.div ref={containerRef} initial={{ scale: 0.8, opacity: 0 }} animate={controls} className=" " />;
}
