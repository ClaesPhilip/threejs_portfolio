import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';



export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('./public/gltf/texturesv2/Poimandres.gltf')
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(useTexture, [
    'Tiles101_1K_Color.jpg',
    'Tiles101_1K_Displacement.jpg',
    'Tiles101_1K_Normal.jpg',
    'Tiles101_1K_Roughness.jpg',
    'Tiles101_1K_AmbientOcclusion.jpg',
  ])
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials['Material.001']}
      />
      <mesh
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload('/Poimandres.gltf')