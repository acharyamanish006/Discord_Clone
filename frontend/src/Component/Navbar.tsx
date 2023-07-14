import { Avatar } from "@mui/material";
import "./Css/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navWrapper">
        <div className="navDirectMessage">
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
