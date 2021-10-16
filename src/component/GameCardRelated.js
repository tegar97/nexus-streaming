import React from "react";
import DummyPhoto from "assets/thum2.jpg";
function GameCardRelated() {
  return (
    <div className="flex flex-row mb-10 cursor-pointer group">
      <div className="relative" style={{ width: "136px", height: "86px" }}>
        <img
          src={DummyPhoto}
          style={{ borderRadius: "8px" }}
          className="w-full h-full"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-purple-600 opacity-0 group-hover:opacity-40 "></div>
      </div>
      <div className="flex flex-col ml-5">
        <span className="text-sm font-semibold text-white">
          New Update Genshin Impact
        </span>
        <span style={{ color: "#9A9A9A", fontSize: "14px" }} className="mt-1">
          Bakreyon
        </span>
        <span style={{ color: "#9A9A9A", fontSize: "14px" }} className="mt-1">
          10k viwes
        </span>
      </div>
    </div>
  );
}

export default GameCardRelated;
