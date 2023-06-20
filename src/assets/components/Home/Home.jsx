/* eslint-disable no-unused-vars */
import useGet from "../../Hooks/useGet";
import Loading from "../Loading/Loading";
import MovieCard from "../Movies/MovieCard";

const Home = () => {
  const apiTopMovies = import.meta.env.VITE_TOP_DAY;
  const apikey = import.meta.env.VITE_API_KEY;

  const { data, error, isLoading } = useGet(
    `${apiTopMovies}?${apikey}&language=pt-BR`
  );

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div id="home" className="container">
      <h1 className="home-title">
        TOP <span>FILMES</span> E <span>SERIES</span> DA SEMANA{" "}
      </h1>

      {error && <p>{error}</p>}

      {data && data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default Home;
