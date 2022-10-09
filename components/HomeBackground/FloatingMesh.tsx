import { useTheme } from "@mui/material";
import { useSphere } from "@react-three/cannon";
import { MeshDistortMaterial } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { FC, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getRandomRange } from "../../utility/other/numberUtils";

export type FloatingMeshProps = ThreeElements["group"] & {
  meshId: number;
  removeSelf?: () => void;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};

const FloatingMesh: FC<FloatingMeshProps> = ({
  removeSelf,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const xVel = useMemo(() => getRandomRange(-0.2, 0.2), []);
  const yVel = useMemo(() => getRandomRange(1, 2), []);
  const zVel = useMemo(() => getRandomRange(-0.2, 0), []);
  const xAngleVel = useMemo(() => getRandomRange(-0.3, 0.3), []);
  const yAngleVel = useMemo(() => getRandomRange(-0.3, 0.3), []);
  const zAngleVel = useMemo(() => getRandomRange(-0.3, 0.3), []);
  const [isHovered, setIsHovered] = useState(false);

  const groupRef = useRef<THREE.Group>(null!);
  const [groupPhysicsRef, groupApi] = useSphere(
    () => ({
      args: [scale],
      mass: scale * scale * scale,
      position,
      velocity: [xVel, yVel, zVel],
      rotation,
      angularVelocity: [xAngleVel, yAngleVel, zAngleVel],
    }),
    groupRef
  );

  const wireframeMeshRef = useRef<THREE.Mesh>(null!);
  const shellMeshRef = useRef<THREE.Mesh>(null!);
  const innerShellMeshRef = useRef<THREE.Mesh>(null!);

  const wireframeGeometryRef = useRef<THREE.BufferGeometry>(null!);
  const shellGeometryRef = useRef<THREE.BufferGeometry>(null!);
  const innerShellGeometryRef = useRef<THREE.BufferGeometry>(null!);

  const [wireframeGeometry, shellGeometry, innerShellGeometry] = useMemo(() => {
    const wireframeGeometryProps = {
      ref: wireframeGeometryRef as any,
      drawRange: { start: 0, count: 0 },
    };
    const shellGeometryProps = {
      ref: shellGeometryRef as any,
      drawRange: { start: 0, count: 0 },
    };
    const innerShellGeometryProps = {
      ref: innerShellGeometryRef as any,
      drawRange: { start: 0, count: 0 },
    };

    const geometries = [
      () => [
        <sphereGeometry
          args={[0.5, 8, 4, 0, Math.PI * 2, 0, Math.PI]}
          {...wireframeGeometryProps}
        />,
        <sphereGeometry
          args={[1, 64, 32, 0, Math.PI * 2, 0, Math.PI]}
          {...shellGeometryProps}
        />,
        <sphereGeometry
          args={[1, 64, 32, 0, Math.PI * 2, 0, Math.PI]}
          {...innerShellGeometryProps}
        />,
      ],
      () => [
        <boxGeometry args={[0.5, 0.5, 0.5]} {...wireframeGeometryProps} />,
        <boxGeometry args={[1, 1, 1, 32, 32, 32]} {...shellGeometryProps} />,
        <boxGeometry
          args={[1, 1, 1, 32, 32, 32]}
          {...innerShellGeometryProps}
        />,
      ],
      () => [
        <coneGeometry args={[0.165, 0.165]} {...wireframeGeometryProps} />,
        <coneGeometry args={[0.33, 1, 32]} {...shellGeometryProps} />,
        <coneGeometry args={[0.33, 1, 32]} {...innerShellGeometryProps} />,
      ],
      () => [
        <cylinderGeometry
          args={[0.175, 0.175, 0.9, 16, 1]}
          {...wireframeGeometryProps}
        />,
        <cylinderGeometry
          args={[0.35, 0.35, 1, 32, 32]}
          {...shellGeometryProps}
        />,
        <cylinderGeometry
          args={[0.35, 0.35, 1, 32, 32]}
          {...innerShellGeometryProps}
        />,
      ],
      () => [
        <torusGeometry args={[0.8, 0.1, 4, 8]} {...wireframeGeometryProps} />,
        <torusGeometry args={[0.8, 0.4, 32, 64]} {...shellGeometryProps} />,
        <torusGeometry
          args={[0.8, 0.4, 32, 64]}
          {...innerShellGeometryProps}
        />,
      ],
    ];

    return geometries[Math.floor(Math.random() * geometries.length)]();
  }, []);

  const theme = useTheme();

  const wireframeColors = useMemo(
    () => [theme.palette.primary.main, "white", "gray", "black"],
    [theme]
  );
  const shellColors = useMemo(
    () => [theme.palette.primary.main, "white", "gray", "black"],
    [theme]
  );

  const defaultWireframeColor = useMemo(
    () => wireframeColors[Math.floor(Math.random() * wireframeColors.length)],
    []
  );
  const defaultShellColor = useMemo(
    () => shellColors[Math.floor(Math.random() * shellColors.length)],
    []
  );

  const [wireframeMaterial, shellMaterial, innerShellMaterial] = useMemo(() => {
    const wireframeColor = isHovered
      ? theme.palette.secondary.main
      : defaultWireframeColor;
    const shellColor = isHovered
      ? theme.palette.secondary.main
      : defaultShellColor;

    const wireframeMaterial = (
      <meshStandardMaterial
        color={wireframeColor}
        wireframe
        roughness={0}
        metalness={1}
      />
    );
    const shellMaterial = (
      <MeshDistortMaterial
        distort={isHovered ? 0.75 : 0.2}
        speed={isHovered ? 10 : 5}
        color={shellColor}
        roughness={1}
        metalness={0}
      />
    );
    const innerShellMaterial = (
      <MeshDistortMaterial
        distort={isHovered ? 0.75 : 0.2}
        speed={isHovered ? 10 : 5}
        color={shellColor}
        roughness={1}
        metalness={0}
        side={THREE.BackSide}
      />
    );
    return [wireframeMaterial, shellMaterial, innerShellMaterial];
  }, [defaultWireframeColor, defaultShellColor, isHovered]);

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  const group = useMemo(() => {
    return (
      <group
        ref={groupRef}
        scale={scale}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <mesh ref={wireframeMeshRef}>
          {wireframeGeometry}
          {wireframeMaterial}
        </mesh>
        <mesh ref={shellMeshRef}>
          {shellGeometry}
          {shellMaterial}
        </mesh>
        <mesh ref={innerShellMeshRef}>
          {innerShellGeometry}
          {innerShellMaterial}
        </mesh>
      </group>
    );
  }, [
    wireframeGeometry,
    shellGeometry,
    innerShellGeometry,
    wireframeMaterial,
    shellMaterial,
    innerShellMaterial,
  ]);

  useFrame((state) => {
    const worldPosition = new THREE.Vector3();
    groupRef.current.getWorldPosition(worldPosition);

    if (isHovered) {
      const viewport = state.viewport;
      const mouse = state.mouse;
      const mouse3d = new THREE.Vector3(
        mouse.x * viewport.width,
        mouse.y * viewport.height,
        5
      );

      const diff = mouse3d.sub(worldPosition);
      const impulse = diff.multiplyScalar(2);

      groupApi.applyForce([impulse.x, impulse.y, impulse.z], [0, 0, 0]);
    }

    const wireframeMaxDrawCount =
      wireframeGeometryRef.current.index?.count || 0;
    if (wireframeMaxDrawCount) {
      let wireframeDrawRangeCount =
        wireframeGeometryRef.current.drawRange.count;

      if (
        worldPosition.y > -20 &&
        worldPosition.y < 4 &&
        wireframeDrawRangeCount < wireframeMaxDrawCount
      ) {
        wireframeDrawRangeCount += wireframeMaxDrawCount * 0.004;
      } else if (worldPosition.y > 5 && wireframeDrawRangeCount > 0) {
        wireframeDrawRangeCount -= wireframeMaxDrawCount * 0.006;
      }

      wireframeGeometryRef.current.setDrawRange(0, wireframeDrawRangeCount);
    }

    const shellMaxDrawCount = shellGeometryRef.current.index?.count || 0;
    let shellDrawRangeCount = shellGeometryRef.current.drawRange.count;
    if (shellMaxDrawCount) {
      if (
        worldPosition.y > -15 &&
        worldPosition.y < 4 &&
        shellDrawRangeCount < shellMaxDrawCount
      ) {
        shellDrawRangeCount += shellMaxDrawCount * 0.002;
      } else if (worldPosition.y > 4 && shellDrawRangeCount > 0) {
        shellDrawRangeCount -= shellMaxDrawCount * 0.008;
      }

      shellGeometryRef.current.setDrawRange(0, shellDrawRangeCount);
      innerShellGeometryRef.current.setDrawRange(0, shellDrawRangeCount);
    }

    if (shellDrawRangeCount >= shellMaxDrawCount) {
      wireframeMeshRef.current.visible = false;
      innerShellMeshRef.current.visible = false;
    } else {
      wireframeMeshRef.current.visible = true;
      innerShellMeshRef.current.visible = true;
    }

    if (
      worldPosition.x < -100 ||
      worldPosition.x > 100 ||
      worldPosition.y < -50 ||
      worldPosition.y > 50 ||
      worldPosition.z < -100 ||
      worldPosition.z > 10
    ) {
      if (removeSelf) removeSelf();
    }
  });

  return group;
};

export default FloatingMesh;
