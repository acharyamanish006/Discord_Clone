/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar } from "@mui/material";
import "./Css/Navbar.scss";
import { useContext } from "react";
import { Basic_Function } from "../Context/Basic_Functionality";
import { Api_Context } from "../Context/Api_Contex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { createGroup } = useContext(Api_Context);

  const createServer = () => {
    createGroup();
  };
  const { hideDetailsComponent } = useContext(Basic_Function);
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navDirectMessage" onClick={hideDetailsComponent}>
          <Avatar sx={{ bgcolor: "#7289da" }} />
        </div>
        <div className="navContent">
          <Avatar sx={{ bgcolor: "#fffff" }} />
        </div>
        {/* <Avatar sx={{ bgcolor: "#7289da" }} /> */}
        <div className="addServer" onClick={createServer}>
          <FontAwesomeIcon icon={faPlus} />{" "}
        </div>
      </div>
    </div>
  );
};
