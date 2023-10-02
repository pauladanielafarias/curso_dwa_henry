import SearchBar from "./SearchBar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import PATH_ROUTES from "../../helpers/pathRoutes";

const Navbar = (props) => {
  const { onSearch } = props;
  return (
    <div className="navbar">
      <Link to={PATH_ROUTES.INDEX}>
        <img
          className="logo"
          src="/logo.jpg"
          alt="Rick and Morty"
        />
      </Link>

      <Link to={PATH_ROUTES.HOME}>Home</Link>
      <Link to={PATH_ROUTES.ABOUT}>About</Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Navbar;
