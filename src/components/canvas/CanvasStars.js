import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, RoundedBox } from '@react-three/drei';


import "../../styles/Canvas.css";


export default function CanvasComponent() {
  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight color="red" position={[0, 10, 5]} />

        {/* STARS */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <RoundedBox args={[0, 1, 1]} radius={10} smoothness={10}>
          <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
        </RoundedBox>


      </Canvas>
    </div>
  )
}