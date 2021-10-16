import React from "react";
import ValoBanner from "assets/valoBanner.png";
function PosterCardMobile() {
  return (
    <div
      className="relative w-full px-5 mr-12 cursor-pointer animation-card group"
      style={{
        height: "180px",
        borderRadius: "35px",
        backgroundColor: "#6B5DD3",
      }}
    >
      <div className="absolute flex flex-col w-1/2 top-6">
        <span
          className="font-semibold text-white "
          style={{ fontSize: "20px" }}
        >
          Valorant
        </span>
        <span className="mt-2 text-white" style={{ fontSize: "14px" }}>
          Gambit Vs Team Envy Valorant Master: Berlin
        </span>
        <button
          className="px-2 py-2 mt-2 text-sm text-white "
          style={{ background: "#8A7DDC", width: "80px", fontSize: "11px" }}
        >
          Watch Now
        </button>
      </div>

      <div className="absolute right-0 duration-500 bottom-2 character group-hover:bottom-3">
        <img src={ValoBanner} className="w-full h-full" alt="valo banner" />
      </div>
    </div>
  );
}

export default PosterCardMobile;
