import { Environment } from "@react-three/drei";
import { BackSide } from "three";
import FloatingMeshes from "./FloatingMeshes";
import MousePanControls from "./MousePanControls";
import PanningPointLight from "./PanningPointLight";

type Props = {};

const HomeScene = (props: Props) => {
  return (
    <>
      <MousePanControls />
      <Environment preset="warehouse" />
      <fog attach="fog" args={["white", 0, 100]} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[-10, 10, 10]} castShadow />
      <PanningPointLight />
      <FloatingMeshes />
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, 10, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="black" side={BackSide} />
      </mesh>
      {/* <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, 4, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="gray" wireframe />
      </mesh> */}
      {/* <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -20, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="gray" wireframe />
      </mesh> */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -40, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </>
  );
};

export default HomeScene;
