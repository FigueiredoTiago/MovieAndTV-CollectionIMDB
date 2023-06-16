/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import imdb from "../../sass/img/imdb.svg";
import useGet from "../../Hooks/useGetSingle";
import notFound from "../../sass/img/imgnotfound.jpg"; 
import Loading from "../Loading/Loading";

const searchURL = import.meta.env.VITE_API_SERIES;
const apikey = import.meta.env.VITE_API_KEY;

const Tv = () => {
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
            <h1 className="poster-title">{data && data.name}</h1>

            <span className="genre">
              {data &&
                data.genres.map((genre) => (
                  <span key={genre.name}>{genre.name}</span>
                ))}
            </span>

            <p className="poster-overview">{data && data.overview}</p>

            <span>Data de Lançamento: {data && data.first_air_date} </span>

            <span className="vote">
              <img src={imdb} width="20px" /> {data && data.vote_average}{" "}
            </span>

            <span>TEMPORADAS: {data && data.number_of_seasons}</span>
            <span>EPISODIOS: {data && data.number_of_episodes}</span>
            <span>
              DISPONIVEL EM:{" "}
              <a target="_blank" href={data && data.homepage} rel="noreferrer">
                {data && data.name}.COM
              </a>
            </span>
          </div>

          <div className="grid-6 poster">
            {data && data.poster_path === null && (
              <img src={notFound} alt={data.title} width="300px" />
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

export default Tv;
