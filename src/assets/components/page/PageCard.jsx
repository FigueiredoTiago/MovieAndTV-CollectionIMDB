/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import imdb from "../../sass/img/imdb.svg";
import notFound from "../../sass/img/imgnotfound.jpg";

const PageCard = ({ data, showLink = true }) => {
  const imgURL = import.meta.env.VITE_IMG;

  return (
    <div className="grid-3 movie-card">
      {data && (
        <img
          className="poster-card-img"
          src={imgURL + data.poster_path}
          alt={data.title}
        />
      )}

      {data && (
        <p className="vote">
          <img src={imdb} alt="IMDB LOGO" />
          {data.vote_average}
        </p>
      )}

      {data && <h1 className="title-card">{data.name}</h1>}

      {data && showLink && (
        <Link className="more" to={`/tv/${data.id}`}>
          Ver Mais..
        </Link>
      )}
    </div>
  );
};

export default PageCard;
