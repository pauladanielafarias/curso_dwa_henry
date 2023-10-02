import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="title">About</h1>
      <p className="text">
        Esta es una aplicación creada por <strong>Paula Farias</strong> como trabajo práctico integrador del módulo 2 de la carrera de Desarrollo Web Avanzado de Henry.
      </p>
      <p className="text">
        Se trata de una SPA (Single Page Application) que consume la API pública de Rick and Morty y permite buscar personajes por id.
      </p>
      <p className="text">
        La aplicación fue creada con React, React Router, Axios y CSS.
      </p>
      <p className="text">
        Para ver el código fuente, visitá el <a href="github.com/pauladanielafarias">repositorio de GitHub</a>.
      </p>


    </div>
  );
};

export default About;
