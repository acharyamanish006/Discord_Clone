import { createContext } from "react";

type ApiContextType = {
  createGroup: () => void;
  createChannel: () => void;
};

const Api_Context = createContext<ApiContextType>({} as ApiContextType);

const ApiContextProvider = ({ children }: { children: React.ReactNode }) => {
  const createGroup = () => {
    console.log("create group");
  };
  const createChannel = () => {
    console.log("create channel");
  };

  const ApiContextValue: ApiContextType = {
    createGroup,
    createChannel,
  };
  return (
    <Api_Context.Provider value={ApiContextValue}>
      {children}
    </Api_Context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Api_Context, ApiContextProvider };
