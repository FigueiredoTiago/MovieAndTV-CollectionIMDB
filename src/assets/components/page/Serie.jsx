/* eslint-disable no-unused-vars */
import UseGet from "../../Hooks/useGet";
import Loading from "../Loading/Loading";
import PageCard from "./PageCard";

const Serie = () => {
  const apiTopMovies = import.meta.env.VITE_TOP_SERIES;
  const apikey = import.meta.env.VITE_API_KEY;

  const { data, error, isLoading } = UseGet(
    `${apiTopMovies}?${apikey}&language=pt-BR&page=1`
  );

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div id="home" className="container">
      <h1 className="home-title">
        <span>SERIES</span> MAIS BEM AVALIADAS{" "}
      </h1>

      {error && <p>{error}</p>}

      {data && data.map((item) => <PageCard key={item.id} data={item} />)}
    </div>
  );
};

export default Serie;
