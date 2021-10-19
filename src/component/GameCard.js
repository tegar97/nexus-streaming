import React from "react";
import { ReactComponent as Play } from "assets/play.svg";
import { Link } from "react-router-dom";
function GameCard({ imageBackground, image, totalStream, title, slug }) {
  return (
    <Link to={`${slug}`}>
      <div
        className="relative px-5 mr-12 duration-500 cursor-pointer animation-card group"
        style={{
          background: `url(${imageBackground})`,
          height: "180px",
          borderRadius: "35px",
          width: "277.25px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute flex flex-col bottom-6">
          <Play className="mb-2" />
          <span className="font-bold text-white " style={{ fontSize: "18px" }}>
            {title}
          </span>
          <span className="text-sm font-light text-white ">
            {totalStream} Streamers
          </span>
        </div>

        <div className="absolute right-0 duration-500 bottom-5 character group-hover:bottom-10">
          <img src={image} alt="Character Animation" />
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
