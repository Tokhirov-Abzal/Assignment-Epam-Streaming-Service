import { Link } from "react-router-dom";

// Style
import "./ListItem.scss";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <div className="listItem">
      <div className="imgContainer">
        <img className="listImg" src={image} alt={name} />
      </div>
      <div className="listContent">
        <h2 className="listTite">{name}</h2>
        <h3>Rating: {rating}</h3>
        <div className="listButtons">
          <Link to={`/singleshow/${id}`}>
            <button>More Info</button>
          </Link>
          <i className="far fa-heart"></i>
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
