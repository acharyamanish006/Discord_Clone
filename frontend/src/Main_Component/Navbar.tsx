/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar } from "@mui/material";
import "./Css/Navbar.scss";
import { useContext } from "react";
import { Basic_Function } from "../Context/Basic_Functionality";

export const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { hideDetailsComponent }: any = useContext(Basic_Function);
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
