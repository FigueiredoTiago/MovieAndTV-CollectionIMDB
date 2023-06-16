/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";  
import useGet from "../../Hooks/useGetSingle";
import imdb from "../../sass/img/imdb.svg";
import notFound from "../../sass/img/imgnotfound.jpg";
import Loading from "../Loading/Loading";

const searchURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `${searchURL}${id}?${apikey}&external_source=imdb_id&language=pt-BR`
  );

  const bg = `https://image.tmdb.org/t/p/original/${
    data && data.backdrop_path
  }`;

  console.log(data);
  
  if (isLoading) return <Loading />;
  return (
    <div
      className="bg-movie"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="blur">
        <div className="container">
          <div className="grid-6 info-poster">
            <h1 className="poster-title">{data && data.title}</h1>

            <span className="genre">
              {data &&
                data.genres.map((genre) => (
                  <span key={genre.name}>{genre.name}</span>
                ))}
            </span>

            <p className="poster-overview">{data && data.overview}</p>

            <span>Data de Lançamento: {data && data.release_date} </span>

            <span className="vote">
              <img src={imdb} width="20px" /> {data && data.vote_average}{" "}
            </span>
          </div>

          <div className="grid-6 poster">
            {data && data.poster_path === null && (
              <img width="300px" src={notFound} alt={data.title} />
            )}

            {data && data.poster_path !== null && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  data && data.poster_path
                }`}
                alt="CAPA"
              />
            )}

            <span>{data && data.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
