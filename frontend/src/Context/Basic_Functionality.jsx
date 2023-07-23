import { createContext, useState } from "react";

const Basic_Function = createContext();

const ContextProvider = ({ children }) => {
  const [active, setActive] = useState(true);

  const hideDetailsComponent = () => {
    setActive(() => !active);
    console.log(active);
  };

  return (
    <Basic_Function.Provider
      value={{
        hideDetailsComponent,
        active,
        setActive,
      }}
    >
      {children}
    </Basic_Function.Provider>
  );
};

export { ContextProvider, Basic_Function };
