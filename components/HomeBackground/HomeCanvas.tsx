import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import { BackSide } from "three";
import FloatingMeshes from "./FloatingMeshes";
import MousePanControls, {
  PositionConstraints,
  RotationConstraints,
} from "./MousePanControls";
import PanningPointLight from "./PanningPointLight";

const positionConstraints: PositionConstraints = [
  [-1, 1],
  [0, 2],
];

const rotationConstraints: RotationConstraints = [
  [-Math.PI / 8, -Math.PI / 9],
  [Math.PI / 32, -Math.PI / 32],
];

type Props = {};

const HomeCanvas: FC<Props> = (props) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={60} />
      <MousePanControls
        positionConstraints={positionConstraints}
        rotationConstraints={rotationConstraints}
      />
      <Environment preset="warehouse" />
      <fog attach="fog" args={["white", 0, 100]} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[-10, 10, 10]} />
      <PanningPointLight />
      <Suspense fallback={null}>
        <FloatingMeshes />
      </Suspense>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -20, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="gray" wireframe />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI / 3]} position={[0, -40, 0]}>
        <planeGeometry args={[1000, 1000, 250, 250]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </Canvas>
  );
};

export default HomeCanvas;
