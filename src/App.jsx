import axios from "axios";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menu/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import PATH_ROUTES from "./helpers/pathRoutes";

// Constantes
import constants from "./helpers/constants";
const BACK_URL = constants.BACK_URL;
  
function App() {
  //Hook de react-router-dom que nos permite acceder a la ruta actual
  const { pathname } = useLocation();
  //Hook de estado que nos permite guardar los personajes que buscamos
  const [characters, setCharacters] = useState([]);
  
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
        setCharacters((characters) => {
          if(characters.find((character) => character.id === data.id)){
            window.alert("¡Ya agregaste este personaje!");
            return characters;
          }
          return [...characters, data];
        }
          
        );
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

  return (
    <>
      {pathname !== PATH_ROUTES.INDEX && <Navbar onSearch={onSearch} />}

      <Routes>
        <Route path={PATH_ROUTES.INDEX} element={<Home />} />
        <Route
          path={PATH_ROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATH_ROUTES.ABOUT} element={<About />} />
        <Route path={PATH_ROUTES.DETAIL + "/:id"} element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
