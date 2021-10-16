import React from "react";
import DummyPhoto from "assets/ninja2.png";

function StreamersProfil() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="w-full streamersProfile"
        src={DummyPhoto}
        alt="stremers"
      />
      <div className="flex flex-col mt-5 text-center">
        <span className="text-lg font-bold text-white">Ninja</span>
        <span style={{ color: "#E0E0E0" }} className="">
          9M Followers
        </span>
      </div>
    </div>
  );
}

export default StreamersProfil;
