import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Cube } from "./lib/components/models/Cube";
import { Interface } from "./lib/components/ui/Interface";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-900 relative">
      <Interface />
      <Canvas>
        <Perf position="top-left" />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 1, 1]} />
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
