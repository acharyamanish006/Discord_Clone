import { Avatar } from "@mui/material";
import "./Css/Chat_Box.scss";

export default function Chat_Box() {
  return (
    <div className="chatContainer">
      <div className="chatWrapper">
        <div className="chatUserAvatar">
          <Avatar
            sx={{
              width: 44,
              height: 44,
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68Te0_43cD1IS27dpVkLv7VYmzqP7UwwvkLW8dQ-QVApFtteBZW4rdGJs_c-skVyCQKw&usqp=CAU"
          />
        </div>
        <div className="chatDetails">
          <div className="chatUserName">
            <p className="chatUserNamePara">Uzumaki</p>
            <p className="chatUserIdPara">@acharya003</p>
          </div>
          <div className="chatMessage">
            <p>
              this is my first message first message first message first message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
