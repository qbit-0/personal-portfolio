import { useSphere } from "@react-three/cannon";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { FC, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { getRandomRange } from "../../utility/numberUtils";

const wireframeColors = ["red", "white", "gray", "black"];
const shellColors = ["red", "white", "gray", "black"];

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
    const geometries = [
      () => [
        <sphereGeometry
          args={[0.9, 8, 4, 0, Math.PI * 2, 0, Math.PI]}
          ref={wireframeGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <sphereGeometry
          args={[1, 64, 32, 0, Math.PI * 2, 0, Math.PI]}
          ref={shellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <sphereGeometry
          args={[1, 64, 32, 0, Math.PI * 2, 0, Math.PI]}
          ref={innerShellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
      ],
      () => [
        <boxGeometry
          args={[0.9, 0.9, 0.9]}
          ref={wireframeGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <boxGeometry
          args={[1, 1, 1, 32, 32, 32]}
          ref={shellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <boxGeometry
          args={[1, 1, 1, 32, 32, 32]}
          ref={innerShellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
      ],
      () => [
        <coneGeometry
          args={[0.3, 0.9]}
          ref={wireframeGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <coneGeometry
          args={[0.33, 1, 32]}
          ref={shellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <coneGeometry
          args={[0.33, 1, 32]}
          ref={innerShellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
      ],
      () => [
        <cylinderGeometry
          args={[0.315, 0.315, 0.9, 16]}
          ref={wireframeGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <cylinderGeometry
          args={[0.35, 0.35, 1, 32]}
          ref={shellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <cylinderGeometry
          args={[0.35, 0.35, 1, 32]}
          ref={innerShellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
      ],
      () => [
        <torusGeometry
          args={[0.8, 0.2, 4, 8]}
          ref={wireframeGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <torusGeometry
          args={[0.8, 0.4, 32, 64]}
          ref={shellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
        <torusGeometry
          args={[0.8, 0.4, 32, 64]}
          ref={innerShellGeometryRef as any}
          drawRange={{ start: 0, count: 0 }}
        />,
      ],
    ];

    return geometries[Math.floor(Math.random() * geometries.length)]();
  }, []);

  const naturalWireframeColor = useMemo(
    () => wireframeColors[Math.floor(Math.random() * wireframeColors.length)],
    []
  );
  const naturalShellColor = useMemo(
    () => shellColors[Math.floor(Math.random() * shellColors.length)],
    []
  );

  const [wireframeMaterial, shellMaterial, innerShellMaterial] = useMemo(() => {
    const wireframeColor = isHovered ? "cyan" : naturalWireframeColor;
    const shellColor = isHovered ? "blue" : naturalShellColor;

    const wireframeMaterial = (
      <meshStandardMaterial
        color={wireframeColor}
        wireframe
        roughness={0.5}
        metalness={1}
      />
    );
    const shellMaterial = (
      <meshStandardMaterial color={shellColor} roughness={0.5} metalness={1} />
    );
    const innerShellMaterial = (
      <meshStandardMaterial
        color={shellColor}
        roughness={0.5}
        metalness={1}
        side={THREE.BackSide}
      />
    );
    return [wireframeMaterial, shellMaterial, innerShellMaterial];
  }, [naturalWireframeColor, naturalShellColor, isHovered]);

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
        <mesh ref={wireframeMeshRef} castShadow receiveShadow>
          {wireframeGeometry}
          {wireframeMaterial}
        </mesh>
        <mesh ref={shellMeshRef} castShadow receiveShadow>
          {shellGeometry}
          {shellMaterial}
        </mesh>
        <mesh ref={innerShellMeshRef} receiveShadow>
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
        wireframeDrawRangeCount += wireframeMaxDrawCount * 0.002;
      } else if (worldPosition.y > 5 && wireframeDrawRangeCount > 0) {
        wireframeDrawRangeCount -= wireframeMaxDrawCount * 0.003;
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
        shellDrawRangeCount += shellMaxDrawCount * 0.001;
      } else if (worldPosition.y > 4 && shellDrawRangeCount > 0) {
        shellDrawRangeCount -= shellMaxDrawCount * 0.004;
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
