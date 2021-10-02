import React from "react";
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as Home } from "assets/home.svg";
import { ReactComponent as Trending } from "assets/trending.svg";
import { ReactComponent as User } from "assets/user.svg";
import { ReactComponent as Video } from "assets/video.svg";

function SideBar() {
  return (
    <aside className="flex " syle={{ width: 220 }}>
      <div className="z-50 h-screen max-h-screen min-h-full overflow-y-auto transition-all duration-300 border-r-2 border-gray-700 sm:relative">
        <div className="flex flex-col px-5 py-5">
          <div className="flex flex-row ">
            <h2 className="text-2xl font-bold text-white">Nexus</h2>
          </div>

          <div className="flex mt-10 ">
            <ul>
              <li
                className="flex flex-row items-center px-2 py-1 bg-purple-600 rounded-md cursor-pointer"
                style={{ width: "184px" }}
              >
                <Home />
                <span className="ml-3 text-white">Home</span>
              </li>
              <li
                style={{ marginTop: "26px" }}
                className="flex cursor-pointer "
              >
                <Trending className=" fill-gray-400" />
                <span className="ml-4 text-gray-400 duration-200 transation hover:text-white">
                  Trending
                </span>
              </li>
              <li
                style={{ marginTop: "26px" }}
                className="flex cursor-pointer "
              >
                <User className=" fill-gray-400" />
                <span className="ml-4 text-gray-400 duration-200 transation hover:text-white">
                  Following
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
