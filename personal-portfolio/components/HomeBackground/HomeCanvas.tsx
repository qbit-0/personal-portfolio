import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import HomeScene from "./HomeScene";

type Props = {};

const HomeCanvas: FC<Props> = (props) => {
  return (
    <Canvas shadows camera={{ position: [0, 1, 5], fov: 75 }}>
      <HomeScene />
    </Canvas>
  );
};

export default HomeCanvas;
