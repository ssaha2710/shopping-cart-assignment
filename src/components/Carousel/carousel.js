import React, { useEffect, useState } from "react";
import BtnSlider from "./btnSlider";
import axios from "axios";

const Carousel = () => {
  const [banners, setBanners] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/banners")
      .then((res) => setBanners(res.data));
  }, []);

  const nextSlide = () => {
    if (slideIndex !== banners.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === banners.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(banners.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div data-testid="slider" className="container-slider">
      {banners &&
        banners.map((el, index) => {
          return (
            <div
              data-testid={`slider-${index}`}
              key={el.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img src={el.bannerImageUrl} alt={el.bannerImageAlt} />
            </div>
          );
        })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            data-testid={`container-dot-${index}`}
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
