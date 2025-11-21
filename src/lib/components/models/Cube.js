import { useRef } from "react";
import { useOscillator } from "../../hooks/useOscillator";
import { CUBE_COLORS, ANIMATION_CONFIG } from "../../data/constants";
import { useGlobalContext } from "../../context/GlobalContext";

export function Cube(props) {
  const meshRef = useRef();
  const { appState } = useGlobalContext();

  // Use our custom hook to animate the cube
  useOscillator(meshRef, ANIMATION_CONFIG.speed, ANIMATION_CONFIG.amplitude);

  // Use color from global state if available, otherwise default
  const color =
    appState.theme === "dark" ? CUBE_COLORS.secondary : CUBE_COLORS.primary;

  return (
    <mesh {...props} ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
