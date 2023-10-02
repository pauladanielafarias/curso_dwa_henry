import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Menu/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import PATH_ROUTES from "./helpers/pathRoutes";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `https://rickandmortyapi.com/api/character/${id}`,
      });
      
      if (data.id) {
        setCharacters((characters) => [...characters, data]);
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

  const onClose = (id) => {
    setCharacters((characters) =>
      characters.filter((character) => character.id !== id)
    );
  };

  return (
    <>
      <Navbar onSearch={onSearch} />
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
