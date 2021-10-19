import React from "react";
import DummyPoster from "assets/dummy_poster.jpg";
import { ReactComponent as Eyes } from "assets/eyes2.svg";
import Bakreyon from "assets/bakreyon.png";
function CategoryGameCard() {
  return (
    <div className="flex flex-row w-full cursor-pointer">
      <img
        style={{ width: "150px", height: "100px", borderRadius: "8px" }}
        src={DummyPoster}
        alt="Category Game Card"
      />
      <div className="flex flex-col ml-3">
        <h3 className="font-bold text-white" style={{ fontSize: "14px" }}>
          Lets Play Genshin Impact with me
        </h3>
        <div className="flex flex-row items-center mt-2">
          <Eyes />
          <span className="ml-2" style={{ color: "#BABABA", fontSize: "12px" }}>
            242 watching
          </span>
        </div>
        <div className="flex flex-row items-center mt-2">
          <img
            src={Bakreyon}
            style={{ width: "25px", height: "25px", borderRadius: "100%" }}
            alt="thumb dummy"
          />
          <span className="ml-2 text-sm " style={{ color: "#BABABA" }}>
            Bakreyon
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoryGameCard;
