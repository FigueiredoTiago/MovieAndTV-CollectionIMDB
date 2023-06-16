import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./assets/components/Movies/Movie";
import Home from "./assets/components/Home/Home.jsx";
import Search from "./assets/components/Search/Search.jsx";
import App from "./App.jsx";
import Tv from "./assets/components/Tv/Tv";
import Notfound from "./assets/components/Notfound/Notfound";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="tv/:id" element={<Tv />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
