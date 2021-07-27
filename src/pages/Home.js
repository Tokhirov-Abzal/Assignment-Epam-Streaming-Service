import { useContext } from "react";

// Components
import Searchbar from "../Components/Searchbar";
import ListItem from "../Components/ListItem";
// Context
import ShowsContext from "../context/shows/showsContext";
// Style
import "./Home.scss";

const Home = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows } = showsContext;
  console.log(shows);
  return (
    <div>
      <Searchbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="contentContainer">
          {shows.map((item) => (
            <ListItem
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
