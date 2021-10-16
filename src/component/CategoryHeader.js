import React from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import Video from "assets/raiden_animation.mp4";
function CategoryHeader() {
  const photoVersion = () => {
    return (
      <div className="duration-500 ease-in-out category-header bg group">
        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-500 opacity-50 group-hover:opacity-0 "
          style={{ backgroundColor: "#101010" }}
        ></div>
        <div className="absolute text-header-group bottom-20 left-10">
          <h1 className="text-white text-header bold">Genshin Impact</h1>
          <p className="text-description ">
            Genshin Impact adalah permainan free-to-play action RPG dunia
            terbuka yang dikembangkan oleh miHoYo. Game ini dirilis pada tanggal
            28 September 2020 di platform Android, i2OS, Windows, dan
            PlayStation 4, serta 28 April 2021 di platform PlayStation 5.
          </p>
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
          style={{ backgroundClip: "polygon(0 0, 100% 0%, 100% 92%, 0% 100%)" }}
        >
          <source src={Video} type="video/mp4" />
        </video>

        <div
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-500 opacity-50 group-hover:opacity-0 "
          style={{ backgroundColor: "#101010" }}
        ></div>

        <div className="absolute text-header-group bottom-20 left-10">
          <h1 className="text-white text-header bold">Genshin Impact</h1>
          <p className="text-description ">
            Genshin Impact adalah permainan free-to-play action RPG dunia
            terbuka yang dikembangkan oleh miHoYo. Game ini dirilis pada tanggal
            28 September 2020 di platform Android, iOS, Windows, dan PlayStation
            4, serta 28 April 2021 di platform PlayStation 5.
          </p>
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
