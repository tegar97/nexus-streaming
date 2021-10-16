import GameCard from "component/GameCard";
import Navbar from "component/Navbar";
import SideBar from "component/SideBar";

import React, { createRef, useRef, useState, useEffect } from "react";
import Bakreyon from "assets/bakreyon.png";
import Thumbnail from "assets/thum2.jpg";

import "aos/dist/aos.css";

import AOS from "aos";
import CategoryHeader from "component/CategoryHeader";
import StreamingThumbnail from "component/StreamingThumbnail";
import { useMediaQuery } from "react-responsive";
import CategoryMobile from "./CategoryMobile";
import { useParams } from "react-router";
import gamesData from "dummy/games.json";
function Category() {
  const [gameData, setGameData] = useState([]);
  const navRef = useRef(null);
  const [isMinimaze, setIsMinimaze] = React.useState(220);
  const [active, seteActive] = useState(false);
  const { slug } = useParams();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    const getData = gamesData.filter((data) => {
      return data.slug === slug;
    });
    setGameData(getData[0]);
  }, [slug]);

  const minimazeSideBarFunction = (data) => {
    setIsMinimaze(data);
  };

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const handleNav = (direction) => {
    if (direction === "left") {
      // eslint-disable-next-line no-unused-expressions
      navRef ? (navRef.current.scrollLeft -= 200) : null;
    } else {
      // eslint-disable-next-line no-unused-expressions
      navRef ? (navRef.current.scrollLeft += 200) : null;
    }
  };

  const scroll = (scrollOffset) => {
    navRef.current.scrollLeft += scrollOffset;
  };

  const hideNavbar = () => {
    if (window.scrollY > 80) {
      seteActive(true);
    } else {
      seteActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideNavbar);
  }, [active]);

  if (isTabletOrMobile) return <CategoryMobile gameData={gameData} />;
  return (
    <div className="relative flex overflow-hidden bg-black-500">
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
      <div className="flex-1 ">
        <main className="w-full ">
          {active && <Navbar />}
          <CategoryHeader
            title={gameData.title}
            description={gameData.description}
            videoUrl={gameData.videoAnimation}
            background={gameData.background}
          />
          )
          <section className="px-5 mt-10" data-aos="fade-up">
            <div className="flex flex-col ">
              <span className="text-xl font-bold text-white">
                Live Stream Now
              </span>
              <div className="mt-3">
                <span className="mt-2 text-sm text-white">Choose Country </span>
                <select
                  name="cars"
                  className="px-2 text-white bg-purple-600 border-2 border-white shadow-xl"
                  id="cars"
                >
                  <option value="volvo">Indonesia</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 mt-10">
              <StreamingThumbnail
                channelLogo={Bakreyon}
                thumbnail={Thumbnail}
                title={"MCC RISING TRAINING #1"}
                channelName={"bakyomon"}
              />
            </div>
          </section>
          <div className="div" style={{ height: "200px" }}></div>
        </main>
      </div>
    </div>
  );
}

export default Category;
