import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';


import Model from '../model/model';

import "../../styles/Canvas.css";

export default function App() {
  return (
    <div className="canvas-container">
      <Canvas>

        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>

      </Canvas>
    </div>
  )
}