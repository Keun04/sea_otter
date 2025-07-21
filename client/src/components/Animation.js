// BouncingModel.tsx
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function BouncingModel() {
  const group = useRef();
  const { scene, animations } = useGLTF('/models/cube.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['todongtodong']?.reset().play();
    actions['todongtodong.001']?.reset().play();
  }, [actions]);

  return <primitive ref={group} object={scene} position={[0, 0, 0]} scale={[1, 1, 1]} />;
}
