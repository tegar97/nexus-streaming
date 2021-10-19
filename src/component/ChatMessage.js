import React from "react";
import DummyProfile from "assets/dummy_profile.png";
import { useMediaQuery } from "react-responsive";

function ChatMessage({ message, name, profile }) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-row w-full overflow-hidden">
      {!isTabletOrMobile && (
        <img
          src={profile}
          style={{ width: "25px", height: "25px", borderRadius: "100%" }}
          alt="profile photo"
        />
      )}
      <div className="flex flex-row items-center ml-2 just">
        <div>
          <span className="text-sm text-purple-600"> {name} : </span>{" "}
          <span
            className="text-sm text-white break-words wrap"
            style={{
              width: "250px",
              lineHeight: "16px",
              overflowWrap: "break-word",
            }}
          >
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
