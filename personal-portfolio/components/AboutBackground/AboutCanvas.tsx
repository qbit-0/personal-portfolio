import { Box } from "@mui/material";
import {
  Environment,
  Html,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import PanningPointLight from "../HomeBackground/PanningPointLight";
import SampleContent from "../Sample/SampleContent";

type Props = {};

const AboutCanvas: FC<Props> = (props) => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      <Environment preset="warehouse" />
      <fog attach="fog" args={["white", 0, 100]} />
      <ambientLight intensity={0.2} />
      <directionalLight intensity={1} position={[-10, 10, 10]} castShadow />
      <PanningPointLight />
      <PresentationControls global={true}>
        <mesh position={[0, 0, 0]}>
          <Html scale={0.5} transform occlude position={[0, 0, 0]}>
            <Box
              component="div"
              position="relative"
              width="100%"
              height="100%"
              margin={0}
              padding={0}
              bgcolor="red"
            >
              <SampleContent targetWidth={500} height={1000} />
            </Box>
          </Html>
        </mesh>
      </PresentationControls>
    </Canvas>
  );
};

export default AboutCanvas;
