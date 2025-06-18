import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient & fill lights */}
      <ambientLight intensity={2.5} color="#ffffff" />
      <hemisphereLight intensity={1.8} groundColor="#333333" />
      <directionalLight position={[0, 10, 0]} intensity={4} castShadow />
      <pointLight position={[0, 3, 6]} intensity={3} color="#ffffff" />

      {/* ✅ Front-side spotlight */}
      <spotLight
        position={[10, 15, -5]}
        angle={0.4}
        intensity={2.2}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* ✅ New backlight spotlight (your addition) */}
      <spotLight
        position={[0, 2, -8]}
        angle={0.4}
        intensity={2.5}
        penumbra={1}
        color="#ffffff"
        castShadow
      />

      {/* Your laptop model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 1.35}
        position={isMobile ? [-8.5, -5, -2.2] : [-3.5, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>

  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
