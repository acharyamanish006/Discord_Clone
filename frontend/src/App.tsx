import { Home } from "./Component/Home";
import { Navbar } from "./Component/Navbar";
import "./App.scss";
import { Details } from "./Component/Details";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Details />
      <Home />
    </div>
  );
}

export default App;
