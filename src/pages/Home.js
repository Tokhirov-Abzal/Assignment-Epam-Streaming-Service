import { useContext } from "react";

// Components
import Searchbar from "../Components/Searchbar";
import ListItem from "../Components/ListItem";
// Context
import ShowsContext from "../context/shows/showsContext";
import HomeContext from "../context/home/homeContext";
// Style
import "./Home.scss";

const Home = () => {
  // Context
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  const { favouriteList, setFavouriteList } = useContext(HomeContext);

  // const [favouriteList, setFavouriteList] = useState([]);

  // const onFavourite = (obj) => {
  //   console.log(obj);
  // };
  return (
    <div>
      <Searchbar />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <i
            className="fas fa-spinner"
            style={{ color: "white", textAlign: "center", fontSize: "200px" }}
          ></i>
        </div>
      ) : (
        <div className="contentContainer">
          {shows.map((item) => (
            <ListItem
              obj={item}
              key={item.show.id}
              name={item.show.name}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
              }
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "no rating"
              }
              id={item.show.id}
              info={item.show.officialSite}
              // onFavourite={onFavourite}
              favouriteList={favouriteList}
              setFavouriteList={(obj) => setFavouriteList(obj)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
