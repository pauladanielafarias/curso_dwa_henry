import "./Card.css";
const Card = (props) => {
  const { name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className="card">
      <button className="close" onClick={onClose}>
        X
      </button>
      <div className="container">
        <img src={image} alt="" />
        <h2 className="name bottom-right">{name}</h2>
      </div>
      <div className="container">
        <p>
          <span>Status</span>: {status}
        </p>
        <p className="left">
          <span>Specie</span>: <br /> {species}
        </p>
        <p className="right">
          <span>Gender</span>: <br /> {gender}
        </p>
      </div>

      <p className="center">
        <span>Origin</span>: {origin}
      </p>
    </div>
  );
};

export default Card;
