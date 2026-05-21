"use client";

import { Float, Line, Sparkles, Sphere, Torus, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function LogoMark({ position = [-1.15, -0.25, 0] as [number, number, number] }) {
  return (
    <group position={position} scale={0.78} rotation={[0, 0, -0.05]}>
      <group rotation={[0.05, 0, -0.78]}>
        <RoundedBox args={[0.36, 1.92, 0.18]} radius={0.08} smoothness={8} position={[0, 0, 0]}>
          <meshStandardMaterial color="#7A5CFF" emissive="#7A5CFF" emissiveIntensity={1.35} metalness={0.82} roughness={0.18} />
        </RoundedBox>
        <mesh position={[0, 1.16, 0]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.58, 0.78, 4, 1]} />
          <meshStandardMaterial color="#22D8FF" emissive="#00A3FF" emissiveIntensity={1.6} metalness={0.85} roughness={0.16} />
        </mesh>
      </group>
      <Torus args={[0.58, 0.09, 18, 72, Math.PI * 1.35]} rotation={[0, 0, -0.65]} position={[-0.08, -0.45, -0.02]}>
        <meshStandardMaterial color="#293CFF" emissive="#293CFF" emissiveIntensity={1.25} metalness={0.85} roughness={0.18} />
      </Torus>
      {[
        [-0.82, 0.32, 0.02, 0.13],
        [-0.58, 0.58, 0.02, 0.16],
        [-0.31, 0.84, 0.02, 0.19]
      ].map(([x, y, z, size], index) => (
        <RoundedBox key={index} args={[size, size, 0.1]} radius={0.02} position={[x, y, z]}>
          <meshStandardMaterial color="#8C42FF" emissive="#7A35FF" emissiveIntensity={1.35} metalness={0.75} roughness={0.2} />
        </RoundedBox>
      ))}
    </group>
  );
}

function Robot({ position = [1.15, -0.42, 0.15] as [number, number, number] }) {
  return (
    <group position={position} scale={0.82}>
      <Float speed={1.4} floatIntensity={0.24} rotationIntensity={0.16}>
        <RoundedBox args={[0.95, 0.58, 0.52]} radius={0.22} smoothness={12} position={[0, 0.88, 0]}>
          <meshStandardMaterial color="#dfe9ff" metalness={0.72} roughness={0.2} />
        </RoundedBox>
        <RoundedBox args={[0.7, 0.28, 0.08]} radius={0.12} smoothness={8} position={[0, 0.88, 0.28]}>
          <meshStandardMaterial color="#07101d" emissive="#001526" emissiveIntensity={0.7} metalness={0.5} roughness={0.16} />
        </RoundedBox>
        {[-0.22, 0.22].map((x) => (
          <Sphere key={x} args={[0.065, 20, 20]} position={[x, 0.9, 0.34]}>
            <meshStandardMaterial color="#22D8FF" emissive="#22D8FF" emissiveIntensity={3.2} />
          </Sphere>
        ))}
        {[-0.58, 0.58].map((x) => (
          <Sphere key={x} args={[0.18, 24, 24]} position={[x, 0.88, 0]}>
            <meshStandardMaterial color="#1C7CFF" emissive="#005CFF" emissiveIntensity={1.2} metalness={0.78} roughness={0.18} />
          </Sphere>
        ))}
        <RoundedBox args={[0.66, 0.72, 0.42]} radius={0.2} smoothness={10} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#d9e7ff" metalness={0.65} roughness={0.22} />
        </RoundedBox>
        <Sphere args={[0.16, 24, 24]} position={[0, 0.2, 0.28]}>
          <meshStandardMaterial color="#22D8FF" emissive="#22D8FF" emissiveIntensity={2.1} />
        </Sphere>
        {[-0.52, 0.52].map((x) => (
          <RoundedBox key={x} args={[0.2, 0.52, 0.22]} radius={0.1} smoothness={8} position={[x, 0.1, 0]} rotation={[0, 0, x > 0 ? -0.22 : 0.22]}>
            <meshStandardMaterial color="#243251" metalness={0.75} roughness={0.2} />
          </RoundedBox>
        ))}
        <Torus args={[0.62, 0.06, 18, 96]} position={[0, -0.42, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#172447" emissive="#293CFF" emissiveIntensity={0.7} metalness={0.8} roughness={0.16} />
        </Torus>
      </Float>
    </group>
  );
}

function NeuralScene() {
  const groupRef = useRef<Group>(null);
  const orbRef = useRef<Mesh>(null);
  const points = useMemo(() => {
    return Array.from({ length: 26 }, (_, index) => {
      const angle = index * 0.72;
      const radius = 1.55 + (index % 4) * 0.22;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(index * 0.54) * 1.05,
        Math.sin(angle) * radius * 0.72
      );
    });
  }, []);

  useFrame(({ clock, pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.18 + pointer.x * 0.18;
      groupRef.current.rotation.x = pointer.y * 0.08;
    }
    if (orbRef.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 1.4) * 0.025;
      orbRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.3} floatIntensity={0.46} rotationIntensity={0.22}>
        <Sphere ref={orbRef} args={[0.72, 48, 48]} position={[0, 0.05, 0]}>
          <meshPhysicalMaterial color="#88eaff" emissive="#00A3FF" emissiveIntensity={0.62} metalness={0.35} roughness={0.08} transmission={0.38} transparent opacity={0.58} />
        </Sphere>
        <Torus args={[1.55, 0.012, 12, 128]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#22D8FF" emissive="#22D8FF" emissiveIntensity={2} />
        </Torus>
        <Torus args={[1.95, 0.01, 12, 128]} rotation={[0.82, 0.15, 0.42]}>
          <meshStandardMaterial color="#8C42FF" emissive="#7A35FF" emissiveIntensity={1.55} />
        </Torus>
        <LogoMark />
        <Robot />
      </Float>

      {points.map((point, index) => (
        <Sphere key={index} args={[index % 5 === 0 ? 0.055 : 0.038, 16, 16]} position={point}>
          <meshStandardMaterial color={index % 2 ? "#8C42FF" : "#B9FFFF"} emissive={index % 2 ? "#7A35FF" : "#22D8FF"} emissiveIntensity={2.2} />
        </Sphere>
      ))}
      {points.slice(0, 16).map((point, index) => (
        <Line
          key={`line-${index}`}
          points={[point, points[(index * 4 + 5) % points.length]]}
          color={index % 2 ? "#7A35FF" : "#22D8FF"}
          transparent
          opacity={0.24}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0.3, 5.4], fov: 48 }} dpr={[1, 1.25]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.64} />
      <spotLight position={[0, 4, 4]} angle={0.38} penumbra={0.8} intensity={24} color="#22D8FF" />
      <pointLight position={[3, 2.4, 3]} intensity={34} color="#22D8FF" />
      <pointLight position={[-3, -1, 2]} intensity={28} color="#8C42FF" />
      <NeuralScene />
      <Sparkles count={64} speed={0.24} size={1.8} scale={[7, 4, 4]} color="#b9ffff" />
    </Canvas>
  );
}
