import { useRef } from "react";
import * as THREE from "three";
import { WalnutWoodMaterial, MatteMetalMaterial, PremiumLinenMaterial } from "./materials";

/**
 * Placeholder geometry representing a modernist furniture piece
 * (e.g., a lounge chair or side table)
 * Designed to showcase the premium materials until a real .glb is provided.
 */
export function ShowroomModel() {
  const groupRef = useRef<THREE.Group>(null);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      
      {/* Base / Legs (Matte Metal) */}
      <mesh position={[-0.4, 0.25, 0.4]} material={MatteMetalMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 32]} />
      </mesh>
      <mesh position={[0.4, 0.25, 0.4]} material={MatteMetalMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 32]} />
      </mesh>
      <mesh position={[-0.4, 0.25, -0.4]} material={MatteMetalMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 32]} />
      </mesh>
      <mesh position={[0.4, 0.25, -0.4]} material={MatteMetalMaterial} castShadow receiveShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 32]} />
      </mesh>

      {/* Main Wooden Structure (Walnut) */}
      <mesh position={[0, 0.55, 0]} material={WalnutWoodMaterial} castShadow receiveShadow>
        <boxGeometry args={[1, 0.1, 1]} />
      </mesh>

      {/* Cushion / Fabric (Linen) */}
      <mesh position={[0, 0.7, 0]} material={PremiumLinenMaterial} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.2, 0.9]} />
      </mesh>
      
    </group>
  );
}
