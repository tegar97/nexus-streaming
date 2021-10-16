import React from "react";
import { useMediaQuery } from "react-responsive";
import ChannelsMobile from "./ChannelsMobile";

function Channels() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  if (isTabletOrMobile) return <ChannelsMobile />;

  return (
    <div className="w-full h-screen bg-black-500">
      <div className="z-20 slider" id="slider-container">
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
            alt=""
          />
        </div>
        <div className="slide">
          <img
            src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=20"
            alt=""
          />
        </div>
      </div>
      <div class="overlay"></div>
    </div>
  );
}

export default Channels;
