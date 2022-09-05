import React, { createContext, useState } from "react";

export const headerContext = createContext();

const HeaderContextProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <headerContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </headerContext.Provider>
  );
};

export default HeaderContextProvider;
