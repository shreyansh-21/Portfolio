import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
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

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      <mesh castShadow receiveShadow scale={1.2}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#656565"
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
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
        alpha: true
      }}
      camera={{ 
        position: [0, 0, 4],
        fov: 50
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;