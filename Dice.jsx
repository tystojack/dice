 export function Dice({ position }) {
    return (
      <mesh position={position}>
        <boxBufferGeometry />
        <meshStandardMaterial attach="material" color="white" />
        <mesh position={[-0.5, 0, 0]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <mesh position={[0.5, 0, 0]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <mesh position={[0, 0, -0.5]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
        <mesh position={[0, 0, 0.5]}>
          <boxBufferGeometry />
          <meshStandardMaterial attach="material" color="black" />
        </mesh>
      </mesh>
    );
  }