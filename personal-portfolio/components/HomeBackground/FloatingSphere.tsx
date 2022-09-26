import { dispose, ThreeElements, useFrame } from "@react-three/fiber";
import { FC, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";
import { getRandomRange } from "../../utility/numberUtils";

type Props = ThreeElements["mesh"] & {
  removeMesh: (mesh: JSX.Element) => void;
  scale: number;
};

const FloatingSphere: FC<Props> = ({ removeMesh, scale, ...meshProps }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const innerGeometryRef = useRef<THREE.SphereGeometry>(null!);
  const outerGeometryRef = useRef<THREE.SphereGeometry>(null!);

  const xVel = useMemo(() => getRandomRange(-0.002, 0.002), []);
  const yVel = useMemo(() => getRandomRange(0.004, 0.01), []);
  const zVel = useMemo(() => getRandomRange(-0.002, 0), []);
  const xAngleVel = useMemo(() => getRandomRange(-0.005, 0.005), []);
  const yAngleVel = useMemo(() => getRandomRange(-0.005, 0.005), []);
  const zAngleVel = useMemo(() => getRandomRange(-0.005, 0.005), []);

  const mesh = (
    <group ref={groupRef}>
      <mesh
        ref={innerMeshRef}
        castShadow
        receiveShadow
        scale={scale - 0.2}
        {...meshProps}
      >
        <sphereGeometry
          ref={innerGeometryRef}
          args={[1, 16, 8, 0, Math.PI * 2, 0, Math.PI]}
          drawRange={{ start: 0, count: 0 }}
        />
        <meshStandardMaterial color="cyan" wireframe />
      </mesh>
      <mesh
        ref={outerMeshRef}
        castShadow
        receiveShadow
        scale={scale}
        {...meshProps}
      >
        <sphereGeometry
          ref={outerGeometryRef}
          args={[1, 32, 16, 0, Math.PI * 2, 0, Math.PI]}
          drawRange={{ start: 0, count: 0 }}
        />
        <meshStandardMaterial
          color="red"
          side={DoubleSide}
          shadowSide={DoubleSide}
        />
      </mesh>
    </group>
  );

  useFrame(() => {
    innerMeshRef.current.position.x += xVel;
    innerMeshRef.current.position.y += yVel;
    innerMeshRef.current.position.z += zVel;

    innerMeshRef.current.rotateX(xAngleVel);
    innerMeshRef.current.rotateY(yAngleVel);
    innerMeshRef.current.rotateZ(zAngleVel);

    outerMeshRef.current.position.x += xVel;
    outerMeshRef.current.position.y += yVel;
    outerMeshRef.current.position.z += zVel;

    outerMeshRef.current.rotateX(xAngleVel * 0.9);
    outerMeshRef.current.rotateY(yAngleVel * 0.9);
    outerMeshRef.current.rotateZ(zAngleVel * 0.9);

    const innerMaxDrawCount = innerGeometryRef.current.index?.count || 0;
    if (innerMaxDrawCount) {
      let innerDrawRangeCount = innerGeometryRef.current.drawRange.count;

      if (
        innerMeshRef.current.position.y > -20 &&
        innerMeshRef.current.position.y < 5 &&
        innerDrawRangeCount < innerMaxDrawCount
      ) {
        innerDrawRangeCount += innerMaxDrawCount * 0.001;
      } else if (innerMeshRef.current.position.y > 5.5) {
        innerDrawRangeCount -= innerMaxDrawCount * 0.001;
      }

      innerGeometryRef.current.setDrawRange(0, innerDrawRangeCount);
    }

    const outerMaxDrawCount = outerGeometryRef.current.index?.count || 0;
    if (outerMaxDrawCount) {
      let outerDrawRangeCount = outerGeometryRef.current.drawRange.count;

      if (
        outerMeshRef.current.position.y > -15 &&
        outerMeshRef.current.position.y < 5 &&
        outerDrawRangeCount < outerMaxDrawCount
      ) {
        outerDrawRangeCount += outerMaxDrawCount * 0.0008;
      } else if (outerMeshRef.current.position.y > 5) {
        outerDrawRangeCount -= outerMaxDrawCount * 0.002;
      }

      outerGeometryRef.current.setDrawRange(0, outerDrawRangeCount);
    }

    if (innerMeshRef.current.position.y > 6) innerGeometryRef.current.dispose();
    if (outerMeshRef.current.position.y > 6) outerGeometryRef.current.dispose();
  });

  return mesh;
};

export default FloatingSphere;
