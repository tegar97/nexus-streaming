import React from "react";
import { ReactComponent as ArrowRight } from "assets/arrow-right.svg";
function Poster({ title, nextSlide, prevSlide, current, index, image }) {
  return (
    <div>
      {index === current && (
        <div
          className={
            index === current
              ? "w-full     poster relative slide active "
              : "poster slide "
          }
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute header-text bottom-20 left-5">
            <h1
              className="text-xl font-bold text-white "
              style={{
                fontSize: "35px",
                letterSpacing: "1px",
                lineHeight: "50px",
              }}
            >
              {title}
            </h1>
            <div className="mt-2">
              <button
                onClick={prevSlide}
                className="px-5 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700"
              >
                Watch Now{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poster;
