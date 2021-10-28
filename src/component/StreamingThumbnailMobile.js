import React from "react";

function StreamingThumbnailMobile({ imageBackground, streamersPhoto }) {
  return (
    <div
      className="relative w-full mt-5 bg-no-repeat bg-cover"
      style={{
        borderRadius: "8px",
        background: `url(${imageBackground})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "200px",
      }}
    >
      <div className="absolute top-0 left-0 right-0 w-full h-full bottom bg-black-500 opacity-30"></div>
      <div className="absolute flex flex-row left-2 top-2">
        <div className="flex flex-row items-center justify-between">
          <img
            src={streamersPhoto}
            style={{ width: "22px", height: "22px", borderRadius: "100%" }}
            alt="streamers photo dummy"
          />
          <span className="ml-2 text-white" style={{ fontSize: "8px" }}>
            bekyamon
          </span>
        </div>
      </div>
      <div className="absolute flex flex-col bottom-4 left-2">
        <span className="font-bold text-white" style={{ fontSize: "15px" }}>
          CS.ProLeague
        </span>
        <span className="text-white" style={{ fontSize: "9px" }}>
          Counter Strike
        </span>
      </div>
    </div>
  );
}

export default StreamingThumbnailMobile;
