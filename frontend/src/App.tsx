import { Home } from "./Main_Component/Home";
import { Navbar } from "./Main_Component/Navbar";
import "./App.scss";
import { Details } from "./Main_Component/Details";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import { useState } from "react";
import LogIn from "./LogIn_Component/LogIn";
import SignUp from "./LogIn_Component/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  if (!isAuth) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <div className="appContainer">
      <Navbar />
      <Details />
      <Home />
    </div>
  );
}

export default App;
