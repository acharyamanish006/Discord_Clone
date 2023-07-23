import "./Css/Details.scss";
import { Details_Header } from "../Details_SubComponent/Details_Header";
import { Details_Content } from "../Details_SubComponent/Details_Content";
import { Details_Footer } from "../Details_SubComponent/Details_Footer";
import { Basic_Function } from "../Context/Basic_Functionality";
import { useContext } from "react";

export const Details = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { active }: any = useContext(Basic_Function);

  return (
    <div className={active ? "detailsContainer" : "hide"}>
      {/* <div> */}
      <div className="detailsWrapper">
        <Details_Header />
        <Details_Content />
        <Details_Footer />
      </div>
      {/* </div> */}
    </div>
  );
};
