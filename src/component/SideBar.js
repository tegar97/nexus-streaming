import React, { useState } from "react";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as Home } from "assets/home.svg";
import { ReactComponent as Trending } from "assets/trending.svg";
import { ReactComponent as User } from "assets/user.svg";
import { ReactComponent as Video } from "assets/video.svg";
import { ReactComponent as Collapse } from "assets/collapse.svg";
import { ReactComponent as Open } from "assets/uncollapse.svg";
import Logo2 from "assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar({ isMinimaze, minimazeSideBarFunction }) {
  const location = useLocation();

  const maxSize = () => {
    return (
      <div className="flex flex-col px-5 py-5 duration-200 ease-in-out ">
        <div className="flex flex-row items-center justify-between w-full">
          <Link to="/">
            <div className="flex flex-row">
              <img
                src={Logo2}
                style={{ width: "30px", height: "30px" }}
                alt="logo"
              />
              <h2 className="ml-2 text-2xl font-bold text-white">Nexus</h2>
            </div>
          </Link>

          <button
            className="ml-5 text-white"
            onClick={() => minimazeSideBarFunction(50)}
          >
            <Collapse />
          </button>
        </div>

        <div className="flex mt-10 ">
          <ul>
            <Link to="/">
              <li
                className={`flex flex-row items-center  ${
                  location.pathname === "/" && "bg-purple-600 px-2 py-1"
                }  rounded-md cursor-pointer `}
                style={{ width: "184px" }}
              >
                <Home
                  className={
                    location.pathname === "/" ? "fill-white" : "fill-gray-400"
                  }
                />
                <span
                  className={`ml-4 ${
                    location.pathname === "/" ? "text-white" : "text-gray-400"
                  } duration-200 transation hover:text-white`}
                >
                  Home
                </span>
              </li>
            </Link>
            <li
              style={{ marginTop: "26px" }}
              className={`flex flex-row items-center  ${
                location.pathname === "/trending" && "bg-purple-600 px-2 py-1 "
              }  rounded-md cursor-pointer `}
            >
              <Trending
                className={
                  location.pathname === "/trending"
                    ? "fill-white"
                    : "fill-gray-400"
                }
              />
              <Link to="/trending">
                <span
                  className={`ml-4 ${
                    location.pathname === "/trending"
                      ? "text-white"
                      : "text-gray-400"
                  } duration-200 transation hover:text-white`}
                >
                  Trending
                </span>
              </Link>
            </li>
            <li style={{ marginTop: "26px" }} className="flex cursor-pointer ">
              <User className=" fill-gray-400" />
              <span className="ml-4 text-gray-400 duration-200 transation hover:text-white">
                Following
              </span>
            </li>
          </ul>
        </div>
        <div className="flex mt-10 "></div>
      </div>
    );
  };

  const miniSize = () => {
    return (
      <div className="flex flex-col items-center justify-center px-5 py-2 overflow-hidden duration-200 ease-in-outflex">
        <div className="flex flex-row ">
          <button
            className="text-white"
            onClick={() => minimazeSideBarFunction(220)}
          >
            <Open />
          </button>
        </div>

        <div className="flex items-center mt-10 ">
          <ul>
            <li className="flex flex-row items-center rounded-md cursor-pointer">
              <Home className="fill-purple-600" />
            </li>
            <li style={{ marginTop: "26px" }} className="flex cursor-pointer ">
              <Trending className=" fill-gray-400" />
            </li>
            <li style={{ marginTop: "26px" }} className="flex cursor-pointer ">
              <User className=" fill-gray-400" />
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <aside className="flex duration-200 ease-in-out ">
      <div className="z-50 h-screen max-h-screen min-h-full overflow-y-auto transition-all duration-300 border-r-2 border-gray-700 sm:relative">
        {isMinimaze === 50 ? miniSize() : maxSize()}
      </div>
    </aside>
  );
}

export default SideBar;
