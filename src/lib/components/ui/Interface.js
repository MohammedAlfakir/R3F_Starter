import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export function Interface() {
  const { appState, setAppState } = useGlobalContext();

  const toggleTheme = () => {
    setAppState(prev => ({
      ...prev,
      theme: prev.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <div className="absolute top-0 left-0 p-8 z-10 text-white">
      <h1 className="text-4xl font-bold mb-4 drop-shadow-md">R3F Starter</h1>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
        <p className="mb-4 text-lg">
          Current Theme:{" "}
          <span className="font-bold uppercase">{appState.theme}</span>
        </p>
        <button
          onClick={toggleTheme}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors font-semibold shadow-lg"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}
