import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  // ✅ Smooth animation: float + sway + breathing
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Floating
      meshRef.current.position.y =
        (isMobile ? -5 : -4.25) + Math.sin(t * 0.8) * 0.08;

      // Subtle sway (Y rotation)
      meshRef.current.rotation.y = -0.2 + Math.sin(t * 0.5) * 0.05;

      // Breathing effect (scale pulse)
      const scale = (isMobile ? 0.9 : 1.35) + Math.sin(t * 1.2) * 0.015;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh>
      {/* Lights */}
      <ambientLight intensity={2.5} color="#ffffff" />
      <hemisphereLight intensity={1.8} groundColor="#333333" />
      <directionalLight position={[0, 10, 0]} intensity={4} castShadow />
      <pointLight position={[0, 3, 6]} intensity={3} color="#ffffff" />

      <spotLight
        position={[10, 15, -5]}
        angle={0.4}
        intensity={2.2}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[0, 2, -8]}
        angle={0.4}
        intensity={2.5}
        penumbra={1}
        color="#ffffff"
        castShadow
      />

      {/* Animated model */}
      <primitive
        ref={meshRef}
        object={computer.scene}
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
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
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
