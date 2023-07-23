import Home_Content from "../Home_SubComponents/Home_Content";
import Home_Footer from "../Home_SubComponents/Home_Footer";
import Home_Header from "../Home_SubComponents/Home_Header";
import "./Css/Home.scss";
import { Basic_Function } from "../Context/Basic_Functionality";
import { useContext } from "react";

export const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { active }: any = useContext(Basic_Function);
  return (
    <div className={active ? "homeContainer" : "homeContainer homeActive"}>
      <div className="homeWrapper">
        <Home_Header />
        <Home_Content />
        <Home_Footer />
      </div>
    </div>
  );
};
