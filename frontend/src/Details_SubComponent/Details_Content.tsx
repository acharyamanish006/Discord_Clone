import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Css/Details_Content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Details_TextChannel from "./Details_TextChannel";
import Details_VoiceChannel from "./Details_VoiceChannel";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { Api_Context } from "../Context/Api_Contex";
import { useContext, useEffect, useState } from "react";

export const Details_Content = () => {
  const { createChannel } = useContext(Api_Context);
  const [textChannel, setTextChannel] = useState([]);

  useEffect(() => {
    console.log("details content");
    async function getChannels() {
      const res = await fetch("http://localhost:5000/api/v1/groups/channel");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await res.json();
      console.log(data)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setTextChannel(data)

    }
    void getChannels()
  }, [])

  const createTextChannel = () => {
    createChannel();
  };
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
            onClick={createTextChannel}
          />
        </div>
        {
          textChannel && textChannel.length > 0 && textChannel.map((channel: any) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            return <Details_TextChannel name={channel.channelId} />

          })
        }
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
