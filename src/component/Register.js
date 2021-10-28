import React, { useState } from "react";

function Register() {
  const [Email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Date, setDate] = useState("");
  return (
    <form>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Email</labe>
        <input
          type="email"
          className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
          style={{ background: "#262837" }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Username</labe>
        <input
          className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
          style={{ background: "#262837" }}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Password</labe>
        <input
          type="password"
          className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
          style={{ background: "#262837" }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Date Of Birth</labe>
        <input
          type="date"
          className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
          style={{ background: "#262837" }}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        {userName.length && password.length && Email.length > 0 ? (
          <button className="w-full px-2 py-2 mt-5 text-white bg-purple-600 ">
            Sign Up
          </button>
        ) : (
          <button
            className="w-full px-2 py-2 mt-5 text-white border-2 border-gray-500 "
            disabled
          >
            Sign Up
          </button>
        )}
      </div>
    </form>
  );
}

export default Register;
