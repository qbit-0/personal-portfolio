import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useState } from "react";

import * as THREE from "three";
import useInterval from "../../utility/hooks/useInterval";
import { getRandomRange } from "../../utility/numberUtils";
import FloatingSphere from "./FloatingSphere";

const initialMeshesCount = 5;

type Props = {};

const FloatingMeshes: FC<Props> = (props) => {
  const [meshes, setMeshes] = useState<JSX.Element[]>([]);
  const [count, setCount] = useState(0);

  const removeMesh = (target: JSX.Element) => {
    // setMeshes(meshes);
  };

  const spawnMesh = () => {
    const mesh = (
      <FloatingSphere
        key={count}
        removeMesh={removeMesh}
        scale={getRandomRange(1, 3)}
        position={[
          getRandomRange(-15, 15),
          getRandomRange(-20, -15),
          getRandomRange(-20, 3.5),
        ]}
        rotation={
          new THREE.Euler(
            getRandomRange(0, Math.PI * 2),
            getRandomRange(0, Math.PI * 2),
            getRandomRange(0, Math.PI * 2)
          )
        }
      />
    );

    setMeshes([...meshes, mesh]);
    setCount(count + 1);
  };

  useEffect(() => {
    const initialMeshes: JSX.Element[] = [];
    for (let i = 0; i < initialMeshesCount; i++) {
      const mesh = (
        <FloatingSphere
          key={count}
          removeMesh={removeMesh}
          scale={getRandomRange(1, 3)}
          position={[
            getRandomRange(-15, 15),
            getRandomRange(-20, 5),
            getRandomRange(-20, 4),
          ]}
          rotation={
            new THREE.Euler(
              getRandomRange(0, Math.PI * 2),
              getRandomRange(0, Math.PI * 2),
              getRandomRange(0, Math.PI * 2)
            )
          }
        />
      );
      initialMeshes.push(mesh);
    }

    setMeshes(initialMeshes);
    setCount(initialMeshesCount + 1);
  }, []);

  useInterval(() => {
    spawnMesh();
  }, 4000);

  useFrame((state) => {});

  return <>{meshes}</>;
};

export default FloatingMeshes;
