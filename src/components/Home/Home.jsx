import "./Home.css";
import { Link } from "react-router-dom";
import PATH_ROUTES from "../../helpers/pathRoutes";
const Home = () => {    
  return (
    <div className="home">
      <h1 className="title">Bienvenidos a Rick and Morty App</h1>
      <p className="description">
        Aquí podrás encontrar información sobre los personajes de la serie.
      </p>
      <p className="description">
        Para comenzar, haz click <Link to={PATH_ROUTES.HOME}>aquí</Link>
      </p>
    </div>
  );
};

export default Home;
