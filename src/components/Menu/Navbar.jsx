import SearchBar from "./SearchBar"
import "./Navbar.css"

const Navbar = (props) => {
    const { onSearch } = props;
    return (
        <div className="navbar">
        <SearchBar onSearch={onSearch} />
      </div>
    );
}

export default Navbar;