import { React, useContext } from "react";
import homeContext from "../context/home/homeContext";
import ListItem from "../Components/ListItem";

const Bookmark = () => {
  const { favouriteList } = useContext(homeContext);
  console.log(favouriteList);
  return (
    <div className="contentContainer">
      {favouriteList.map((item) => (
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
            item.show.rating.average ? item.show.rating.average : "no rating"
          }
          id={item.show.id}
          info={item.show.officialSite}
          // onFavourite={onFavourite}
          favouriteList={favouriteList}
        />
      ))}
    </div>
  );
};

export default Bookmark;
