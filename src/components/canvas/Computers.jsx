import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
  {/* Stronger ambient light for overall brightness */}
  <ambientLight intensity={1.5} color="#ffffff" />

  {/* Hemisphere light for soft bounce light */}
  <hemisphereLight intensity={1.2} groundColor="#222222" />

  {/* Top light shining down to reveal details */}
  <directionalLight
    position={[0, 10, 0]}
    intensity={3.5}
    color="#ffffff"
    castShadow
    shadow-mapSize={2048}
  />

  {/* Front point light to brighten the screen and keyboard area */}
  <pointLight
    position={[0, 2, 5]}
    intensity={2}
    color="#ffffff"
  />

  {/* Optional soft rim light from left to give depth */}
  <spotLight
    position={[-10, 15, 10]}
    angle={0.3}
    intensity={1.5}
    penumbra={0.8}
    castShadow
    shadow-mapSize={1024}
  />

  {/* ✨ Your exact model values, untouched */}
  <primitive
    object={computer.scene}
    scale={isMobile ? 0.9 : 1.25}
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
