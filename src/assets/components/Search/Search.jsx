/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import MovieCard from "../Movies/MovieCard";
import useGet from "../../Hooks/useGet";
import Loading from "../Loading/Loading";

const searchURL = import.meta.env.VITE_SEARCH_ALL;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data, isLoading, error } = useGet(
    `${searchURL}?${apiKey}&&query=${query}&language=pt-BR`
  );

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div className="container search-container">

      <h2 className="search-title">
        Todos Resultados para: <span>{query}</span>
      </h2>

      {data && data.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

    </div>
  );
};

export default Search;
