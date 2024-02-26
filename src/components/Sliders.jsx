import React, { useRef } from "react";
import { sliderdata } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sliders = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  let settingsForSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="overflow-hidden relative">
      <Slider ref={sliderRef} {...settingsForSlider}>
        {sliderdata.map((val, idx) => (
          <div className="" key={idx}>
            <img className="w-full" src={val.img} alt="img" />
          </div>
        ))}
      </Slider>

      <FontAwesomeIcon
        onClick={prev}
        icon="angle-left"
        className="bg-white absolute top-64 left-4 p-2 text-base font-bold size-8 hover:bg-teal-400 hover:text-white"
      />
      <FontAwesomeIcon
        onClick={next}
        icon="angle-right"
        className="bg-white absolute top-64 right-4 p-2 text-base font-bold size-8 hover:bg-teal-400 hover:text-white"
      />
    </div>
  );
};

export default Sliders;
