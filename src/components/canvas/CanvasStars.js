import React, { useRef, Suspense } from "react";
import "../../styles/Canvas.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import Box from "./box";
import { useSpring, animated as a } from "@react-spring/three";
import { Stars, RoundedBox, OrbitControls } from '@react-three/drei';
import * as THREE from "three";

export default function CanvasThing() {

  const propsPlane = useSpring({
    to: async next => {
      await next({ position: [80, 20, 100] });
    },
    from: { position: [-80, -20, -1130] },
    config: { duration: 2000 }
  });

  const propsText = useSpring({
    to: async next => {
      await next({ 
        position: [0, 200, 700] 
      });
    },
    from: { 
      position: [0, -400, 400] 
    },
    config: { 
      duration: 2000 
    }
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
  
  
  function TextMesh(props) {
    const mesh = useRef();
    const starwarsText = "It is a period of civil wars in the galaxy. A brave alliance of underground freedom fighters has challenged the tyranny and oppression of the awesome GALACTIC EMPIRE. Striking from a fortress hidden among the billion stars of the galaxy, rebel spaceships have won their first victory in a battle with the powerful Imperial Starfleet. The EMPIRE fears that another defeat could bring a thousand more solar systems into the rebellion, and Imperial control over the galaxy would be lost forever. To crush the rebellion once and for all, the EMPIRE is constructing a sinister new battle station. Powerful enough to destroy an entire planet, its completion spells certain doom for the champions of freedom.";
  
    // actions to perform in current frame
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
      mesh.current.geometry.center();
    });
  
    // configure font mesh
    const textOptions = {
      size: 5,
      height: 1
    };
  
    
  
    return (
      <mesh
        {...props}
        ref={mesh}
      >
        <textGeometry attach="geometry" args={[starwarsText, textOptions]} />
      </mesh>
    );
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

        {/* <a.div {...propsText}>
          <p>{starwarsText}</p>
        </a.div> */}

        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <TextMesh position={{...propsText}} />
        </Suspense>

        <Controls/>
      </Canvas>
    </div>
  );
}