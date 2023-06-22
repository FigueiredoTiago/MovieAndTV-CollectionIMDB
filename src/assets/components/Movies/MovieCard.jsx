/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import imdb from "../../sass/img/imdb.svg";
import notFound from "../../sass/img/imgnotfound.jpg";

const MovieCard = ({ movie, showLink = true }) => {
  const imgURL = import.meta.env.VITE_IMG;

  return (
    <div className="grid-3 movie-card animateIn">
      {movie.poster_path === null && (
        <img
          className="poster-img-not-found"
          src={notFound}
          alt={movie.title}
        />
      )}

      {movie.profile_path === null && (
        <img
          className="poster-img-not-found"
          src={notFound}
          alt={movie.title}
        />
      )}

      {movie.media_type == "movie" && movie.poster_path !== null && (
        <img
          className="poster-card-img"
          src={imgURL + movie.poster_path}
          alt={movie.title}
        />
      )}

      {movie.media_type == "tv" && movie.poster_path !== null && (
        <img
          className="poster-card-img"
          src={imgURL + movie.poster_path}
          alt={movie.title}
        />
      )}

      {movie.media_type == "person" && movie.profile_path !== null && (
        <img
          className="poster-card-img"
          src={imgURL + movie.profile_path}
          alt={movie.title}
        />
      )}

      {movie.media_type == "movie" && (
        <p className="vote">
          <img src={imdb} alt="IMDB LOGO" />
          {movie.vote_average}
        </p>
      )}

      {movie.media_type == "tv" && (
        <p className="vote">
          <img src={imdb} alt="IMDB LOGO" />
          {movie.vote_average}
        </p>
      )}

      {movie.media_type == "movie" && (
        <h1 className="title-card">{movie.title}</h1>
      )}

      {movie.media_type == "tv" && <h1 className="title-card">{movie.name}</h1>}

      {movie.media_type == "person" && (
        <h1 className="title-card">{movie.name}</h1>
      )}

      {movie.media_type == "person" && <h1 className="title-card">Actor</h1>}

      {showLink && movie.media_type == "movie" && (
        <Link className="btn" to={`/movie/${movie.id}`}>
          Ver Mais..
        </Link>
      )}

      {showLink && movie.media_type == "tv" && (
        <div className="btn">
          <Link to={`/tv/${movie.id}`}>Ver Mais...</Link>
        </div>
      )}

      {showLink && movie.media_type == "person" && (
        <div className="btn">
          <Link to={`/person/${movie.id}`}>Ver Mais...</Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
