import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';

import "../../styles/Canvas.css";

export default function CanvasComponent() {
  return (
    <div className="canvas-container">
      <Canvas>

        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <Suspense fallback={null}>
          {/* <Model /> */}
          <Environment
            background={false}
            files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
            path={'/'}
            preset={null}
            scene={undefined} // adds the ability to pass a custom THREE.Scene
          />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>

      </Canvas>
    </div>
  )
}