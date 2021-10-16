import React from "react";
import DummyThumbnail from "assets/geinshin-impact-gameplay-mobile.jpg";
function StreamersThumbnailMobileCategory({ thumbnail }) {
  return (
    <div className="w-full " style={{ height: "150px" }}>
      <img src={DummyThumbnail} style={{ borderRadius: "8px" }} />
    </div>
  );
}

export default StreamersThumbnailMobileCategory;
