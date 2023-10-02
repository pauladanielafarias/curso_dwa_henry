import "./App.css";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";
import axios from "axios";
import Navbar from "./components/Menu/Navbar";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const example = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const onSearch = (id) => {
    const res = axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/character/${id}`,
    });

    console.log(res);

    if (res) {
      setCharacters((characters) => [...characters, res.data]);
    }
    else {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  return (
    <>
      <Home />
      <Navbar onSearch={onSearch} />
      <Cards characters={characters} />
    </>
  );
}

export default App;
