import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setISubmenuOpen] = useState(true);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setISubmenuOpen(true);
  };
  const closeModal = () => {
    setISubmenuOpen(false);
  };
  return;
  <AppContext.Provider
    value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSubmenu,
      openSidebar,
      closeSubmenu,
      closeSidebar,
    }}
  >
    {children}
  </AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
