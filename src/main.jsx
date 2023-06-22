import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./assets/components/Movies/Movie";
import Home from "./assets/components/Home/Home.jsx";
import Search from "./assets/components/Search/Search.jsx";
import App from "./App.jsx";
import Tv from "./assets/components/Tv/Tv";
import Notfound from "./assets/components/Notfound/Notfound";
import Person from "./assets/components/Person/Person";
import MovieP from "./assets/components/pageWeb/MovieP";
import Actor from "./assets/components/pageWeb/Actor";
import Serie from "./assets/components/pageWeb/Series";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="serie" element={<Serie />} />
          <Route path="movie" element={<MovieP />} />
          <Route path="actor" element={<Actor />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="tv/:id" element={<Tv />} />
          <Route path="person/:id" element={<Person />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
