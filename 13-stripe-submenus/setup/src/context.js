import React, { useState, useContext } from "react";
import sublinks from "./data";

 const AppContext = React.createContext();

 const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setISubmenuOpen] = useState(false);
  const [pageText,setPageText]= useState({ page: '', links: [] });
  const [location,setLocation]=useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text,coordinates) => {
    //console.log(text);
    
    const page = sublinks.find((link)=>link.page===text);
    
    // if(text==="company"){
    //    const pager = sublinks.find((link)=>link.page==='company');
    //    console.log('text',pager);
    //    //setPageText(pager);
    // }
    // if(text==='developers'){
    //   const page = sublinks.find((link)=>link.page==='developers');
    //    setPageText(page);
    // }
    // if(text==='products'){
    //   const page = sublinks.find((link)=>link.page==='products');
    //    setPageText(page);
    // }
    //console.log(page);
    setPageText(page);
    setLocation(coordinates);
    setISubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setISubmenuOpen(false);
  };
  

  return(
   <AppContext.Provider
    value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSubmenu,
      openSidebar,
      closeSubmenu,
      closeSidebar,
      location,
      pageText,
    }}
  >
    {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };