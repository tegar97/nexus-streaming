import React from "react";
import DummyThumbnail from "assets/DummyThumbnail.jpg";
function VideoMobile() {
  return (
    <div className="flex flex-col mb-10 cursor-pointer group">
      <div className="relative">
        <img
          src={DummyThumbnail}
          style={{ width: "100%", height: "230px", objectFit: "cover" }}
          alt="dummy thumbnail"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-300 opacity-0 group-hover:bg-purple-600 group-hover:opacity-30"></div>
        <div className="absolute bottom-0 right-0 px-2 py-1 text-white opacity-75 bg-black-500">
          19.15
        </div>
      </div>
      <div className="flex flex-row items-center px-2 mt-2">
        <img
          src={
            "https://static-cdn.jtvnw.net/jtv_user_pictures/5e40545e-1fab-4ce1-8c41-1b7383709bd4-profile_image-50x50.png"
          }
          alt="Dummy profile"
          style={{ height: "55px", width: "55px", borderRadius: "100%" }}
        />
        <div className="flex flex-col mt-2 ml-2">
          <h2 className="text-white opacity-90">
            {" "}
            Valorant Sea Internasional Turnament{" "}
          </h2>
          <div className="flex flex-row items-center mt-2">
            <span className="text-sm text-white opacity-50">Dummy Channel</span>
            <div
              className="ml-2 bg-white opacity-50"
              style={{ width: "5px", height: "5px", borderRadius: "100%" }}
            ></div>
            <span className="ml-2 text-sm text-white opacity-50">1M Views</span>
            <div
              className="ml-2 bg-white opacity-50"
              style={{ width: "5px", height: "5px", borderRadius: "100%" }}
            ></div>
            <span className="ml-2 text-sm text-white opacity-50">
              1 Days Ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoMobile;
