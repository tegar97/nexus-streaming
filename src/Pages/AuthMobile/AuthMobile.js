import NavbarMobile from "component/NavbarMobile";
import React, { useState } from "react";
import { ReactComponent as ArrowBack } from "assets/arrowBack.svg";
const LoginForm = ({ setAuth }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative h-screen py-1 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section className="px-2 py-1">
        <div className="flex flex-row items-center header">
          <button onClick={() => setAuth("")}>
            <ArrowBack />
          </button>
          <span className="ml-5 font-semibold text-white">Log in</span>
        </div>
      </section>

      <section className="px-5 mt-12">
        <form>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Username</label>
            <input
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
            />
          </div>
          <div className="mt-2 ">
            <span className="text-purple-600">Forgot Password ? </span>
          </div>
          {username.length && password.length > 3 ? (
            <button
              className="w-full py-2 mt-5 text-white bg-purple-600"
              style={{ borderRadius: "8px" }}
              type="submit"
            >
              Log in
            </button>
          ) : (
            <button
              className="w-full px-2 py-2 mt-5 text-white border-2 border-gray-500 "
              disabled
            >
              Log In
            </button>
          )}
        </form>
      </section>
    </div>
  );
};
const RegisterForm = ({ setAuth }) => {
  return (
    <div className="relative h-full py-1 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section className="px-2 py-1">
        <div className="flex flex-row items-center header">
          <button onClick={() => setAuth("")}>
            <ArrowBack />
          </button>
          <span className="ml-5 font-semibold text-white">Register</span>
        </div>
      </section>

      <section className="px-5 mt-12">
        <form>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Email</label>
            <input
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
              type="email"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Username</label>
            <input
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Password</label>
            <input
              type="password"
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="font-bold text-white">Date of birth</label>
            <input
              type="date"
              className="px-2 py-2 mt-2 text-white duration-300 bg-gray-600 border-2 border-opacity-0 outline-none focus:border-opacity-100 focus:border-purple-600 focus: formInput"
              style={{ background: "#262837" }}
            />
          </div>

          <button
            className="w-full py-2 mt-5 text-white bg-purple-600"
            style={{ borderRadius: "8px" }}
            type="submit"
          >
            Sig up
          </button>
        </form>
        <div className="h-20"></div>
      </section>
    </div>
  );
};
function AuthMobile() {
  const [authType, setAuthType] = useState("");

  if (authType === "login") return <LoginForm setAuth={setAuthType} />;
  if (authType === "signup") return <RegisterForm setAuth={setAuthType} />;
  return (
    <div className="relative h-screen py-5 overflow-hidden bg-black-500">
      <NavbarMobile />
      <section className="flex items-center justify-center w-full h-full -mt-10">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold text-center text-white">
            Welcome To Nexus{" "}
          </h1>
          <div className="flex flex-col mt-5">
            <button
              className="py-1 mb-2 text-white bg-purple-600"
              style={{ borderRadius: "8px" }}
              onClick={() => setAuthType("login")}
            >
              Log in
            </button>
            <button
              className="py-1 text-gray-800 bg-gray-100 "
              style={{ borderRadius: "8px" }}
              onClick={() => setAuthType("signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AuthMobile;
