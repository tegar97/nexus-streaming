import GamesCardMobile from "component/GamesCardMobile";
import NavbarMobile from "component/NavbarMobile";
import StreamingThumbnailMobile from "component/StreamingThumbnailMobile";

import VideoMobile from "component/VideoMobile";
import React, { useState } from "react";
import DataGames from "dummy/games.json";

function TrendingMobile() {
  const [category, setCategory] = useState("video");

  const ChangeCategory = (value) => {
    setCategory(value);
  };
  return (
    <div className="relative h-full py-5 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section data-aos="fade-up">
        <div className="px-3">
          <h1 className="text-2xl font-semibold text-white">Trending</h1>
          <ul className="flex flex-row mt-5">
            <li
              className={`py-2 ${
                category === "video"
                  ? "text-purple-600 "
                  : "text-white opacity-60"
              }cursor-pointer`}
              style={{
                borderBottom: category === "video" ? "2px solid #6D5DD2" : "",
              }}
              onClick={() => ChangeCategory("video")}
            >
              Streamers
            </li>
            <li
              className={`py-2 ml-5  cursor-pointer ${
                category === "games"
                  ? "text-purple-600 "
                  : "text-white opacity-60"
              }cursor-pointer`}
              style={{
                borderBottom: category === "games" ? "2px solid #6D5DD2" : "",
              }}
              onClick={() => ChangeCategory("games")}
            >
              Games
            </li>
          </ul>
        </div>

        <div className="mt-5">
          {category === "video" ? (
            <VideoMobile />
          ) : (
            <div className="px-2">
              {DataGames.map((data) => (
                <GamesCardMobile
                  title={data.title}
                  image={data.poster}
                  streamersOnline={data.streamersCount}
                  genre={data.genre}
                  slug={data.slug}
                />
              ))}
            </div>
          )}
        </div>
        <div className="h-40"></div>
      </section>
    </div>
  );
}

export default TrendingMobile;
