import React from "react";
import { ReactComponent as Views } from "assets/eyes2.svg";
import { ReactComponent as Likes } from "assets/likes.svg";
import DummyPhoto from "assets/valorant-logo.png";
import { Link } from "react-router-dom";
function TrendingCard({ title, views, likes, channelsLogo, channelsName }) {
  return (
    <Link to="/video/1">
      <div
        className="relative w-full px-10 py-5 mb-5 cursor-pointer hover:shadow-lg"
        style={{ background: "#262837", borderRadius: "28px" }}
      >
        <div className="absolute left-0 -top-10">
          <span
            className="font-semibold text-purple-600"
            style={{ fontSize: "68px", letterSpacing: "5px" }}
          >
            01
          </span>
        </div>
        <div className="flex flex-row">
          <figure>
            <img
              src={"/assets/valo.jpg"}
              className="ml-2"
              style={{
                maxWidth: "283.27px",
                height: "157px",
                borderRadius: "8px",
              }}
              alt="thumb"
            />
          </figure>
          <div className="ml-5 ">
            <h1 className="text-xl text-white">
              Valorant Sea Internasional Turnament{" "}
            </h1>
            <div className="flex flex-row items-center mt-2">
              <div className="flex flex-row items-center">
                <Views />
                <span className="ml-2 text-white opacity-70">2M Views</span>
              </div>
              <div className="flex flex-row items-center ml-5 ">
                <Likes />
                <span className="ml-2 text-white opacity-70">125k Likes</span>
              </div>
            </div>
            <div className="flex flex-row mt-10">
              <figure>
                <img
                  src={DummyPhoto}
                  style={{ width: "54.97px", height: "54.97px" }}
                  alt="photo profile"
                />
              </figure>
              <div className="flex flex-col ml-5">
                <span
                  className="text-white"
                  style={{ opacity: "90%", letterSpacing: "1px" }}
                >
                  Valorant Official
                </span>
                <span
                  className="text-sm text-white"
                  style={{ opacity: "80%", letterSpacing: "1px" }}
                >
                  1 Days ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrendingCard;
