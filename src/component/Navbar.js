import React from "react";
import ModalAuth from "./ModalLogin";

function Navbar({ isMinimaze }) {
  return (
    <div
      className="flex justify-between px-2 py-2 "
      style={{ width: `${isMinimaze == "50" ? "95%" : "82.5%"}` }}
    >
      <input
        className="px-5 py-2 text-white border-2 border-gray-700 outline-none"
        style={{ backgroundColor: "#252630" }}
        placeholder="Search"
      />
      <div>
        <ModalAuth type="login" />
        <ModalAuth type="register" />
      </div>
    </div>
  );
}

export default Navbar;
