"use client";

import * as THREE from "three";

// Suppress known noisy Three.js warnings about deprecations and shader precision
if (typeof console !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.")) return;
    originalWarn(...args);
  };
}
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { CinematicLighting } from "./environment/CinematicLighting";
import { BreathingCamera } from "./camera/BreathingCamera";
import { ShowroomModel } from "./ShowroomModel";

export default function ShowroomScene() {
  return (
    <Canvas 
      shadows={{ type: THREE.PCFShadowMap }} 
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      }}
      onCreated={({ gl }) => {
        // Prevent random context loss where possible, and handle it gracefully
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          console.warn("WebGL Context Lost - gracefully handling");
        }, false);
      }}
    >
      <Suspense fallback={null}>
        <BreathingCamera />
        <CinematicLighting />
        
        {/* The object to display */}
        <ShowroomModel />
        
        {/* Performance optimizations */}
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Suspense>
    </Canvas>
  );
}
