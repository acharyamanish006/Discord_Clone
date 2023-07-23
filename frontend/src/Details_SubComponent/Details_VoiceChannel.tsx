import "./Css/Details_Content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons/faHashtag";

export default function Details_VoiceChannel({ name }: any) {
  return (
    <div className="detailsVoiceChannelGroup">
      <FontAwesomeIcon icon={faHashtag} className="icon" />
      <p>{name}</p>
    </div>
  );
}
