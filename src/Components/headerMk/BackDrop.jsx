import React, { useContext } from "react";
import { headerContext } from "../../contexts/headerContext";

const BackDrop = () => {
  const { sidebar, toggleSidebar } = useContext(headerContext);
  return (
    <div
      className={sidebar ? "backdrop backdrop--open" : "backdrop"}
      onClick={toggleSidebar}
    ></div>
  );
};

export default BackDrop;
