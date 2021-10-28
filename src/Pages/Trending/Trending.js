import Navbar from "component/Navbar";
import SideBar from "component/SideBar";

import { useMediaQuery } from "react-responsive";

import React, { createRef, useRef, useState, useEffect } from "react";

import "aos/dist/aos.css";
import DataGames from "dummy/games.json";
import AOS from "aos";
import GamesCard from "component/GamesCard";
import TrendingCard from "component/TrendingCard";
import { Link } from "react-router-dom";
import TrendingMobile from "./TrendingMobile";
function Trending() {
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

  if (isTabletOrMobile) return <TrendingMobile />;
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
          <section className="px-5 mt-20">
            <h1 className="text-2xl font-semibold text-white ">Trending</h1>
            <div className="flex flex-row mt-16 ">
              <div className="" style={{ width: "78%" }}>
                <TrendingCard />
                <TrendingCard />
              </div>
              <div className="flex flex-1 ml-10" style={{ height: "100%" }}>
                <div
                  className="relative w-full px-5 py-5 cursor-pointer"
                  style={{ background: "#262837", borderRadius: "28px" }}
                >
                  <h2 className="text-white ">Trending Games</h2>

                  <ul className="mt-2">
                    <Link to="/game/genshin-impact">
                      <li className="flex flex-row items-center mb-2 group hover:bg-purple-600 hover:text-white">
                        <span
                          style={{ fontSize: "25px" }}
                          className="text-purple-600 group-hover:text-white"
                        >
                          01
                        </span>
                        <span className="ml-2 text-white opacity-95 ">
                          {" "}
                          Genshin Impact
                        </span>
                      </li>
                    </Link>

                    <Link to="/game/valorant">
                      <li className="flex flex-row items-center mb-2 group hover:bg-purple-600 hover:text-white">
                        <span
                          style={{ fontSize: "25px" }}
                          className="text-purple-600 group-hover:text-white"
                        >
                          02
                        </span>
                        <span className="ml-2 text-white opacity-95 ">
                          {" "}
                          Valorant
                        </span>
                      </li>
                    </Link>

                    <Link to="/game/mobile-legends">
                      <li className="flex flex-row items-center mb-2 group hover:bg-purple-600 hover:text-white">
                        <span
                          style={{ fontSize: "25px" }}
                          className="text-purple-600 group-hover:text-white"
                        >
                          03
                        </span>
                        <span className="ml-2 text-white opacity-95 ">
                          {" "}
                          Mobile Legends
                        </span>
                      </li>
                    </Link>
                    <Link to="/game/free-fire">
                      <li className="flex flex-row items-center mb-2 group hover:bg-purple-600 hover:text-white">
                        <span
                          style={{ fontSize: "25px" }}
                          className="text-purple-600 group-hover:text-white"
                        >
                          04
                        </span>
                        <span className="ml-2 text-white opacity-95 ">
                          {" "}
                          Free fire
                        </span>
                      </li>
                    </Link>
                    <Link to="/game/league-of-legends">
                      <li className="flex flex-row items-center mb-2 group hover:bg-purple-600 hover:text-white">
                        <span
                          style={{ fontSize: "25px" }}
                          className="text-purple-600 group-hover:text-white"
                        >
                          05
                        </span>
                        <span className="ml-2 text-white opacity-95 ">
                          {" "}
                          League of legends
                        </span>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Trending;
