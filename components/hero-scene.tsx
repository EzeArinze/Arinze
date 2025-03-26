"use client";
import { useRef } from "react";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import type * as THREE from "three";

function CustomGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x =
      Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    meshRef.current.rotation.y =
      Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1 +
      state.clock.getElapsedTime() * 0.1;
    meshRef.current.rotation.z =
      Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.7} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={viewport.width / 10}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#FFD700"
          roughness={0.4}
          metalness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.8} />
        <CustomGeometry />
        <Environment preset="studio" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
