import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Cube } from "./lib/components/models/Cube";
import { Interface } from "./lib/components/ui/Interface";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-900 relative">
      <Interface />
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0, 0, 0]} />
        <OrbitControls />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
