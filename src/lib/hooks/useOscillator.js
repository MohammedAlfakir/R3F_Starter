import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function useOscillator(ref, speed = 1, amplitude = 1) {
  const time = useRef(0);

  useFrame((state, delta) => {
    if (!ref.current) return;

    time.current += delta * speed;

    // Example: Oscillate Y position
    ref.current.position.y = Math.sin(time.current) * amplitude;

    // Example: Rotate slowly
    ref.current.rotation.x += delta * 0.5;
    ref.current.rotation.y += delta * 0.2;
  });
}
