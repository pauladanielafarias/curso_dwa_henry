import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className="search_bar">
      <input
        type="search"
        placeholder="ID de tu personaje"
        onChange={handleChange}
        value={id}
      />
      <button className="btn" onClick={()=> onSearch(id)}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
