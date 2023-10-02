import Card from "./Card";

const Cards = (props) => {
  const { characters } = props;
  return (
    <>
      <div className="cards">
        {characters.map((character) => {
          return (
            <Card
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={() => window.alert("Cerrando card")}
            />
          );
        })}
      </div>
    </>
  );
};

export default Cards;
