import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "../Loader";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

const Earth = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("./planet/scene.gltf"); // 👈 Replace with your path
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Auto-play first available animation
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = Object.keys(actions)[0];
      actions[firstAction].play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.5}
      position={[0, -2.5, 0]} // Lower Y to bring him down
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always" 
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-2, 3, 6],
      }}
>

      {/* Lighting to make model visible */}
      <ambientLight intensity={1.5} />
      <directionalLight intensity={1} position={[5, 5, 5]} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
