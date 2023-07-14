import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Css/Details_Content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Details_TextChannel from "./Details_TextChannel";
import Details_VoiceChannel from "./Details_VoiceChannel";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

export const Details_Content = () => {
  return (
    <div className="detailsContent">
      <div className="detailsTextChannel">
        <div className="detailsTextChannelHeader">
          <div className="detailsTextChannelPara">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="textChannelMoreBtn"
            />
            <p>Text Channel</p>
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="detailsTextChannelPlusIcon"
          />
        </div>
        <Details_TextChannel name="general" />
        <Details_TextChannel name="in game" />
        <Details_TextChannel name="memes" />
      </div>
      <div className="detailsVoiceChannel">
        <div className="detailsVoiceChannelHeader">
          <div className="detailsVoiceChannelPara">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="voiceChannelMoreBtn"
            />
            <p>Voice Channel</p>
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="detailsVoiceChannelPlusIcon"
          />
        </div>
        <Details_VoiceChannel name="valorant" />
        <Details_VoiceChannel name="clash royal" />
        <Details_VoiceChannel name="Pubg" />
      </div>
    </div>
  );
};
