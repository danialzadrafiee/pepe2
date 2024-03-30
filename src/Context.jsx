import React, { createContext, useContext, useState } from "react";

// Create a Context for the user's main
const MainContext = createContext();

// A component that provides the main context to its children
function MainProvider({ children }) {
  const [page, setPage] = useState(0);
  return <MainContext.Provider value={{ page, setPage }}>{children}</MainContext.Provider>;
}

export default MainProvider;
export const useMainContext = () => useContext(MainContext);
