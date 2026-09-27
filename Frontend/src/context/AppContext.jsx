import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const value = { navigate, isAdmin, setIsAdmin };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};
