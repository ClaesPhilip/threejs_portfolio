// import React, { useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { useFrame } from '@react-spring/three';
// import { OrbitControls, Stars, RoundedBox } from '@react-three/drei';


// import "../../styles/Canvas.css";


// export default function CanvasComponent() {
//   // const props = useSpring({
//   //   to: async next => {
//   //     await next({ position: [100, 100, 100] });
//   //     await next({ position: [50, 50, 50] });
//   //   },
//   //   from: { position: [100, 100, 100] },
//   //   config: { duration: 3500 },
//   //   reset: true
//   // });

//   const ref = useRef()
//     useFrame(() => {
//       ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 10
//   });

//   return (
//     <div className="canvas-container">
//       <Canvas>
//         <OrbitControls />
//         <ambientLight intensity={1} />
//         <directionalLight color="red" position={[0, 10, 5]} />

//         {/* STARS */}
//         <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

//         <group ref={ref}>
//           <RoundedBox args={[0, 1, 1]} radius={10} smoothness={10} >
//             <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
//           </RoundedBox>
//         </group>


//       </Canvas>
//     </div>
//   )
// }
import React from "react";
import "../../styles/Canvas.css";
import { Canvas } from "@react-three/fiber";
// import Box from "./box";
import { useSpring, animated as a } from "@react-spring/three";
import { Stars, RoundedBox, OrbitControls } from '@react-three/drei';

export default function CanvasThing() {
  const propsPlane = useSpring({
    to: async next => {
      await next({ position: [80, 20, 100] });
      // await next({ position: [0, 0, 0] });
    },
    from: { position: [-80, -20, -1130] },
    config: { duration: 2000 }
  });

  const propsCam = useSpring({
    to: async next => {
      await next({ position: [20, 100, 80] });
      // await next({ position: [0, 0, 0] });
    },
    from: { position: [-80, -20, -1130] },
    config: { duration: 2000 }
  });

  return (
    <div className="canvas-container">
      <Canvas>
        {/* <OrbitControls /> */}
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <a.group {...propsPlane}>
          <RoundedBox args={[0, 1, 1]} radius={10} smoothness={10} >
            <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
          </RoundedBox>
        </a.group>
      </Canvas>
    </div>
  );
}