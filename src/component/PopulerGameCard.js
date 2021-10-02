import React from "react";

function PopulerGameCard({ gameImage, StreamersOnline, title }) {
  return (
    <div
      className="flex flex-row items-center duration-200 rounded-md cursor-pointer mb-14 "
      style={{
        background: "#272734",
        boxShadow: "0px 4px 21px rgba(0, 0, 0, 0.25)",
        height: "184px",
      }}
    >
      <img
        src={gameImage}
        alt="fornite"
        className="h-full "
        style={{ width: "250px" }}
      />
      <div className="flex flex-col ml-5">
        <h2 className="font-bold text-white " style={{ fontSize: "22px" }}>
          {title}
        </h2>
        <div className="flex items-center">
          <div
            className=""
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#00a67e",
              borderRadius: "50%",
              display: "inline-block",
            }}
          ></div>
          <span className="ml-2 text-sm text-white">
            {StreamersOnline} Streamers Online
          </span>
        </div>
        <div className="mt-5">
          <button className="px-5 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">
            See All Streamers
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopulerGameCard;
