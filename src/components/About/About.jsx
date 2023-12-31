import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">About</h1>
      <p className="text">
        Esta es una aplicación creada por <strong>Paula Farias</strong> como
        trabajo práctico integrador de la carrera de Desarrollo Web Avanzado de
        Henry.
      </p>
      <p className="text">
        Se trata de una SPA (Single Page Application) que consume la API pública
        de Rick and Morty y permite buscar personajes por id, para luego
        agregarlos a una lista de personajes favoritos.
      </p>
      <p className="text">
        La aplicación fue creada con React, React Router, Axios y CSS.
      </p>
      <p className="text">
        Para ver el código fuente, visitá el{" "}
        <a
          href="https://github.com/pauladanielafarias/curso_dwa_henry"
          target="_blank"
          rel="noreferrer"
        >
          repositorio de GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default About;
