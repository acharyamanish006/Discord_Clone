import { Avatar } from "@mui/material";
import "./Css/Details_Footer.scss";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons/faMicrophone";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons/faHeadphones";

export const Details_Footer = () => {
  return (
    <div className="detailsFooter">
      <div className="detailsFooterAvatar">
        <Avatar
          sx={{ width: 34, height: 34, color: "#7289da" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68Te0_43cD1IS27dpVkLv7VYmzqP7UwwvkLW8dQ-QVApFtteBZW4rdGJs_c-skVyCQKw&usqp=CAU"
        />
        <div className="detailsFooterUsernameContainer">
          <p className="detailsFooterUsername">Uzumaki</p>
          <p className="detailsFooterUserId">@username</p>
        </div>
      </div>
      <div className="detailsFooterBtns">
        <FontAwesomeIcon icon={faMicrophone} className="detailsFooterBtn" />
        <FontAwesomeIcon icon={faHeadphones} className="detailsFooterBtn" />
        <FontAwesomeIcon icon={faGear} className="detailsFooterBtn" />
      </div>
    </div>
  );
};
