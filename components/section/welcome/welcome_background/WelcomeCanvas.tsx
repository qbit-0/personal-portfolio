import { Box } from "@mui/system";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import useDetectWebGL from "../../../../utility/hooks/useDetectWebGL";
import FloatingMeshes from "./FloatingMeshes";

type Props = {};

const WelcomeCanvas: FC<Props> = (props) => {
  const isWebGlDetected = useDetectWebGL();

  if (!isWebGlDetected) return <Box component="div" bgcolor="white" />;

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={60} />
      <fog attach="fog" args={["white", 0, 100]} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[-10, 10, 10]} />
      <FloatingMeshes />
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

export default WelcomeCanvas;
