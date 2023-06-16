import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: '80vh',
      }}
    >
      <h1
        style={{
          color: "#fff",
          fontSize: "6rem",
          textAlign: "center",
        }}
      >
        ERROR 404...Not Found :/
      </h1>

      <Link
        to="/"
        style={{
          color: "yellow",
          fontSize: "3rem",
          textDecoration: "underline",
        }}
      >
        VOLTAR PARA HOME PAGE
      </Link>
    </div>
  );
};

export default Notfound;
