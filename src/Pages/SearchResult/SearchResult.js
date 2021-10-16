import React, { useRef } from "react";
import AOS from "aos";
import SideBar from "component/SideBar";
import Navbar from "component/Navbar";
import GameCard from "component/GameCard";
import Baal from "assets/baal.png";
import StreamersProfil from "component/StreamersProfil";
import StreamingThumbnail from "component/StreamingThumbnail";
import Bakreyon from "assets/bakreyon.png";
import Thumbnail from "assets/thum2.jpg";

function SearchResult() {
  const navRef = useRef(null);
  const [isMinimaze, setIsMinimaze] = React.useState(220);

  const minimazeSideBarFunction = (data) => {
    setIsMinimaze(data);
  };

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
          <Navbar />

          <section className="px-5 mt-10">
            <span className="text-2xl text-white">
              Showing results for{" "}
              <span className="font-bold text-purple-600 ">
                Geinshin impact{" "}
              </span>
            </span>
            <div className="flex flex-col py-2 border-b-2 border-gray-700">
              <span className="text-xl font-bold text-white">Games</span>
            </div>

            <div
              className="flex w-full mt-14 "
              data-aos="fade-right"
              ref={navRef}
            >
              <GameCard
                imageBackground={"assets/geinshin.png"}
                image={Baal}
                title={"Geinshin Impact"}
                totalStream={95}
              />
            </div>
          </section>
          <section className="px-5 mt-10">
            <div className="flex flex-row items-center justify-between py-2 border-b-2 border-gray-700">
              <span className="text-xl font-bold text-white">
                Streamers Geinshin Impact
              </span>
              <span className="text-sm text-purple-600">Show More</span>
            </div>

            <div className="grid grid-cols-5 mt-10">
              <StreamersProfil />
            </div>
          </section>
          <section className="px-5 mt-10">
            <div className="flex flex-row items-center justify-between py-2 border-b-2 border-gray-700">
              <span className="text-xl font-bold text-white">
                Live Geinshin Now
              </span>
              <span className="text-sm text-purple-600">Show More</span>
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

export default SearchResult;
