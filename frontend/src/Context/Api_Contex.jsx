import axios from "axios";
import { createContext } from "react";

const Api_Context = createContext();

const ApiContextProvider = ({ children }) => {
  const createGroup = async () => {
    console.log("create group");
  };
  const createChannel = async () => {
    console.log("create channel");
  };
  return (
    <Api_Context.Provider
      value={{
        createGroup,
        createChannel,
      }}
    >
      {children}
    </Api_Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Api_Context, ApiContextProvider };
