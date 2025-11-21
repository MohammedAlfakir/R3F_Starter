import { useEffect } from "react";
import { useControls } from "leva";
import { useGlobalContext } from "../../context/GlobalContext";

export function Interface() {
  const { setAppState } = useGlobalContext();

  const { theme } = useControls({
    theme: {
      options: ["light", "dark"],
      value: "light",
    },
  });

  useEffect(() => {
    setAppState(prev => ({ ...prev, theme }));
  }, [theme, setAppState]);

  return null; // Leva handles the UI
}
