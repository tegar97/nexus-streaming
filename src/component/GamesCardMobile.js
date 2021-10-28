import React from "react";
import { Link } from "react-router-dom";
function GamesCardMobile({ title, streamersOnline, genre, image, slug }) {
  return (
    <Link to={`/game/${slug}`}>
      <div className="relative flex flex-row items-center mb-5 cursor-pointer group ">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-50 group-hover:bg-purple-600"></div>
        <img
          src={image}
          style={{ width: "80px", height: "100px", objectFit: "cover" }}
          alt="dummy photo"
        />
        <div className="flex flex-col ml-3">
          <h2 className="text-white ">{title}</h2>
          <span className="text-sm text-white opacity-80 ">
            {streamersOnline} streamers online
          </span>
          <div className="mt-5">
            <ul className="flex flex-row">
              {genre.map((data) => (
                <li className="mr-2">
                  <button
                    className="px-1 py-1 text-sm text-white"
                    style={{ backgroundColor: "rgba(224, 224, 224,.5)" }}
                  >
                    {data}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GamesCardMobile;
