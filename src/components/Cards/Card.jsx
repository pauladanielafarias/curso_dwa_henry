import "./Card.css"
const Card = (props) => {

  const { name, status, species, gender,origin,image, onClose } = props;
  
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
        <p className="left">{species}</p>
        <p className="right">{gender}</p>
        <p>{status}</p>
      </div>

      <p>{origin}</p>
    </div>
  );
};

export default Card;
