import { Physics } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useMemo, useState } from "react";

import useInterval from "../../utility/hooks/useInterval";
import { getRandomRange } from "../../utility/other/numberUtils";
import FloatingMesh, { FloatingMeshProps } from "./FloatingMesh";

const initialMeshesCount = 10;

type Props = {};

const FloatingMeshes: FC<Props> = (props) => {
  const [meshesProps, setMeshesProps] = useState<FloatingMeshProps[]>([]);
  const [count, setCount] = useState(0);
  const [isWindowFocused, setIsWindowFocused] = useState(true);

  const removeMeshProps = (meshId: number) => {
    setMeshesProps(
      meshesProps.filter((meshProps) => meshProps.meshId !== meshId)
    );
  };

  const addMeshProps = () => {
    const meshProps: FloatingMeshProps = {
      meshId: count,
      scale: getRandomRange(0.5, 4),
      position: [
        getRandomRange(-30, 30),
        getRandomRange(-20, -20),
        getRandomRange(-60, 2),
      ],
      rotation: [
        getRandomRange(0, Math.PI * 2),
        getRandomRange(0, Math.PI * 2),
        getRandomRange(0, Math.PI * 2),
      ],
    };

    setMeshesProps([...meshesProps, meshProps]);
    setCount(count + 1);
  };

  useEffect(() => {
    const initialMeshesProps: FloatingMeshProps[] = [];
    for (let i = 0; i < initialMeshesCount; i++) {
      const meshProps: FloatingMeshProps = {
        meshId: count + i,
        scale: getRandomRange(0.5, 4),
        position: [
          getRandomRange(-30, 30),
          getRandomRange(-10, 5),
          getRandomRange(-60, 2),
        ],
        rotation: [
          getRandomRange(0, Math.PI * 2),
          getRandomRange(0, Math.PI * 2),
          getRandomRange(0, Math.PI * 2),
        ],
      };

      initialMeshesProps.push(meshProps);
    }

    setMeshesProps(initialMeshesProps);
    setCount(count + initialMeshesCount + 1);
  }, []);

  useEffect(() => {
    const windowFocusListener = () => {
      setIsWindowFocused(true);
    };
    window.addEventListener("focus", windowFocusListener);

    const windowBlurListener = () => {
      setIsWindowFocused(false);
    };
    window.addEventListener("blur", windowBlurListener);

    return () => {
      window.removeEventListener("focus", windowFocusListener);
      window.removeEventListener("blur", windowBlurListener);
    };
  }, []);

  useInterval(() => {
    if (isWindowFocused) addMeshProps();
  }, 1000);

  const meshes: JSX.Element[] = useMemo(
    () =>
      meshesProps.map((meshProps, index) => {
        return (
          <FloatingMesh
            {...meshProps}
            key={meshProps.meshId}
            removeSelf={() => {
              removeMeshProps(meshProps.meshId);
            }}
          />
        );
      }),
    [meshesProps]
  );

  return <Physics gravity={[0, 0, 0]}>{meshes}</Physics>;
};

export default FloatingMeshes;
