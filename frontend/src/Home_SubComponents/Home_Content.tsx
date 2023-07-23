import Chat_Box from "./Chat_Box";
import "./Css/Home_Content.scss";

export default function Home_Content() {
  return (
    <div className="homeContent">
      <div className="homeContentChatBox">
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
        <Chat_Box />
      </div>
    </div>
  );
}
