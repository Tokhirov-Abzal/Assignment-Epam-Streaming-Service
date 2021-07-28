import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import ShowsContext from "../context/shows/showsContext";

// Style
import "./ListItem.scss";
import { SET_FAVOURITE } from "../context/types";

const ListItem = ({ image, name, rating, id, info }) => {
  const [favourite, setFavourite] = useState(false);
  // const [favouriteItems, setFavouriteItems] = useState([]);
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;

  // useEffect(() => {
  //   const handleFavouriteClick = () => {
  //     setFavourite(!favourite);
  //     if (favourite === true) {
  //       setFavouriteItems(shows);
  //     }
  //   };
  // }, [favourite]);

  return (
    <div className="listItem">
      <div className="imgContainer">
        <img className="listImg" src={image} alt={name} />
      </div>
      <div className="listContent">
        <div>
          <h2 className="listTite">{name}</h2>
          <h3 className="listRating">
            Rating:{" "}
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
            <div></div>
          )}

          <div>
            <i
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
