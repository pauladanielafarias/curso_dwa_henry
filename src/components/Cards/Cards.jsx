import Card from "./Card";

const Cards = (props) => {
  const { characters, onClose } = props;
  return (
    <>
      <div>
        <h1 className="title">Personajes añadidos</h1>
      </div>
      <div className="cards">
        {characters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={() => onClose(character.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
