"use client";

import { Float, Line, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

type Connection = {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
};

function latLngToVector(lat: number, lng: number, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function buildArc(start: THREE.Vector3, end: THREE.Vector3, lift = 0.36) {
  const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(1 + lift);
  return [start, mid, end];
}

function GlobeNetwork() {
  const groupRef = useRef<Group>(null);
  const starsRef = useRef<Group>(null);
  const ringRef = useRef<Group>(null);

  const nodes = useMemo(() => {
    const coords = [
      [40.7, -74],
      [51.5, -0.1],
      [28.6, 77.2],
      [1.3, 103.8],
      [35.6, 139.7],
      [-33.9, 151.2],
      [25.2, 55.2],
      [19.1, 72.8],
      [13.1, 80.2],
      [48.8, 2.3],
      [52.5, 13.4],
      [37.7, -122.4],
      [-23.5, -46.6]
    ] as const;

    return coords.map(([lat, lng]) => latLngToVector(lat, lng, 1.02));
  }, []);

  const connections = useMemo<Connection[]>(() => {
    const pairs: Array<[number, number]> = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [6, 2],
      [7, 8],
      [8, 3],
      [9, 10],
      [10, 0],
      [11, 0],
      [12, 1],
      [6, 4],
      [2, 9]
    ];

    return pairs.map(([a, b], index) => ({
      start: nodes[a],
      end: nodes[b],
      color: index % 3 === 0 ? "#63e9ff" : index % 3 === 1 ? "#36b8ff" : "#7be9ff"
    }));
  }, [nodes]);

  const continentDots = useMemo(() => {
    return Array.from({ length: 220 }, (_, index) => {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      // Keep more dots on visible latitude bands for a premium map-like effect.
      const latWeight = 1 - Math.abs(y) * 0.7;
      const scale = 1.01 + latWeight * 0.015;

      return {
        key: `dot-${index}`,
        position: new THREE.Vector3(x * scale, y * scale, z * scale),
        size: latWeight > 0.45 ? 0.007 : 0.0045,
        opacity: 0.45 + latWeight * 0.3
      };
    });
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 90 }, (_, index) => ({
      key: `star-${index}`,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        -1.8 - Math.random() * 2
      ] as [number, number, number],
      size: 0.01 + Math.random() * 0.02,
      color: Math.random() > 0.5 ? "#7ce8ff" : "#c4f4ff"
    }));
  }, []);

  const satellites = useMemo(() => {
    return Array.from({ length: 4 }, (_, index) => {
      const angle = (index / 4) * Math.PI * 2;
      const radius = 1.72 + (index % 2) * 0.08;
      return {
        key: `sat-${index}`,
        position: [Math.cos(angle) * radius, Math.sin(angle * 1.3) * 0.46, Math.sin(angle) * radius] as [number, number, number]
      };
    });
  }, []);

  const atmosphereParticles = useMemo(() => {
    return Array.from({ length: 120 }, (_, index) => {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.18 + Math.random() * 0.18;

      return {
        key: `atm-${index}`,
        position: [
          Math.sin(phi) * Math.cos(theta) * radius,
          Math.cos(phi) * radius,
          Math.sin(phi) * Math.sin(theta) * radius
        ] as [number, number, number],
        size: 0.006 + Math.random() * 0.006,
        opacity: 0.25 + Math.random() * 0.35
      };
    });
  }, []);

  const continentClusters = useMemo(() => {
    return nodes.map((node, index) => ({
      key: `cluster-${index}`,
      position: node.clone().multiplyScalar(0.98),
      size: index % 3 === 0 ? 0.085 : 0.06,
      color: index % 2 === 0 ? "#1ec8ff" : "#7a5cff"
    }));
  }, [nodes]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.12;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.22) * 0.06;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.18) * 0.08;
      ringRef.current.rotation.y = clock.elapsedTime * 0.06;
    }

    if (starsRef.current) {
      starsRef.current.rotation.z = clock.elapsedTime * 0.01;
    }
  });

  return (
    <>
      <group ref={starsRef}>
        {stars.map((star) => (
          <Sphere key={star.key} args={[star.size, 8, 8]} position={star.position}>
            <meshBasicMaterial color={star.color} transparent opacity={0.85} />
          </Sphere>
        ))}
      </group>

      <Float speed={0.85} rotationIntensity={0.06} floatIntensity={0.18}>
        <group ref={groupRef}>
          <Sphere args={[1, 80, 80]}>
            <meshPhysicalMaterial
              color="#041224"
              roughness={0.55}
              metalness={0.15}
              transmission={0.15}
              transparent
              opacity={0.95}
              clearcoat={1}
              clearcoatRoughness={0.25}
            />
          </Sphere>

          <Sphere args={[0.99, 80, 80]}>
            <meshStandardMaterial color="#0c3c5b" emissive="#0b89b9" emissiveIntensity={0.2} transparent opacity={0.12} />
          </Sphere>

          <Sphere args={[1.08, 64, 64]}>
            <meshBasicMaterial color="#22d8ff" transparent opacity={0.1} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
          </Sphere>

          <Sphere args={[1.16, 64, 64]}>
            <meshBasicMaterial color="#7a5cff" transparent opacity={0.06} side={THREE.BackSide} blending={THREE.AdditiveBlending} />
          </Sphere>

          <Sphere args={[1.035, 72, 72]}>
            <meshPhysicalMaterial
              color="#0b253f"
              roughness={0.2}
              metalness={0.25}
              transparent
              opacity={0.26}
              clearcoat={1}
              clearcoatRoughness={0.12}
            />
          </Sphere>

          <group ref={ringRef}>
            <Torus args={[1.32, 0.008, 16, 220]} rotation={[Math.PI / 2.2, 0.1, 0.28]}>
              <meshBasicMaterial color="#67e8f9" transparent opacity={0.32} blending={THREE.AdditiveBlending} />
            </Torus>

            <Torus args={[1.5, 0.007, 16, 220]} rotation={[Math.PI / 2.75, -0.22, -0.06]}>
              <meshBasicMaterial color="#8b5cf6" transparent opacity={0.18} blending={THREE.AdditiveBlending} />
            </Torus>

            <Torus args={[1.68, 0.005, 16, 220]} rotation={[Math.PI / 2.35, 0.14, 0.08]}>
              <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} blending={THREE.AdditiveBlending} />
            </Torus>
          </group>

          {continentClusters.map((cluster) => (
            <Sphere key={cluster.key} args={[cluster.size, 16, 16]} position={cluster.position.toArray()}>
              <meshBasicMaterial color={cluster.color} transparent opacity={0.1} blending={THREE.AdditiveBlending} />
            </Sphere>
          ))}

          {continentDots.map((dot) => (
            <Sphere key={dot.key} args={[dot.size, 8, 8]} position={dot.position}>
              <meshStandardMaterial color="#6fefff" emissive="#24dfff" emissiveIntensity={1.8} transparent opacity={dot.opacity} />
            </Sphere>
          ))}

          {connections.map((connection, index) => (
            <Line
              key={`connection-${index}`}
              points={buildArc(connection.start, connection.end, index % 2 === 0 ? 0.42 : 0.32)}
              color={connection.color}
              transparent
              opacity={0.92}
              lineWidth={1.8}
            />
          ))}

          {nodes.map((node, index) => (
            <Sphere key={`node-${index}`} args={[0.019, 12, 12]} position={node}>
              <meshStandardMaterial
                color={index % 2 === 0 ? "#6fefff" : "#38bcff"}
                emissive={index % 2 === 0 ? "#22d8ff" : "#0ea5ff"}
                emissiveIntensity={2.2}
              />
            </Sphere>
          ))}

          {satellites.map((sat, index) => (
            <Sphere key={sat.key} args={[0.017, 10, 10]} position={sat.position}>
              <meshStandardMaterial
                color={index % 2 ? "#c4b5fd" : "#7dd3fc"}
                emissive={index % 2 ? "#8b5cf6" : "#0ea5ff"}
                emissiveIntensity={2.2}
              />
            </Sphere>
          ))}

          {atmosphereParticles.map((particle) => (
            <Sphere key={particle.key} args={[particle.size, 8, 8]} position={particle.position}>
              <meshBasicMaterial color="#9fe8ff" transparent opacity={particle.opacity} />
            </Sphere>
          ))}
        </group>
      </Float>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.7], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#030712"]} />
      <fog attach="fog" args={["#030712", 5.8, 11]} />

      <ambientLight intensity={0.52} />
      <pointLight position={[3, 2.6, 3]} intensity={20} color="#22d8ff" />
      <pointLight position={[-2.6, -2.2, 2.2]} intensity={12} color="#1b87ff" />
      <pointLight position={[0, -2.6, 2.6]} intensity={9} color="#8b5cf6" />

      <GlobeNetwork />
    </Canvas>
  );
}
