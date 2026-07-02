import { Environment, AccumulativeShadows, RandomizedLight, ContactShadows, Lightformer } from "@react-three/drei";

export function CinematicLighting() {
  return (
    <>
      {/* 
        Synthetic Studio Environment (No external HDR downloads)
        Creates soft studio reflections without relying on CDNs
      */}
      <Environment resolution={256} environmentIntensity={0.6}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={1} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 2, 1]} />
          <Lightformer intensity={1} rotation-y={-Math.PI / 2} position={[5, 1, -1]} scale={[20, 2, 1]} />
        </group>
      </Environment>

      {/* Primary Key Light */}
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.2}
        color="#ffffff"
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
      />
      
      {/* Fill Light (Soft warm bounce) */}
      <ambientLight intensity={0.2} color="#f5f2eb" />

      {/* 
        Accumulative Shadows:
        A technique that accumulates shadows over multiple frames from a randomized light source,
        creating ultra-realistic, soft, contact-accurate ambient occlusion / shadows on the floor.
      */}
      <AccumulativeShadows
        temporal // Accumulate over time
        frames={100} // Number of frames to accumulate
        color="#000000"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={0.8}
        scale={10}
        position={[0, -0.01, 0]} // Just below the model
      >
        <RandomizedLight
          amount={8} // Number of lights
          radius={5} // Softness of the shadow
          ambient={0.5}
          intensity={1}
          position={[5, 5, -5]}
          bias={0.001}
        />
      </AccumulativeShadows>

      {/* 
        Contact Shadows: 
        Additional grounded feeling for the very base of the furniture
      */}
      <ContactShadows
        position={[0, 0, 0]}
        scale={5}
        resolution={1024}
        far={2}
        blur={2}
        opacity={0.4}
        color="#000000"
      />
    </>
  );
}
