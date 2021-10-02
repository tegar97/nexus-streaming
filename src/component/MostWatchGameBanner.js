import React from "react";
import Baal from "assets/baal-white2.jpg";
import Fornite from "assets/fornite.png";
import Dota from "assets/dota.png";
import PopulerGameCard from "./PopulerGameCard";

function MostWatchGameBanner() {
  return (
    <div className="grid w-full h-full grid-cols-2 gap-10 duration-200 cursor-pointer ">
      <div
        className="relative game-main group"
        style={{
          background: `url(${Baal})`,
          height: "668px",
          borderRadius: "35px",

          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 duration-200 card-overlay"
          style={{ background: "rgba(0,0,0,.2)", borderRadius: "35px" }}
        ></div>

        <div className="absolute flex flex-col opacity-100 bottom-20 left-5">
          <h2 className="font-bold text-white" style={{ fontSize: "32px" }}>
            Geinshin Impact
          </h2>
          <div className="flex items-center">
            <div
              className=""
              style={{
                height: "15px",
                width: "15px",
                backgroundColor: "#00a67e",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></div>
            <span className="ml-2 text-white">90 Streamers Online</span>
          </div>
          <div className="mt-2">
            <button className="px-5 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
              See All Streamers
            </button>
          </div>
        </div>
      </div>
      <div>
        <PopulerGameCard
          gameImage={Fornite}
          title="Fornite"
          StreamersOnline={78}
        />
        <PopulerGameCard gameImage={Dota} title="Dota" StreamersOnline={70} />
        <PopulerGameCard
          gameImage={Fornite}
          title="Fornite"
          StreamersOnline={45}
        />
      </div>
    </div>
  );
}

export default MostWatchGameBanner;
