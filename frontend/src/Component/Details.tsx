import "./Css/Details.scss";
import { Details_Header } from "../subComponent/Details_Header";
import { Details_Content } from "../subComponent/Details_Content";
import { Details_Footer } from "../subComponent/Details_Footer";

export const Details = () => {
  return (
    <div className="detailsContainer">
      <div className="detailsWrapper">
        <Details_Header />
        <Details_Content />
        <Details_Footer />
      </div>
    </div>
  );
};
