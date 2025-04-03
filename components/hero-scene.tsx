"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Points } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useTheme } from "next-themes";

// Particles Animation
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <pointsMaterial
        size={0.04}
        color={isDarkMode ? "white" : "gray"}
        opacity={0.7}
        transparent
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        map={new THREE.TextureLoader().load(
          "https://threejs.org/examples/textures/sprites/disc.png"
        )}
        alphaTest={0.5}
      />
    </Points>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ParticleSystem />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      </Canvas>
    </div>
  );
}
