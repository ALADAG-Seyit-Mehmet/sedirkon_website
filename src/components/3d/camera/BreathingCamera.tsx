import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export function BreathingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  // Cinematic slow breathing animation
  // Based on Math.sin for a smooth, endless subtle loop
  useFrame((state) => {
    if (!cameraRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Very subtle sway and breathing (up/down, left/right)
    const xOffset = Math.sin(time * 0.2) * 0.1;
    const yOffset = Math.cos(time * 0.3) * 0.05;
    const zOffset = Math.sin(time * 0.1) * 0.1;

    // We keep the camera slightly above eye level and look at the center
    cameraRef.current.position.set(
      3 + xOffset, // x
      1.5 + yOffset, // y (slightly above eye level)
      5 + zOffset  // z (distance)
    );
    
    cameraRef.current.lookAt(0, 0.5, 0); // Focus slightly above origin
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      fov={35} // 35mm equivalent field of view
      near={0.1}
      far={100}
    />
  );
}
