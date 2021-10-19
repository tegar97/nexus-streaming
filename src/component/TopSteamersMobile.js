import React from "react";

function TopSteamersMobile({ profileImage, name, followersTotal }) {
  return (
    <div
      className="flex flex-col items-center justify-center px-5 py-5 mt-5 "
      style={{
        background: "rgba(39, 39, 52, 0.46)",
        boxShadow: " 0px 4px 21px rgba(0, 0, 0, 0.25)",
        borderRadius: "8px",
      }}
    >
      <img
        style={{ width: "77px", height: "77px" }}
        src={profileImage}
        alt="Profile Image"
      />
      <span
        className="mt-2 text-white "
        style={{ fontWeight: "600", fontSize: "16px" }}
      >
        {name}
      </span>
      <span className="mt-1" style={{ color: "#AFAFAF", fontSize: "11px" }}>
        {followersTotal} followers
      </span>
      <button
        className="px-3 py-2 mt-2 text-white bg-purple-600"
        style={{
          borderRadius: "8px",
          boxShadow: "0px 1px 5px #6E5DE7",
          fontSize: "13px",
        }}
      >
        Follow
      </button>
    </div>
  );
}

export default TopSteamersMobile;
