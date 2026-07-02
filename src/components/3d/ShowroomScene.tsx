"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import { CinematicLighting } from "./environment/CinematicLighting";
import { BreathingCamera } from "./camera/BreathingCamera";
import { ShowroomModel } from "./ShowroomModel";

export default function ShowroomScene() {
  return (
    <Canvas shadows gl={{ antialias: true, alpha: true }}>
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
