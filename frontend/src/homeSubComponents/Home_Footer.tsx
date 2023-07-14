import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Css/Home_Footer.scss";
import { faGift } from "@fortawesome/free-solid-svg-icons/faGift";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons/faFaceSmile";
import { faFile } from "@fortawesome/free-solid-svg-icons/faFile";

export default function Home_Footer() {
  return (
    <div className="homeFooter">
      <div className="homeFooterInputField">
        <div>
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="homeFooterInputFieldIcon"
            size="lg"
          />
          <input
            type="text"
            placeholder="@MessageHere"
            className="homeFooterInputFieldTextBox"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faGift}
            size="lg"
            className="homeFooterInputFieldIcon"
          />
          <FontAwesomeIcon
            icon={faFile}
            size="lg"
            className="homeFooterInputFieldIcon"
          />

          <FontAwesomeIcon
            size="lg"
            icon={faFaceSmile}
            className="homeFooterInputFieldIcon"
          />
        </div>
      </div>
    </div>
  );
}
