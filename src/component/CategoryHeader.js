import React from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import Video from "assets/raiden_animation.mp4";
function CategoryHeader({ title, description, videoUrl, background }) {
  console.log(process.env.PUBLIC_UR);
  const PhotoVersion = () => {
    return (
      <div
        className="duration-500 ease-in-out category-header bg group"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-500 opacity-50 group-hover:opacity-0 "
          style={{ backgroundColor: "#101010" }}
        ></div>
        <div className="absolute text-header-group bottom-20 left-10">
          <h1 className="text-white text-header bold">{title}</h1>
          <p className="text-description ">{description}</p>
          <button
            className="py-2 mt-5 text-white bg-purple-600"
            style={{
              width: "96px",
              borderRadius: "10px",
              boxShadow: `0px 1px 5px #6E5DE7`,
            }}
          >
            Follow
          </button>
        </div>
      </div>
    );
  };

  if (!videoUrl) return <PhotoVersion />;
  return (
    <section className="relative w-full category-header-video group">
      <div
        className="video-wrapper"
        style={{
          height: "489px",
        }}
      >
        <video
          autoPlay
          className="video-content"
          muted
          loop
          src={videoUrl}
          style={{ backgroundClip: "polygon(0 0, 100% 0%, 100% 92%, 0% 100%)" }}
        ></video>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-500 opacity-50 group-hover:opacity-0 "
          style={{ backgroundColor: "#101010" }}
        ></div>

        <div className="absolute text-header-group bottom-20 left-10">
          <h1 className="text-white text-header bold">{title}</h1>
          <p className="text-description ">{description}</p>
          <button
            className="py-2 mt-5 text-white bg-purple-600"
            style={{
              width: "96px",
              borderRadius: "10px",
              boxShadow: `0px 1px 5px #6E5DE7`,
            }}
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoryHeader;
