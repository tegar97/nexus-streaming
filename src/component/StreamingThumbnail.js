import React from "react";

function StreamingThumbnail({ thumbnail, channelName, title, channelLogo }) {
  return (
    <div className="flex flex-col cursor-pointer group ">
      <div className="relative">
        <div className="absolute z-10 px-2 py-1 font-bold text-white bg-red-500 top-2 left-2">
          Live
        </div>
        <img src={thumbnail} style={{ borderRadius: "19px", width: "100%" }} />
        <div
          className="absolute top-0 bottom-0 left-0 right-0 duration-500 ease-in-out bg-purple-600 opacity-0 group-hover:opacity-60"
          style={{ borderRadius: "19px" }}
        ></div>
      </div>
      <div className="flex flex-row mt-5">
        <img src={channelLogo} className="rounded-full" />
        <div className="flex flex-col ml-5">
          <span className="font-bold text-white ">{title}</span>
          <span
            style={{
              color: "#ADADB8",
              fontSize: "13px",
            }}
            className="font-semibold"
          >
            {channelName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StreamingThumbnail;
