import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Interactive3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 6;

    // 3. Renderer with alpha (transparent background) and antialiasing
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 2, 50); // Gold light
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x1e3a8a, 1.5, 50); // Navy light
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // 5. Create 3D Objects: An Affiliate Network Globe representation
    // Outer Sphere of connected nodes (using Points)
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Color definitions
    const goldColor = new THREE.Color(0xd4af37);
    const navyColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution (Fibonacci sphere)
      const k = i + 0.5;
      const phi = Math.acos(1 - (2 * k) / particleCount);
      const theta = Math.PI * (1 + 5 ** 0.5) * k;

      const radius = 3;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Blend gold and blue colors
      const t = Math.random();
      const mixedColor = new THREE.Color().lerpColors(navyColor, goldColor, t);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, pointsMaterial);
    scene.add(particles);

    // Wireframe Octahedron/Icosahedron inside representing the core secure fund
    const innerGeometry = new THREE.IcosahedronGeometry(1.8, 1);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerCore);

    // Glowing core mesh
    const coreGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.4,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // 6. Interaction Variables
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    let scrollProgress = 0;
    let targetScroll = 0;

    // Track cursor movement
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Track scroll positioning
    const onScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScroll = scrolled / maxScroll;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    // 7. Resize Observer for fluid responsiveness
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        camera.aspect = w / (h || 400);
        camera.updateProjectionMatrix();
        renderer.setSize(w, h || 400);
      }
    });
    resizeObserver.observe(container);

    // 8. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Smooth scroll easing
      scrollProgress += (targetScroll - scrollProgress) * 0.1;

      // Rotations based on time + cursor + scroll progress
      particles.rotation.y = elapsedTime * 0.05 + targetX * 0.5 + scrollProgress * 3;
      particles.rotation.x = elapsedTime * 0.02 + targetY * 0.5;

      innerCore.rotation.y = -elapsedTime * 0.08 - targetX * 0.3 + scrollProgress * 2;
      innerCore.rotation.x = -elapsedTime * 0.04;

      // Core pulsating effect
      const scaleVal = 1 + Math.sin(elapsedTime * 3) * 0.15;
      coreMesh.scale.set(scaleVal, scaleVal, scaleVal);

      // Camera dynamic zoom based on scroll
      camera.position.z = 6 - scrollProgress * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      geometry.dispose();
      pointsMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border border-slate-800 shadow-2xl">
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" id="threejs-canvas" />

      {/* Floating UI overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-none p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/60 shadow-lg">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <p className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">Interactive Network Node</p>
          </div>
          <h4 className="text-sm font-sans font-medium text-white mt-1">Vetted Lending & Broker Ecosystem</h4>
          <p className="text-xs font-sans text-slate-400 mt-0.5">Move your mouse to tilt; scroll the page to dynamically expand connections.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">120+ Core Connections</span>
        </div>
      </div>
    </div>
  );
}
