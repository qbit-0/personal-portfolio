import FloatingMeshes from "./FloatingMeshes";

type Props = {};

const HomeScene = (props: Props) => {
  return (
    <>
      <fog attach="fog" args={["white", 0, 60]} />
      <ambientLight intensity={0.3} />
      <directionalLight intensity={2} position={[-10, 10, 5]} castShadow />
      <pointLight intensity={1} color="red" position={[0, 0, 5]} />
      <FloatingMeshes />
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, 5, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshStandardMaterial color="gray" wireframe />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -20, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshStandardMaterial wireframe color="gray" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -25, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  );
};

export default HomeScene;
