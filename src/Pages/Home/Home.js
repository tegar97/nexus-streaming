import GameCard from "component/GameCard";
import Navbar from "component/Navbar";
import SideBar from "component/SideBar";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Phonix from "assets/phonex-valo.png";
import Caroline from "assets/caroline1.png";
import Baal from "assets/baal.png";
import Felix from "assets/felix.png";
import Shroud from "assets/shroud.png";
import Ninja from "assets/ninja.png";
import MrBeast from "assets/mrBeast.png";
import Thumbnail from "assets/thum2.jpg";
import Bakreyon from "assets/bakreyon.png";

import React, { createRef, useRef } from "react";
import TopStreamerCard from "component/TopStreamerCard";
import StreamingThumbnail from "component/StreamingThumbnail";
import MostWatchGameBanner from "component/MostWatchGameBanner";
function Home() {
  const navRef = useRef(null);

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
  return (
    <div className="relative flex bg-black-500">
      <div className="div" style={{ width: 220 }}></div>

      <div className="fixed z-50 bg-black-500" style={{ width: 220 }}>
        <SideBar />
      </div>
      <div className="flex-1">
        <div
          style={{ height: 63 }}
          className="flex items-center px-2 py-2 border-b-2 border-gray-700 navbar "
        >
          <Navbar />
        </div>
        <main className="px-2 mt-2 ">
          <div className="relative w-full poster">
            <div className="absolute header-text bottom-20 left-5">
              <h1
                className="text-xl font-bold text-white "
                style={{
                  fontSize: "35px",
                  letterSpacing: "1px",
                  lineHeight: "50px",
                }}
              >
                Gambit Vs Team Envy - Valorant Master: Berlin - Finals Map
              </h1>
              <div className="mt-2">
                <button className="px-5 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
                  Watch Now{" "}
                </button>
              </div>
            </div>
          </div>

          <section className="px-5 mt-10">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Top Trend Games
              </span>
              <div></div>
            </div>

            <div className="flex w-full mt-20 " ref={navRef}>
              <GameCard
                imageBackground={"assets/valorant.png"}
                image={Phonix}
                title={"Valorant"}
                totalStream={125}
              />
              <GameCard
                imageBackground={"assets/FF.png"}
                image={Caroline}
                title={"Free Fire"}
                totalStream={100}
              />
              <GameCard
                imageBackground={"assets/geinshin.png"}
                image={Baal}
                title={"Geinshin Impact"}
                totalStream={95}
              />
            </div>
          </section>
          <section className="px-5 mt-10">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Top Streamers
              </span>
              <div></div>
            </div>

            <div className="grid w-full grid-cols-4 mt-10 ">
              <TopStreamerCard
                image={Felix}
                name={"Flex lengyel"}
                followers={10 + "M"}
              />
              <TopStreamerCard
                image={Shroud}
                name={"Shroud"}
                followers={8 + "M"}
              />
              <TopStreamerCard
                image={Ninja}
                name={"Ninja"}
                followers={952 + "K"}
              />
              <TopStreamerCard
                image={MrBeast}
                name={"Mr Beast"}
                followers={951 + "k"}
              />
            </div>
          </section>
          <section className="px-5 mt-10">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Live Stream Now
              </span>
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
          <section className="px-5 mt-10">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Live Stream Now
              </span>
            </div>
            <div className="mt-10 ">
              <MostWatchGameBanner />
            </div>
          </section>
          <section className="h-20"></section>
        </main>
      </div>
    </div>
  );
}

export default Home;
