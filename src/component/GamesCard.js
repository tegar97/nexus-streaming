import React from "react";
import PosterDummy from "assets/poster-genshin.jpg";
import { Link } from "react-router-dom";
function GamesCard({ title, streamersCount, image, slug }) {
  return (
    <Link to={`/game/${slug}`}>
      <div className="flex flex-col items-center px-2 py-2 duration-500 ease-in-out cursor-pointer hover:shadow-lg group hover:bg-purple-600 hover:translate-x-5">
        <figure className="relative">
          <img
            alt="poster"
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
          <div
            className="absolute z-20 text-center opacity-0 group-hover:opacity-100"
            style={{ top: "170px" }}
          >
            <span className="text-lg text-white">
              {streamersCount} Streamers Online
            </span>
            <button className="px-2 py-2 mt-2 text-white bg-purple-600">
              Watch Now
            </button>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 group-hover:opacity-80 bg-black-500"></div>
        </figure>
        <div>
          <h2 className="mt-2 text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default GamesCard;
