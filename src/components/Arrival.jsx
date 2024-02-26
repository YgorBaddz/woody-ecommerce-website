import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { products } from "../data/Data";
import { addToCart, getCartTotal } from "../redux/cartSlice";

const Arrival = () => {
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
    slidesToShow: 4,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [qty] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    let totalPrice = qty * item.price;
    const tempProduct = { ...item, quantity: qty, totalPrice };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  return (
    <div className="p-8 overflow-hidden text-center relative bg-gray-50 z-0">
      <Heading
        title="New Arrival"
        desc="shop the new selection of arrivals at out store. fill out your wishlist item"
      />

      <Slider {...settingsForSlider}>
        {products.slice(0, 6).map((item, idx) => (
          <div className="mx-auto max-w-xs relative" key={idx}>
            <div className="p-1 hover:bg-gray-200 hover:shadow transition-all duration-300 relative group">
              <img src={item.img} alt="productImg" className="mx-auto" />

              <div className="icons absolute top-0 right-0 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex flex-wrap flex-col p-2 m-1 mt-1">
                  <FontAwesomeIcon
                    onClick={() => handleAddToCart(item)}
                    title="add to cart"
                    icon="shopping-cart"
                    className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                  />

                  <FontAwesomeIcon
                    title="add to cart"
                    icon="heart"
                    className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                  />

                  <FontAwesomeIcon
                    title="add to cart"
                    icon="balance-scale"
                    className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                  />

                  <FontAwesomeIcon
                    title="add to cart"
                    icon="eye"
                    className="p-2 mb-1 bg-white hover:bg-black hover:text-white rounded duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="font-semibold uppercase">{item.name}</div>
              <div>${item.price}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Arrival;
