import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PointLight } from "three";

type Props = {};

const PanningPointLight = (props: Props) => {
  const lightRef = useRef<PointLight>(null!);

  useFrame((state) => {
    const viewport = state.viewport;
    const mouse = state.mouse;

    lightRef.current.position.set(
      mouse.x * viewport.width,
      mouse.y * viewport.width,
      lightRef.current.position.z
    );
  });

  return (
    <pointLight
      ref={lightRef}
      intensity={2}
      color="white"
      position={[0, 0, 5]}
      decay={2}
      castShadow
    />
  );
};

export default PanningPointLight;
