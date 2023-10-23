import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

// Constantes
import constants from "../../helpers/constants";
const BACK_URL = constants.BACK_URL;

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharacter = async () => {
      
      try {
        const { data } = await axios({
          method: "GET",
          url: `${BACK_URL}/character/${id}`,
        });
        if (data.id) {
          setCharacter(data);
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
    getCharacter();
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1 className="title">Detail</h1>

      <div className="detail container">
        <div className="left">
          <h1>{character.name}</h1>
          <p>STATUS | {character.status} </p>
          <p>GENDER | {character.gender}</p>
          <p>SPECIE | {character.species}</p>
          <p>ORIGIN | {character.origin?.name}</p>
        </div>
        <div className="right">
          <img src={character.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
