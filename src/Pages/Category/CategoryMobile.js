import React from "react";
import Video from "assets/raiden_animation.mp4";
import StreamersThumbnailMobileCategory from "component/StreamersThumbnailMobileCategory";
import { ReactComponent as Users } from "assets/users.svg";
import { ReactComponent as Eyes } from "assets/eyes.svg";
import { ReactComponent as Back } from "assets/back.svg";
import CategoryGameCard from "component/CategoryGameCard";
import { Link } from "react-router-dom";
function CategoryMobile() {
  return (
    <div className="w-full h-full bg-black-500">
      <section>
        <div className="relative category-header-video group">
          <Link to="/">
            <div className="absolute z-20 text-white cursor-pointer top-2 left-2 ">
              <Back />
            </div>
          </Link>
          <video
            autoPlay
            className="video-contentMobile"
            muted
            loop
            style={{
              backgroundClip: "polygon(0 0, 100% 0%, 100% 92%, 0% 100%)",
            }}
          >
            <source src={Video} type="video/mp4" />
          </video>

          <div className="absolute top-0 left-0 z-10 w-full h-full opacity-60 bottom-0-right-0 bg-black-500"></div>
          <div
            className="absolute z-20 bottom-10 left-2"
            style={{ width: "90%" }}
          >
            <ul className="flex flex-row">
              <li>
                <button
                  className="px-3 text-white border-2 border-white "
                  style={{
                    borderRadius: "8px",
                    fontSize: "12px",
                    paddingTop: "3px",
                    paddingBottom: "3px",
                  }}
                >
                  Action
                </button>
              </li>
              <li>
                <button
                  className="px-3 ml-2 text-white border-2 border-white "
                  style={{
                    borderRadius: "8px",
                    fontSize: "12px",
                    paddingTop: "3px",
                    paddingBottom: "3px",
                  }}
                >
                  Adventure
                </button>
              </li>
            </ul>
            <h1 className="font-bold text-white" style={{ fontSize: "35px" }}>
              Genshin Impact
            </h1>
            <div>
              <ul className="flex flex-row">
                <li
                  style={{
                    fontSize: "14px",
                    color: "#ffff",
                    fontWeight: "500",
                  }}
                >
                  <span className="flex flex-row items-center">
                    <Users className="" />
                    <span className="ml-2">1.5k Followers</span>
                  </span>
                </li>
                <li
                  className="ml-5"
                  style={{
                    fontSize: "14px",
                    color: "#ffff",
                    fontWeight: "500",
                  }}
                >
                  <span className="flex flex-row items-center">
                    <Eyes className="" />
                    <span className="ml-2">10m Viewes</span>
                  </span>
                </li>
              </ul>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                backgroundColor: "#ffff",
                opacity: "20%",
                marginTop: "15px",
              }}
            >
              &nbsp;
            </div>
            <button
              className="py-2 mt-5 text-white bg-purple-600"
              style={{
                width: "96px",
                borderRadius: "10px",
                boxShadow: `0px 1px 5px #6E5DE7`,
              }}
            >
              Follow
            </button>
          </div>
        </div>
      </section>
      <section className="px-2 mt-5">
        <h2 className="mt-5 text-2xl font-bold text-white">Live Now</h2>
        <div
          style={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "#ffff",
            opacity: "20%",
            marginTop: "15px",
          }}
        >
          &nbsp;
        </div>
        <div className="mt-5">
          <CategoryGameCard />
        </div>
      </section>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default CategoryMobile;
