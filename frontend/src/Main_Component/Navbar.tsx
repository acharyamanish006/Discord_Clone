import { Avatar } from "@mui/material";
import "./Css/Navbar.scss";
import { useContext } from "react";
import { Basic_Function } from "../Context/Basic_Functionality";

export const Navbar = () => {
  const { hideDetailsComponent } = useContext(Basic_Function);
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navDirectMessage" onClick={hideDetailsComponent}>
          <Avatar sx={{ bgcolor: "#7289da" }} />
        </div>
        <div className="navContent">
          <Avatar sx={{ bgcolor: "#7289da" }} />
        </div>
        <div className="navContent">
          <Avatar sx={{ bgcolor: "#7289da" }} />
        </div>
        <div className="navContent">
          <Avatar sx={{ bgcolor: "#7289da" }} />
        </div>
      </div>
    </div>
  );
};
