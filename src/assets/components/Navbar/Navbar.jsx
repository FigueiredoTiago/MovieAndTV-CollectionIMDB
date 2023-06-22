/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate, Link } from "react-router-dom";
import searchIcon from "../../sass/img/search.svg";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  //estilo da barra
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isNavbarSolid = window.scrollY > 0;
      setNavbarSolid(isNavbarSolid);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  return (
    <header className={navbarSolid ? "solid" : "transparent"}>
      <h2 className="logo">
        <Link to="/">SearchMovies</Link>
      </h2>

      <nav id="navbar">
        <form onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <button type="submit">
            <img src={searchIcon} alt="search" />
          </button>
        </form>

        <NavLink exact to="/serie" activeClassName="active">
          Series
        </NavLink>
        <NavLink to="/movie" activeClassName="active">
          Filmes
        </NavLink>
        <NavLink to="/actor" activeClassName="active">
          Atores
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
