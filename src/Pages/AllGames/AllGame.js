import Navbar from "component/Navbar";
import SideBar from "component/SideBar";

import { useMediaQuery } from "react-responsive";

import React, { createRef, useRef, useState, useEffect } from "react";

import "aos/dist/aos.css";
import DataGames from "dummy/games.json";
import AOS from "aos";
import GamesCard from "component/GamesCard";

function AllGames() {
  const navRef = useRef(null);
  const [isMinimaze, setIsMinimaze] = React.useState(220);

  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("All");
  const minimazeSideBarFunction = (data) => {
    setIsMinimaze(data);
  };

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

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isTabletOrMobile) return <p>mobile</p>;
  return (
    <div className="relative flex h-screen overflow-hidden bg-black-500">
      <div className="div" style={{ width: isMinimaze }}></div>

      <div
        className="fixed z-50 duration-500 ease-in-out bg-black-500"
        style={{ width: isMinimaze }}
      >
        <SideBar
          isMinimaze={isMinimaze}
          minimazeSideBarFunction={minimazeSideBarFunction}
        />
      </div>
      <div className="flex-1">
        <div
          style={{ height: 63 }}
          className="fixed z-20 flex items-center flex-1 w-screen px-2 py-2 border-b-2 border-gray-700 bg-black-500 "
        >
          <Navbar isMinimaze={isMinimaze} />
        </div>
        <main className="px-2 mt-20">
          <section className="px-5 mt-10">
            <div className="flex flex-col ">
              <span
                className="font-semibold text-white "
                style={{ fontSize: "31px" }}
              >
                ALL GAMES
              </span>
              <div className="flex flex-row mt-5">
                <button
                  className={`px-5 py-2 text-white ${
                    category === "All"
                      ? "bg-purple-600 hover:bg-purple-700 "
                      : "border-2 border-gray-600"
                  }`}
                  style={{
                    borderRadius: "7px",
                    fontSize: "15px",
                  }}
                  onClick={() => changeCategory("All")}
                >
                  All GAMES
                </button>

                <button
                  className={`px-5 py-2  ml-2 text-white ${
                    category === "Mobile"
                      ? "bg-purple-600 hover:bg-purple-700 "
                      : "border-2 border-gray-600"
                  }`}
                  style={{ borderRadius: "7px", fontSize: "15px" }}
                  onClick={() => changeCategory("Mobile")}
                >
                  Mobile Games
                </button>
                <button
                  className={`px-5 py-2 ml-2 text-white ${
                    category === "PC"
                      ? "bg-purple-600 hover:bg-purple-700 "
                      : "border-2 border-gray-600"
                  }`}
                  style={{
                    border: "1px solid #adadad",
                    borderRadius: "7px",
                    fontSize: "15px",
                  }}
                  onClick={() => changeCategory("PC")}
                >
                  Pc Games
                </button>
              </div>
            </div>
            <div
              className="flex w-full mt-20 "
              data-aos="fade-right"
              ref={navRef}
            >
              <div className="grid grid-cols-5 gap-5">
                {games.map((data) => (
                  <GamesCard
                    slug={data.slug}
                    streamersCount={data.streamersCount}
                    title={data.title}
                    image={data.poster}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AllGames;
