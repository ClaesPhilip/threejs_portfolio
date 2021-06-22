import React from "react";
import "../../styles/Canvas.css";
import { Canvas, useThree } from "@react-three/fiber";
// import Box from "./box";
import { useSpring, animated as a } from "@react-spring/three";
import { Stars, RoundedBox, OrbitControls } from '@react-three/drei';

export default function CanvasThing() {

  const propsPlane = useSpring({
    to: async next => {
      await next({ position: [80, 20, 100] });
    },
    from: { position: [-80, -20, -1130] },
    config: { duration: 2000 }
  });

  const Controls = () => {
    const { gl, camera } = useThree()
    useSpring({
      from: {
        z: 300
      },
      z: 2,
      onFrame: ({ z }) => {
        camera.position.z = z
      }
    })
    return <OrbitControls autoRotate target={[0, 0, 0]} args={[camera, gl.domElement]} />
  }

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <a.group {...propsPlane}>
          <RoundedBox args={[0, 1, 1]} radius={10} smoothness={10} >
            <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
          </RoundedBox>
        </a.group>
        <Controls/>
      </Canvas>
    </div>
  );
}