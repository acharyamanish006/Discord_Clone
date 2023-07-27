import axios from "axios";
import { createContext } from "react";

const Api_Context = createContext();

const ApiContextProvider = ({ children }) => {
  const createGroup = async () => {
    await axios.post("http://localhost/5000", {
      name: "hey",
    });
  };
  return <Api_Context.Provider>{children}</Api_Context.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { Api_Context, ApiContextProvider };
