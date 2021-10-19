import GamesCardMobile from "component/GamesCardMobile";
import NavbarMobile from "component/NavbarMobile";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import DataGames from "dummy/games.json";

function AllGamesMobile() {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("All");

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setGames(DataGames);
  }, []);
  const changeCategory = (category) => {
    if (category === "All") {
      setGames(DataGames);
    } else {
      const getData = DataGames.filter((data) => {
        return data.category === category;
      });

      setGames(getData);
    }
    setCategory(category);
  };

  return (
    <div className="relative h-full px-3 py-5 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section data-aos="fade-up">
        <h1 className="text-2xl font-semibold text-white">Browse</h1>
        <ul className="flex flex-row mt-5">
          <li
            className="py-2 text-purple-600 cursor-pointer"
            style={{ borderBottom: "2px solid #6D5DD2" }}
          >
            All Games
          </li>
          <li className="py-2 ml-5 text-white cursor-pointer opacity-60">
            Pc Games
          </li>
          <li className="py-2 ml-5 text-white cursor-pointer opacity-60">
            Mobile Games
          </li>
        </ul>

        <div className="mt-5">
          {games.map((data) => (
            <GamesCardMobile
              title={data.title}
              image={data.poster}
              streamersOnline={data.streamersCount}
              genre={data.genre}
              slug={data.slug}
            />
          ))}
        </div>
      </section>
      <div className="h-20"></div>
    </div>
  );
}

export default AllGamesMobile;
