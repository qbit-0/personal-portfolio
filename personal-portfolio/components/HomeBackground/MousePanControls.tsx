import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect } from "react";
import { MathUtils } from "three";
import { scale } from "../../utility/other/numberUtils";

export type AxisConstraint = [number, number];
export type PositionConstraints = [
  x: AxisConstraint,
  y: AxisConstraint,
  z: AxisConstraint
];
export type RotationConstraints = [x: AxisConstraint, y: AxisConstraint];

type Props = {
  positionConstraints: PositionConstraints;
  rotationConstraints: RotationConstraints;
};

const MousePanControls: FC<Props> = ({
  positionConstraints,
  rotationConstraints,
}) => {
  const { camera } = useThree();

  useEffect(() => {
    const scrollListener = (event: Event) => {
      const screenScrollPercentage = window.scrollY / window.innerHeight;
      const newZ = scale(
        screenScrollPercentage,
        0,
        1,
        positionConstraints[2][0],
        positionConstraints[2][1]
      );
      camera.position.set(camera.position.x, camera.position.y, newZ);
    };
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useFrame((state) => {
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    const targetX = scale(
      mouseX,
      -1,
      1,
      positionConstraints[0][0],
      positionConstraints[0][1]
    );
    const newX = MathUtils.lerp(camera.position.x, targetX, 0.01);
    const targetY = scale(
      mouseY,
      -1,
      1,
      positionConstraints[1][0],
      positionConstraints[1][1]
    );
    const newY = MathUtils.lerp(camera.position.y, targetY, 0.01);
    camera.position.set(newX, newY, camera.position.z);

    const targetAngX = scale(
      mouseY,
      -1,
      1,
      rotationConstraints[0][0],
      rotationConstraints[0][1]
    );
    const newAngX = MathUtils.lerp(camera.rotation.x, targetAngX, 0.01);
    const targetAngY = scale(
      mouseX,
      -1,
      1,
      rotationConstraints[1][0],
      rotationConstraints[1][1]
    );
    const newAngY = MathUtils.lerp(camera.rotation.y, targetAngY, 0.01);
    camera.rotation.set(newAngX, newAngY, camera.rotation.z);
  });

  return null;
};

export default MousePanControls;
