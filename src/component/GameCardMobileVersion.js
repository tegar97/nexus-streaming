import React from "react";
import { ReactComponent as Play } from "assets/play.svg";

import { Link } from "react-router-dom";
function GameCardMobileVersion({
  imageBackground,
  image,
  totalStream,
  title,
  bgColor,
}) {
  return (
    <Link to="/category/genshin">
      <div
        className="relative w-full px-5 mr-3 cursor-pointer animation-card group "
        style={{
          background: `url(${imageBackground})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "140px",
          borderRadius: "23px",

          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-80 group-hover:opacity-50"
          style={{ backgroundColor: bgColor, borderRadius: "23px" }}
        ></div>
        <div className="absolute z-10 flex flex-col left-2 bottom-2">
          <span className="font-bold text-white " style={{ fontSize: "14px" }}>
            {title}
          </span>
          <span
            className="text-sm font-light text-white "
            style={{ fontSize: "7px" }}
          >
            {totalStream} Streamers
          </span>
        </div>

        <div className="absolute right-0 duration-500 bottom-2 character group-hover:bottom-10">
          <img src={image} alt="dummy photo" />
        </div>
      </div>
    </Link>
  );
}

export default GameCardMobileVersion;
