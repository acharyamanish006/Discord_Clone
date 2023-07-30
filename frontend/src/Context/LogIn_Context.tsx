import axios from "axios";
import React, { createContext, FC } from "react";

interface AuthContextType {
  LogIn: () => void;
  LogOut: () => void;
  SignUp: () => void;
}

type LoginTypes = {
  email?: string | undefined;
  password: string;
};
type SignUpTypes = {
  name: string;
  email?: string | undefined;
  password: string;
};

const LogIn_Context = createContext<AuthContextType>({} as AuthContextType);

const LogInContextProvider: FC = ({ children }) => {
  const LogIn = ({ email, password }: LoginTypes) => {
    console.log("LogIn");
    // Add your login implementation here
    console.log(email);

    axios
      .post("http://localhost:5000/api/user/sign/in", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const LogOut = () => {
    console.log("LogOut");
    // Add your logout implementation here
  };

  const SignUp = ({ name, email, password }: SignUpTypes) => {
    console.log("SignUp");
    console.log(name);
    // Add your sign-up implementation here

    axios
      .post("http://localhost:5000/api/user/sign/up", {
        name,
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const authContextValue: AuthContextType = {
    LogIn,
    LogOut,
    SignUp,
  };

  return (
    <LogIn_Context.Provider value={authContextValue}>
      {children}
    </LogIn_Context.Provider>
  );
};

export { LogIn_Context, LogInContextProvider };
