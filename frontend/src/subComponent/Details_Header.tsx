import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Css/Details_Header.scss";
export const Details_Header = () => {
  return (
    <div className="detailsHeader">
      <p>Server Name</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};
