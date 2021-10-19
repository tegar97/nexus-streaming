import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Username</labe>
        <input
          className="px-2 py-2 mt-2 text-white bg-gray-600 outline-none focus:border-2 focus::border-purple-600"
          style={{ background: "#262837" }}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-5">
        <labe className="font-bold text-white">Password</labe>
        <input
          type="password"
          className="px-2 py-2 mt-2 text-white bg-gray-600 outline-none "
          style={{ background: "#262837" }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <span className="mt-2 text-purple-600">Forgot Password ?</span>
      <div>
        {userName.length && password.length > 0 ? (
          <button className="w-full px-2 py-2 mt-5 text-white bg-purple-600 ">
            Log In
          </button>
        ) : (
          <button
            className="w-full px-2 py-2 mt-5 text-white border-2 border-gray-500 "
            disabled
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}

export default Login;
