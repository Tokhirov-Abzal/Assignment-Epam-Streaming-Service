import { useState, useContext } from "react";
import "../index.scss";

// Context
import ShowsContext from "../context/shows/showsContext";
// Components
import Alert from "./Alert";

function Searchbar() {
  const [searchVal, setSearchVal] = useState("");
  const { searchShows } = useContext(ShowsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    searchShows(searchVal);
    setSearchVal("");
  };
  return (
    <div className="inputContainer">
      <label className="mainInputLabel" htmlFor="mainInput">
        Search any movie you want!
      </label>
      <form className="inputSection">
        <input
          value={searchVal}
          id="mainInput"
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button type="submit" id="mainSearchBtn" onClick={onSearchHandler}>
          Go
        </button>
      </form>
      <Alert message="Please, enter something" type="danger" />
    </div>
  );
}

export default Searchbar;
