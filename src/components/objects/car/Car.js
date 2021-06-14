
const Car = () => {
  const myMesh = new THREE.Mesh();
  // is equivalent to
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhongMaterial />
    </mesh>
  )
}