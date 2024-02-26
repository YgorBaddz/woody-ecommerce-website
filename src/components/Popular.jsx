import Heading from "../layouts/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../customClasses.css";
import { products } from "../data/Data";

const Popular = () => {
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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mt-16 overflow-hidden text-center relative">
      <Heading
        title="Top Popular"
        desc="shop the new selection of arrivals at out store. fill out your wishlist item"
      />

      <div className="columns-2 h-full bg-gray-100">
        <div className="columns-1">
          <div className="p-6">
            <Slider {...settingsForSlider}>
              {products.slice(4, 8).map((item, idx) => (
                <div className="mx-auto max-w-xs relative" key={idx}>
                  <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
                    <img src={item.img} alt="productImg" className="mx-auto" />

                    <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex flex-wrap flex-col p-2 m-1 mt-1">
                        <FontAwesomeIcon
                          icon="heart"
                          className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                        />

                        <FontAwesomeIcon
                          icon="balance-scale"
                          className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                        />

                        <FontAwesomeIcon
                          icon="eye"
                          className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold uppercase">{item.name}</div>
                    <div className="">${item.price}</div>
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      className="bg-black text-white p-4 hover:bg-teal-400 transition-all duration-300 font-bold uppercase rounded"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="columns-1">
          <div className="h-full">
            <img
              src="../imgs/banners/id1-img1.jpg"
              alt="img"
              className="bg-cover hover:shadow-slate-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
