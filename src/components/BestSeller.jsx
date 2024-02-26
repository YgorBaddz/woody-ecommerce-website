import Heading from "../layouts/Heading";
import { products } from "../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const BestSeller = () => {
  const [menuItem, setMenuItem] = useState(products);

  const filterItems = (name) => {
    const newItems = products.filter((item) => item.name === name);
    setMenuItem(newItems);

    if (name === "all") {
      setMenuItem(products);
      return;
    }
  };

  return (
    <div className="mt-16 text-center bg-white">
      <Heading
        title="Best Seller"
        desc="shop the new selection of arrivals at out store. fill out your wishlist item"
      />

      <div className="flex justify-center items-center">
        <button
          type="button"
          className="bg-gray-200 py-2 px-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("all")}
        >
          All
        </button>

        <button
          type="button"
          className="bg-gray-200 py-2 px-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("DECOR")}
        >
          DECOR
        </button>

        <button
          type="button"
          className="bg-gray-200 py-2 px-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("KITCHEN")}
        >
          KITCHEN
        </button>

        <button
          type="button"
          className="bg-gray-200 py-2 px-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("LIVING ROOM")}
        >
          LIVING ROOM
        </button>

        <button
          type="button"
          className="bg-gray-200 py-2 px-4 mr-2 text-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
          onClick={() => filterItems("SOFA")}
        >
          SOFA
        </button>
      </div>

      <div className="grid grid-cols-4 flex-wrap m-10 overflow-hidden text-center relative">
        {menuItem.map((item, idx) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
