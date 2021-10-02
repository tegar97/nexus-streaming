import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between w-full px-2 py-2 ">
      <input
        className="px-5 py-2 text-white border-2 border-gray-700"
        style={{ backgroundColor: "#252630" }}
        placeholder="Search"
      />
      <div>
        <button className="px-2 py-2 mr-5 text-white bg-purple-600 rounded-md">
          Login
        </button>
        <button className="px-2 py-2 text-white bg-purple-600 rounded-md">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
