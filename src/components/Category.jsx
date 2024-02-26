import { category } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../customClasses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const NextArrow = (props) => (
    <div {...props} className="slick-arrow next-arrow">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  const PrevArrow = (props) => (
    <div {...props} className="slick-arrow prev-arrow">
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  let settingsForSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white m-10 text-center overflow-hidden relative">
      <Slider {...settingsForSlider}>
        {category.map((item, idx) => (
          <div key={idx}>
            <div className="max-w-xs  transition-transform transform hover:scale-105 hover:text-teal-400 mx-auto md:m-4">
              <div className="bg-gray-100 p-12 hover:bg-white hover:shadow-md transition-all duration-300">
                <img
                  className="mx-auto"
                  title={item.category}
                  src={item.img}
                  alt="img"
                />

                <div className="mt-4">
                  <div className="uppercase font-semibold">{item.category}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
