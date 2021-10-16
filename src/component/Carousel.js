import React from "react";
import { slidersData } from "dummy/carousel";
import Poster from "./Poster";
function Carousel() {
  const [current, setCurrent] = React.useState(0);
  const length = 3;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slidersData) || slidersData.length <= 0) {
    return null;
  }

  return (
    <React.Fragment>
      {slidersData.map((data, index) => (
        <Poster
          image={data.image}
          title={data.title}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          current={current}
          index={index}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default Carousel;
