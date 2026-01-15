import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Billboard } from '@react-three/drei';

// Helper to create an arrow
function Arrow({ position = [0, 0, 0], rotation = [0, 0, 0], color = '#4F7C82' }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Arrow shaft */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* Arrow head */}
      <mesh position={[0, 0.45, 0]}>
        <coneGeometry args={[0.12, 0.18, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}

const stageColors = [
  '#dbeafe', // Raw Material - Light blue
  '#93c5fd', // Production - Medium blue
  '#3b82f6', // Product - Primary blue
  '#f97316', // Use - Orange
  '#60a5fa', // Recycling - Blue variant
];
const stageLabels = [
  'Raw Material',
  'Production',
  'Product',
  'Use',
  'Recycling',
];

const Model = () => {
  const group = useRef(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  // Positions for 5 stages around a circle
  const radius = 2.2;
  const points = Array.from({ length: 5 }).map((_, i) => {
    const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
    return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius];
  });

  // TextLabel with Billboard to always face camera correctly
  function TextLabel({ position, children }: { position: [number, number, number]; children: string }) {
    return (
      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
        <Text
          position={position}
          fontSize={0.3}
          color="#1e3a8a"
          anchorX="center"
          anchorY="middle"
          outlineColor="#ffffff"
          outlineWidth={0.03}
          fontWeight="bold"
        >
          {children}
        </Text>
      </Billboard>
    );
  }

  return (
    <group ref={group}>
      {/* Circular cycle (torus) */}
      <mesh>
        <torusGeometry args={[2.2, 0.08, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* Stages (spheres) and labels */}
      {points.map((pos, i) => (
        <group key={i}>
          <mesh position={pos} castShadow>
            <sphereGeometry args={[0.28, 32, 32]} />
            <meshStandardMaterial color={stageColors[i]} />
          </mesh>
          <group position={[pos[0], pos[1] + 0.55, pos[2]]}>
            <TextLabel position={[0, 0, 0]}>{stageLabels[i]}</TextLabel>
          </group>
        </group>
      ))}
      {/* Arrows between stages */}
      {points.map((pos, i) => {
        // Arrow points from this stage to the next
        const next = points[(i + 1) % points.length];
        // Midpoint for arrow
        const mid = [
          (pos[0] + next[0]) / 2,
          0.18,
          (pos[2] + next[2]) / 2,
        ];
        // Angle for arrow rotation
        const angle = Math.atan2(next[2] - pos[2], next[0] - pos[0]);
        return (
          <Arrow
            key={i}
            position={mid}
            rotation={[0, -angle, Math.PI / 2]}
            color="#f97316"
          />
        );
      })}
    </group>
  );
};

export default Model;
