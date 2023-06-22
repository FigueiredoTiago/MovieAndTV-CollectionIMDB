import "../src/assets/sass/App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />

      <Footer />

    </div>
  );
}

export default App;
