import SearchBar from "./SearchBar";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import PATH_ROUTES from "../../helpers/pathRoutes";
import constants from "../../helpers/constants";

const Navbar = (props) => {
  const { onSearch } = props;
  return (
    <div className="navbar">
      <Link to={PATH_ROUTES.INDEX}>
        <img className="logo" src={constants.LOGO_PATH} alt="Rick and Morty" />
      </Link>

      <Link to={PATH_ROUTES.HOME}>Home</Link>
      <Link to={PATH_ROUTES.ABOUT}>About</Link>

      {useLocation().pathname === PATH_ROUTES.HOME && (
        <SearchBar onSearch={onSearch} />
      )}
    </div>
  );
};

export default Navbar;
