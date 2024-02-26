import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./fontAwesome";
import { useSelector } from "react-redux";
import Cart from "../layouts/Cart";

const Icons = () => {
  const { totalItems } = useSelector((state) => state.cart);
  const [showSidebar, setShowSidebar] = useState(false);

  const showRightBar = () => {
    setShowSidebar(true);
  };

  const hideRightBar = () => {
    setShowSidebar(false);
  };
  return (
    <div className="flex">
      <div className="">
        <FontAwesomeIcon
          icon="heart"
          className="hover:text-teal-400 text-2xl cursor-pointer"
        />
      </div>

      <div className="relative">
        <FontAwesomeIcon
          icon="shopping-cart"
          className="hover:text-teal-400 text-2xl cursor-pointer"
          onClick={showRightBar}
        />
        {showSidebar && (
          <div className="fixed top-15 right-0 w-80">
            <Cart />

            <span
              onClick={hideRightBar}
              className="absolute right-2 top-2 cursor-pointer text-gray-600"
            >
              <FontAwesomeIcon icon="close" />
            </span>
          </div>
        )}

        <span className="absolute -top-1 text-white -right-2 bg-teal-400 rounded-full p-1">
          {totalItems}
        </span>
      </div>
    </div>
  );
};

export default Icons;
