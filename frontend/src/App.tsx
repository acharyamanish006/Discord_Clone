import { Home } from "./Main_Component/Home";
import { Navbar } from "./Main_Component/Navbar";
import "./App.scss";
import { Details } from "./Main_Component/Details";
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
