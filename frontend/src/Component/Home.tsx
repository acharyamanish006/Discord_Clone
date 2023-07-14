import Home_Content from "../homeSubComponents/Home_Content";
import Home_Footer from "../homeSubComponents/Home_Footer";
import Home_Header from "../homeSubComponents/Home_Header";
import "./Css/Home.scss";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <Home_Header />
        <Home_Content />
        <Home_Footer />
      </div>
    </div>
  );
};
