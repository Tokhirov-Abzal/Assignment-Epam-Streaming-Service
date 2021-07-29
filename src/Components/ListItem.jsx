import { Link } from "react-router-dom";
import { useState } from "react";
// import ShowsContext from "../context/shows/showsContext";

// Style
import "./ListItem.scss";

const ListItem = ({
  image,
  name,
  rating,
  id,
  info,
  onFavourite,
  setFavouriteList,
  favouriteList,
  obj,
}) => {
  // States

  const [favourite, setFavourite] = useState(false);
  // Context
  // const showsContext = useContext(ShowsContext);
  // const { loading, shows } = showsContext;

  const getFavourite = () => {
    setFavouriteList((prev) => [...prev, obj]);
    setFavourite(true);
  };

  return (
    <div className="listItem">
      <div className="imgContainer">
        <img className="listImg" src={image} alt={name} />
      </div>
      <div className="listContent">
        <div>
          <h2 className="listTite">{name}</h2>
          <h3 className="listRating">
            <span
              className={rating > 7 ? "green" : rating > 4 ? " yellow" : "red"}
            >
              {rating}
            </span>
          </h3>
        </div>
        <div className="listButtons">
          {info ? (
            <Link to={{ pathname: info }} target="_blank">
              <button className="infoBtn">More Info</button>
            </Link>
          ) : (
            <button className="infoBtn disabled">More Info</button>
          )}

          <div>
            <i
              onClick={getFavourite}
              className={
                favourite
                  ? "fas fa-heart heartIconFavOn"
                  : "far fa-heart heartIconFavOff"
              }
              // onClick={handleFavouriteClick}
            ></i>
            <i className="fas fa-share-alt shareIcon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
