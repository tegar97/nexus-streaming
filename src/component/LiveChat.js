import React, { useState } from "react";
import DummyProfile from "assets/dummy_profile.png";
import DummyProfile2 from "assets/ninja2.png";
import ChatMessage from "./ChatMessage";
import { useMediaQuery } from "react-responsive";
function LiveChat() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const dummyChat = [
    {
      name: "Jonathan Tambuh",
      message: "Hello Ninja",
      photo: DummyProfile,
    },
    {
      name: "Ninja",
      message: " Hello Everyone",
      photo: DummyProfile2,
    },
  ];
  const [message, setNewMessage] = useState("");
  const [newChat, setNewChat] = useState("");
  const [DummyMessage, setDummyMessage] = useState(dummyChat);

  console.log(dummyChat);

  const addNewMessage = (e) => {
    e.preventDefault();
    if (newChat.length !== 0) {
      setNewMessage({
        name: "USER",
        message: newChat,
        photo: DummyProfile,
      });

      setDummyMessage((prev) => [message, ...prev]);
      setNewChat("");
    }
  };
  return (
    <div
      style={{
        background: "#262837",
        height: "80vh",
        borderRadius: "10px",
      }}
    >
      <diV></diV>
      {!isTabletOrMobile && (
        <div style={{ background: "#202335" }} className="px-2 py-2">
          <span className="font-bold text-white">Live Chat</span>
        </div>
      )}
      <div
        className="w-full chat-body "
        id="chat-body"
        style={{ height: isTabletOrMobile ? "90%" : "80%" }}
      >
        <div
          className="flex flex-col justify-end h-full px-2 overflow-y-auto"
          style={{ marginTop: isTabletOrMobile ? "" : "-10px" }}
        >
          {DummyMessage.map((data) => (
            <ChatMessage
              message={data.message}
              profile={data.photo}
              name={data.name}
            />
          ))}
        </div>
      </div>
      <div
        className={`flex items-center justify-center w-full  h- full  ${
          isTabletOrMobile ? "px-2 " : "mt-10 px-2"
        } `}
      >
        <form className="w-full" onSubmit={addNewMessage}>
          <input
            value={newChat}
            onChange={(e) => setNewChat(e.target.value)}
            placeholder="Send Message"
            className="w-full px-2 py-2 text-white outline-none"
            style={{
              background: "#2E303F",
              borderRadius: !isTabletOrMobile && "8px",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default LiveChat;
