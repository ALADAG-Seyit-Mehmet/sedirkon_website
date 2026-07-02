import * as THREE from "three";
import { tokens } from "@/styles/tokens";

// Natural walnut wood material (placeholder procedural representation)
export const WalnutWoodMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color(tokens.colors.walnut[500]).convertSRGBToLinear(),
  roughness: 0.6,
  metalness: 0.1,
  clearcoat: 0.1, // Subtle polish
  clearcoatRoughness: 0.4,
});

// Matte black metal (often used for legs/frames)
export const MatteMetalMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color(tokens.colors.charcoal[950]).convertSRGBToLinear(),
  roughness: 0.8,
  metalness: 0.8, // High metalness but high roughness for matte finish
});

// Premium linen fabric (light cream/beige)
export const PremiumLinenMaterial = new THREE.MeshPhysicalMaterial({
  color: new THREE.Color(tokens.colors.cream[500]).convertSRGBToLinear(),
  roughness: 0.9,
  metalness: 0.0,
  clearcoat: 0.0,
  sheen: 0.3, // Fabric sheen
  sheenRoughness: 0.6,
  sheenColor: new THREE.Color(0xffffff).convertSRGBToLinear(),
});
