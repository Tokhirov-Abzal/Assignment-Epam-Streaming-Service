import { useState, useContext } from "react";
import "../index.scss";

// Context
import ShowsContext from "../context/shows/showsContext";
// import AlertsContext from "../context/alerts/alertsContext";
// Components
import Alert from "./Alert";

function Searchbar() {
  const [searchVal, setSearchVal] = useState("");
  const [alert, setAlert] = useState("");

  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  // const { alert, setAlert } = useContext(AlertsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchVal === "") {
      setAlert("Please enter something");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else {
      searchShows(searchVal);
      setSearchVal("");
    }
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
      {alert ? <Alert message={alert} /> : null}
    </div>
  );
}

export default Searchbar;
