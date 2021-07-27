import React from "react";
import "../index.scss";

function Content({ movies }) {
  console.log(movies);
  return (
    <div className="content">
      {movies.map((movie) => {
        <img src={movie.image} alt="" />;
      })}
    </div>
  );
}

export default Content;
