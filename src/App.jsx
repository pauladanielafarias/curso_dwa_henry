import axios from "axios";
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menu/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import Error404 from "./components/Errors/Error404";
import SignUp from "./components/SignUp/SignUp";
import PATH_ROUTES from "./helpers/pathRoutes";

// Constantes
import constants from "./helpers/constants";
import sendCharacter from "./helpers/sendCharacter";
const BACK_URL = constants.BACK_URL;

function App() {
  //Hook de react-router-dom que nos permite acceder a la ruta actual
  const { pathname } = useLocation();
  //Hook de estado que nos permite guardar los personajes que buscamos
  const [characters, setCharacters] = useState([]);
  //Hook de react-router-dom que nos permite navegar entre rutas
  const navigate = useNavigate();

  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Función que se ejecuta cuando el usuario se autentica
   * @returns - cambia el estado de autenticación a true
   */
  const onLogin = () => {
    // Esta función se llama desde el componente Form cuando el usuario se autentica
    setIsAuthenticated(true);
    navigate(PATH_ROUTES.INDEX);
  };

  /**
   * Función que se ejecuta cuando se hace una búsqueda
   * @param {*} id - id del personaje a buscar
   * @returns - si el id es válido, agrega el personaje a la lista de personajes buscados
   * @returns - si el id no es válido, muestra un mensaje de error
   */
  const onSearch = async (id) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `${BACK_URL}/character/${id}`,
      });

      if (data.id) {
        await sendCharacter(data);

        setCharacters((characters) => {
          if (characters.find((character) => character.id === data.id)) {
            window.alert("¡Ya agregaste este personaje!");
            return characters;
          }
          return [...characters, data];
        });

      } else {
        window.alert("¡No hay personajes con el id ingresado!");
      }
    } catch (error) {
      if (error.response.status === 404) {
        window.alert("¡No hay personajes con el id ingresado!");
      }
      if (error.response.status === 500) {
        window.alert("Ingresaste un id inválido. ¡Inténtalo de nuevo!");
      }
    }
  };

  /**
   * Función que se ejecuta cuando se cierra un personaje
   * @param {*} id - id del personaje a cerrar
   * @returns - si el id es válido, elimina el personaje de la lista de personajes buscados
   */
  const onClose = (id) => {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  };

  // Utilizamos useEffect para manejar la redirección
  useEffect(() => {
    if (
      !isAuthenticated &&
      pathname !== PATH_ROUTES.LOGIN &&
      pathname !== PATH_ROUTES.SIGNUP
    ) {
      navigate(PATH_ROUTES.LOGIN);
    }
  }, [isAuthenticated, pathname, navigate]);

  return (
    <>
      {pathname !== PATH_ROUTES.LOGIN && pathname !== PATH_ROUTES.SIGNUP && (
        <Navbar onSearch={onSearch} />
      )}
      <Routes>
        <Route
          path={PATH_ROUTES.LOGIN}
          element={
            isAuthenticated ? (
              <Navigate to={PATH_ROUTES.INDEX} replace />
            ) : (
              <Login onLogin={onLogin} isAuthenticated={isAuthenticated} />
            )
          }
        />
        <Route path={PATH_ROUTES.SIGNUP} element={<SignUp />}></Route>
        {isAuthenticated && (
          <>
            <Route path={PATH_ROUTES.INDEX} element={<Home />} />
            <Route
              path={PATH_ROUTES.HOME}
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path={PATH_ROUTES.ABOUT} element={<About />} />
            <Route path={PATH_ROUTES.DETAIL + "/:id"} element={<Detail />} />
            <Route path="/*" element={<Error404 />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
