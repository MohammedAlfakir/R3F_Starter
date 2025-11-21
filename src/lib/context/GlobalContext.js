import { createContext, useContext, useState } from "react";

// 1. Create the Context
const GlobalContext = createContext(undefined);

// 2. Create the Provider Component
export function GlobalProvider({ children }) {
  // Example state: you can expand this as needed
  const [appState, setAppState] = useState({
    isLoading: false,
    theme: "light",
    user: null,
  });

  // Value object to be passed to consumers
  const value = {
    appState,
    setAppState,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

// 3. Create a Custom Hook for easy consumption
export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}
