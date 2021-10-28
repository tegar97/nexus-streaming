import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Logo2 from "assets/logo.png";
import Login from "./Login";
import Register from "./Register";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    width: "45%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.4)",
    zIndex: 999,
  },
};

Modal.setAppElement("#root");

const ModalAuth = ({ type }) => {
  const [typeAuth, setTypeAuth] = React.useState(type);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      {type === "login" ? (
        <button
          onClick={openModal}
          className="px-2 py-2 mr-5 text-white bg-gray-600 rounded-md"
        >
          Login
        </button>
      ) : (
        <button
          onClick={openModal}
          className="px-2 py-2 text-white bg-purple-600 rounded-md"
        >
          Register
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col w-full px-5 py-5 bg-black-500">
          <div className="flex flex-row items-center justify-center w-full mt-5 ">
            <img
              src={Logo2}
              style={{ width: "45px", height: "45px" }}
              alt="logo"
            />
            <span className="ml-2 text-2xl font-semibold text-white">
              Nexus Stream
            </span>
          </div>

          <div className="mt-5 ">
            <ul className="flex flex-row">
              <li
                className={`cursor-pointer ${
                  typeAuth === "login" ? " text-purple-600" : "text-white"
                }`}
                onClick={() => setTypeAuth("login")}
              >
                Log In
              </li>
              <li
                className={`cursor-pointer ml-2 ${
                  typeAuth === "register" ? " text-purple-600" : "text-white"
                }`}
                onClick={() => setTypeAuth("register")}
              >
                Sign Up
              </li>
            </ul>
            <div
              className="mt-2"
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(232, 232, 232,.2)",
              }}
            ></div>
          </div>

          <div className="mt-5">
            {typeAuth === "login" ? <Login /> : <Register />}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

// eslint-disable-next-line no-undef

export default ModalAuth;
