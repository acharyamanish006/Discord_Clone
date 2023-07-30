import { createContext, useState } from "react";

type BasicContextType = {
  hideDetailsComponent: () => void;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Basic_Function = createContext<BasicContextType>({} as BasicContextType);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<boolean>(true);

  const hideDetailsComponent = () => {
    setActive(() => !active);
    console.log(active);
  };

  const BasicContextValue: BasicContextType = {
    hideDetailsComponent,
    active,
    setActive,
  };

  return (
    <Basic_Function.Provider value={BasicContextValue}>
      {children}
    </Basic_Function.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, Basic_Function };
