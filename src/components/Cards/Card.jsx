import { Link } from "react-router-dom";
import "./Card.css";
import PATH_ROUTES from "../../helpers/pathRoutes";

const Card = (props) => {
  const { id, name, species, gender, image, onClose } = props;
  return (
    <div className="card">
      <button className="close" onClick={onClose}>
        X
      </button>
      <div className="container">
        <img src={image} alt="" />
        <Link to={PATH_ROUTES.DETAIL + "/"+id}>
          <h2 className="name bottom-right">{name}</h2>
        </Link>
      </div>
      <div className="container">
        <p className="left">
          <span>Specie</span>: <br /> {species}
        </p>
        <p className="right">
          <span>Gender</span>: <br /> {gender}
        </p>
      </div>
    </div>
  );
};

export default Card;
