import React from "react";
function TopStreamerCard({ image, name, followers }) {
  return (
    <div className="flex flex-row mr-5 duration-500 ease-in-out cursor-pointer animation-streamers">
      <img src={image} alt="streamers" />
      <div className="flex flex-col ml-5">
        <span className="text-lg font-bold text-white">{name}</span>
        <span className="mt-2 text-sm" style={{ color: "#AFAFAF" }}>
          {followers} Followers
        </span>
      </div>
    </div>
  );
}

export default TopStreamerCard;
