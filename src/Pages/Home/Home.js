import GameCard from "component/GameCard";
import Navbar from "component/Navbar";
import SideBar from "component/SideBar";
import Phonix from "assets/phonex-valo.png";
import Caroline from "assets/caroline1.png";
import Baal from "assets/baal.png";
import Felix from "assets/felix.png";
import Shroud from "assets/shroud.png";
import Ninja from "assets/ninja.png";
import MrBeast from "assets/mrBeast.png";
import Thumbnail from "assets/thum2.jpg";
import Bakreyon from "assets/bakreyon.png";
import { useMediaQuery } from "react-responsive";

import React, { createRef, useRef } from "react";
import TopStreamerCard from "component/TopStreamerCard";
import StreamingThumbnail from "component/StreamingThumbnail";
import MostWatchGameBanner from "component/MostWatchGameBanner";
import Slider from "react-slick";

import "aos/dist/aos.css";

import AOS from "aos";
import Carousel from "component/Carousel";
import HomeMobileVersion from "./HomeMobileVersion";
function Home() {
  const navRef = useRef(null);
  const [isMinimaze, setIsMinimaze] = React.useState(220);

  const minimazeSideBarFunction = (data) => {
    setIsMinimaze(data);
  };

  const RightRef = useRef(null);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isTabletOrMobile) return <HomeMobileVersion />;
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
      <div className="flex-1">
        <div
          style={{ height: 63 }}
          className="fixed z-20 flex items-center flex-1 w-screen px-2 py-2 border-b-2 border-gray-700 bg-black-500 "
        >
          <Navbar isMinimaze={isMinimaze} />
        </div>
        <main className="px-2 mt-2 ">
          <Carousel />

          <section className="px-5 mt-10">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Top Trend Games
              </span>
              <div></div>
            </div>

            <div
              className="flex w-full mt-20 "
              data-aos="fade-right"
              ref={navRef}
            >
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
          <section className="px-5 mt-10" data-aos="fade-left">
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
          <section className="px-5 mt-10" data-aos="fade-up">
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
          <section className="px-5 mt-10" data-aos="fade-up">
            <div className="flex flex-row ">
              <span className="text-xl font-bold text-white">
                Live Stream Now
              </span>
            </div>
            <div className="mt-10 ">
              <MostWatchGameBanner />
            </div>
          </section>
          <section></section>
          <section className="h-20"></section>
        </main>
      </div>
    </div>
  );
}

export default Home;
