import { BrowserRouter } from "react-router-dom";
import Screens from "./Screens/ScreenRouter";

function App() {
  return (
    <div className=" h-screen items-center flex  md:px-5 bg-nite ">
      <Screens />
    </div>
  );
}

export default App;
