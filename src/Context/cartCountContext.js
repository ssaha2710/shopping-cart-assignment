import React, { createContext, useState } from "react";

export const cartCountContext = createContext();

const context = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <cartCountContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </cartCountContext.Provider>
  );
};

export default context;
