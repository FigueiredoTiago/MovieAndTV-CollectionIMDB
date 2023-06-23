/* eslint-disable no-unused-vars */
import useGet from "../../Hooks/useGet";
import Loading from "../Loading/Loading";
import MovieCard from "../Movies/MovieCard";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const apiTopMovies = import.meta.env.VITE_TOP_DAY;
  const apikey = import.meta.env.VITE_API_KEY;

  const { data, error, isLoading } = useGet(
    `${apiTopMovies}?${apikey}&language=pt-BR`
  );

  if (isLoading) return <Loading />;
  return (
    <div id="home" className="container">
      <h1 className="title-animation">
        <TypeAnimation
          sequence={[
            "Bem Vindo ao CineScore!",
            2500,
            "Navegue Pelo Catalogo do IMDB",
            2000,
            "E Descubra Novos Filmes e Series...",
            2000,
            "Abaixo Top Filmes e Series do Dia:",
            9000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            display: "inline-block",
            color: "#f2b84b",
          }}
          repeat={Infinity}
        />
      </h1>

      {error && <p>{error}</p>}

      {data && data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Home;
