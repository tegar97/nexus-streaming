import Navbar from "component/Navbar";
import SideBar from "component/SideBar";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import Ninja from "assets/ninja2.png";
import GameCardRelated from "component/GameCardRelated";
import LiveChat from "component/LiveChat";
import { useMediaQuery } from "react-responsive";
import VideoDetailMobile from "./video-detail-mobile";
function VideoDetail() {
  const navRef = useRef(null);
  const [isFollow, setFollow] = useState(false);
  const [isMinimaze, setIsMinimaze] = React.useState(50);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const minimazeSideBarFunction = (data) => {
    setIsMinimaze(data);
  };

  const followAndUnfollow = () => {
    setFollow(!isFollow);
  };
  if (isTabletOrMobile) return <VideoDetailMobile />;
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
      <div className="relative flex-1 ">
        <div
          style={{ height: 63 }}
          className="fixed z-20 flex items-center flex-1 w-screen px-2 py-2 border-b-2 border-gray-700 bg-black-500 "
        >
          <Navbar isMinimaze={isMinimaze} />
        </div>
        <main className="relative flex flex-row px-5 mt-20">
          <div className="flex flex-col " style={{ width: "73%" }}>
            <div
              className="relative w-full overflow-hidden video"
              style={{ height: "80vh", borderRadius: "20px" }}
            >
              <ReactPlayer
                className="relative w-full"
                width="100%"
                height="100%"
                playing={true}
                url="https://www.youtube.com/watch?v=54h-pX5ryHo"
              />
            </div>
            <div className="mt-5">
              <div className="flex flex-col w-full">
                <h1
                  className="font-sans text-xl text-white font-regular "
                  style={{ fontFamily: "Roboto", letterSpacing: ".5px" }}
                >
                  Lets Play Genshin Impact With Me
                </h1>
                <div className="flex-row w-full mt-2">
                  <span className="text-sm text-purple-600">
                    Genshin Impact
                  </span>
                  <span className="ml-2 text-sm " style={{ color: "#DCDCDC" }}>
                    952 views
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#D2D2D2",
                opacity: "0.2",
              }}
              className="mt-2"
            ></div>

            <div className="mt-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                  <div
                    className="relative"
                    style={{
                      width: "69px",
                      height: "69px",
                      borderRadius: "100%",
                    }}
                  >
                    <img
                      src={Ninja}
                      style={{
                        width: "69px",
                        height: "69px",
                        borderRadius: "100%",
                      }}
                      alt="Profile Photo"
                      className="border-2 border-purple-600 "
                    />
                    <div
                      className="absolute px-2 bg-purple-600 -bottom-2 "
                      style={{ borderRadius: "8px", left: "15px" }}
                    >
                      <span className="text-sm text-white">LIVE</span>
                    </div>
                  </div>
                  <div className="ml-5 ">
                    <h2 className="text-lg font-semibold text-white">Ninja</h2>
                    <span
                      className="text-sm text-white"
                      style={{ opacity: "0.95" }}
                    >
                      Streaming Live Now
                    </span>
                  </div>
                </div>
                <div className="">
                  {isFollow ? (
                    <button
                      onClick={() => followAndUnfollow()}
                      className="px-5 py-2 text-white bg-purple-600 opacity-50"
                      style={{ borderRadius: "8px" }}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      onClick={() => followAndUnfollow()}
                      className="px-5 py-2 text-white bg-purple-600 "
                      style={{ borderRadius: "8px" }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="px-5 py-5 mt-10" style={{ background: "#262837" }}>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-white">
                  About Ninja
                </h3>
                <span className="mt-2 text-sm text-white">
                  952k <span style={{ color: "#CDCDCD" }}>Followers</span>
                </span>
              </div>
              <div className="mt-5 ">
                <p>
                  {" "}
                  <span style={{ color: "#E7E7E7" }}>
                    Ninja streams New World, Apex Legends and Final Fantasy XI
                    Online.
                  </span>
                </p>
              </div>
            </div>
            <div style={{ height: "150px" }}></div>
          </div>

          <div className="flex-1 ml-5">
            <LiveChat />
            <div className="mt-12">
              <h1 className="text-white" style={{ fontSize: "21px" }}>
                Related Videos
              </h1>
              <div className="mt-5 overflow-y-auto" style={{ height: "350px" }}>
                <GameCardRelated />
                <GameCardRelated />
                <GameCardRelated />
                <GameCardRelated />
                <GameCardRelated />
                <GameCardRelated />
                <GameCardRelated />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default VideoDetail;
