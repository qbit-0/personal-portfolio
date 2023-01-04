import { Physics } from "@react-three/cannon";
import { FC, useEffect, useMemo, useState } from "react";
import { randFloat } from "three/src/math/MathUtils";
import useInterval from "../../../../utility/hooks/useInterval";
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
      scale: randFloat(0.5, 4),
      position: [randFloat(-30, 30), randFloat(-20, -20), randFloat(-60, 2)],
      rotation: [
        randFloat(0, Math.PI * 2),
        randFloat(0, Math.PI * 2),
        randFloat(0, Math.PI * 2),
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
        scale: randFloat(0.5, 4),
        position: [randFloat(-30, 30), randFloat(-10, 5), randFloat(-60, 2)],
        rotation: [
          randFloat(0, Math.PI * 2),
          randFloat(0, Math.PI * 2),
          randFloat(0, Math.PI * 2),
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
      meshesProps.map((meshProps) => {
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
