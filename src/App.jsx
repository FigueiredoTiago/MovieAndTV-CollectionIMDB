import "../src/assets/sass/App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />

    </div>
  );
}

export default App;
