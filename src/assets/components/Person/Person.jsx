/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useGet from "../../Hooks/useGetSingle";
import notFound from "../../sass/img/imgnotfound.jpg";
import Loading from "../Loading/Loading";
import "./Person.scss";

const searchURL = import.meta.env.VITE_PERSON;
const apikey = import.meta.env.VITE_API_KEY;

const Person = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `${searchURL}${id}?${apikey}&language=pt-BR`
  );

  const bg = `https://image.tmdb.org/t/p/original/${
    data && data.profile_path
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
              Ator ({data && data.known_for_department})
            </span>

            <p className="biography">{data && data.biography}</p>

            {data && data.homepage != null && (
              <span className="web-link">
                SITE PESSOAL:{" "}
                <a
                  target="_blank"
                  href={data && data.homepage}
                  rel="noreferrer"
                >
                  {data && data.name}.COM
                </a>
              </span>
            )}

            <span>Nascimento: {data && data.birthday} </span>

            {data && data.deathday != null && (
              <span>Falecimento: {data && data.deathday} </span>
            )}

            <span>Cidade Natal: {data && data.place_of_birth} </span>
          </div>

          <div className="grid-6 poster">
            {data && data.poster_path === null && (
              <img src={notFound} alt={data.title} width="300px" />
            )}

            {data && data.poster_path !== null && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  data && data.profile_path
                }`}
                alt="CAPA"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
