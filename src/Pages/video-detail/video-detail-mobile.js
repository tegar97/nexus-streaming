import LiveChat from "component/LiveChat";
import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

function VideoDetailMobile() {
  return (
    <div className="h-screen bg-black-500">
      <div className="relative flex flex-col">
        <div
          className="relative w-full overflow-hidden video"
          style={{ height: "40vh" }}
        >
          <ReactPlayer
            className="relative w-full"
            width="100%"
            height="100%"
            playing={true}
            url="https://www.youtube.com/watch?v=54h-pX5ryHo"
          />
        </div>
        <div
          style={{ background: "#262837" }}
          className="flex flex-row justify-between w-full px-5 py-5"
        >
          <div className="flex flex-col">
            <h1 className="text-white" style={{ fontSize: "16px" }}>
              Ninja
            </h1>
            <div className="flex flex-row">
              <span className="text-sm text-purple-600">Streaming Nows </span>
              <span className="ml-2 text-sm text-white opacity-80 ">
                Apex Legends
              </span>
            </div>
          </div>
          <button
            className="px-5 py-2 text-white bg-purple-600 "
            style={{ borderRadius: "8px" }}
          >
            Follow
          </button>
        </div>

        <div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
}

export default VideoDetailMobile;
