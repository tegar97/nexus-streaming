import React from "react";
import DummyWalpaper from "assets/shround-walpaper.jpg";
import DummyLogo from "assets/shroud-logo.png";
function ChannelsMobile() {
  return (
    <div className="flex flex-col w-full h-screen">
      <img src={DummyWalpaper} alt="walpaper dummy" className="object-cover" />
      <div
        className="h-full -mt-10 bg-black-500 "
        style={{ borderRadius: "45px 45px 0px 0px" }}
      >
        <div className="flex w-full ">
          <div className="flex flex-row justify-between w-full ml-10 ">
            <div className="flex flex-row">
              <img
                src={DummyLogo}
                className="-mt-5"
                alt="Photo Profile"
                style={{ width: "85px", height: "85px" }}
              />
              <div className="flex flex-col mt-1 ml-5">
                <span className="text-xl font-bold text-white ">Shroud</span>
                <span style={{ fontSize: "12px", color: "#E2E2E2" }}>
                  952K Followers
                </span>
              </div>
            </div>
            <div className="mt-2 mr-10">
              <button
                className="px-5 py-2 text-white bg-purple-600 "
                style={{
                  borderRadius: "10px",
                  boxShadow: "0px 1px 5px #6E5DE7",
                }}
              >
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 mt-5">
          <h2 className="mb-2 text-2xl font-semibold text-white">About</h2>

          <span className="mt-5" style={{ color: "#E2E2E2", fontSize: "14px" }}>
            Hey there! Welcome to my channel. This is where my highlights get
            posted fromsss my stream!
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChannelsMobile;
