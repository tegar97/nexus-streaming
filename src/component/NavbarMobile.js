import React from "react";
import { ReactComponent as HomeMobileActive } from "assets/HomeMobile.svg";
import { ReactComponent as HomeMobile } from "assets/home.svg";
import { ReactComponent as Games } from "assets/games.svg";
import { ReactComponent as GamesActive } from "assets/gamesActive.svg";
import { ReactComponent as User } from "assets/user.svg";
import { ReactComponent as UserActive } from "assets/AccountMobile.svg";
import { ReactComponent as Trending } from "assets/trending.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
function NavbarMobile() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full px-5 py-3 shadow-lg bg-black-500">
      <div className="grid items-center justify-center w-full grid-cols-4 gap-10">
        <div className="flex flex-col items-center cursor-pointer">
          {location.pathname === "/" ? (
            <Link to="/">
              <HomeMobileActive
                className="fill-purple-600 "
                style={{ width: "25px", height: "25px" }}
              />
            </Link>
          ) : (
            <Link to="/">
              <HomeMobileActive
                className="opacity-50 fill-white"
                style={{ width: "25px", height: "25px" }}
              />
            </Link>
          )}
          <span
            className={`text-sm font-bold ${
              location.pathname !== "/" && "opacity-50"
            }`}
            style={{
              color: location.pathname === "/" ? " #9747FF" : "white",
            }}
          >
            Home
          </span>{" "}
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          {location.pathname === "/games" ? (
            <Link to="/games">
              <GamesActive
                className="fill-purple-600"
                style={{ width: "25px", height: "25px" }}
              />
            </Link>
          ) : (
            <Link to="/games">
              <Games
                style={{ width: "25px", height: "25px" }}
                className="opacity-50 fill-white"
              />
            </Link>
          )}
          <span
            className={`text-sm font-bold ${
              location.pathname !== "/games" && "opacity-50"
            }`}
            style={{
              color: location.pathname === "/games" ? " #9747FF" : "white",
            }}
          >
            Games
          </span>{" "}
        </div>

        <Link to="/trending">
          <div className="flex flex-col items-center cursor-pointer">
            <Trending
              className={` ${
                location.pathname === "/trending"
                  ? "fill-purple-600"
                  : "fill-white opacity-50"
              }`}
              style={{ width: "25px", height: "25px" }}
            />
            <span
              className={`text-sm font-bold ${
                location.pathname !== "/trending" && "opacity-50"
              }`}
              style={{
                color: location.pathname === "/trending" ? " #9747FF" : "white",
              }}
            >
              Trending
            </span>{" "}
          </div>
        </Link>
        <Link to="/authMobile">
          <div className="flex flex-col items-center cursor-pointer">
            <UserActive
              className={` ${
                location.pathname === "/authMobile"
                  ? "fill-purple-600"
                  : "fill-white opacity-50"
              }`}
              style={{ width: "25px", height: "25px" }}
            />
            <span
              className={`text-sm font-bold ${
                location.pathname !== "/authMobile" && "opacity-50"
              }`}
              style={{
                color:
                  location.pathname === "/authMobile" ? " #9747FF" : "white",
              }}
            >
              Account
            </span>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavbarMobile;
