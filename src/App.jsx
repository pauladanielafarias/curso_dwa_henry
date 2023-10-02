import "./App.css";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import Navbar from "./components/Menu/Navbar";
import { useState } from "react";

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
      <Home />
      <Navbar onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </>
  );
}

export default App;
