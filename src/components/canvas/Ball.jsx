import { Canvas } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import CanvasLoader from "../Loader";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = ({ imgUrl }) => {
  const decal = useTexture(imgUrl);
  
  // Memoize the geometry to prevent recreation on every render
  const geometry = useMemo(() => [1, 2], []);

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.6}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 2, 5]} intensity={0.8} />
      <pointLight position={[-2, -2, -5]} intensity={0.3} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={geometry} />
        <meshStandardMaterial
          color="#656565"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.7}
          metalness={0.1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.2}
          map={decal}
          transparent
          depthTest={false}
          depthWrite={false}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance"
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 6]
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.05}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
