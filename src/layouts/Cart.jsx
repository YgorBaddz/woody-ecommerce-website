import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import "./../customClasses.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const increaseQty = (cartProductId, currentQty) => {
    const newQty = currentQty + 1;
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    const newQty = Math.max(currentQty - 1, 1);
    dispatch(updateQuantity({ id: cartProductId, quantity: newQty }));
  };

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center pb-4 border-b-2">
        <h1 className="text-xl font-semibold">Shopping Cart</h1>
      </div>

      <div className="h-screen overflow-y-auto">
        {cartProducts.length === 0 ? (
          <p className="font-bold text-2xl text-center">Your Cart is Empty</p>
        ) : (
          <ul className="cart-img p-2">
            {cartProducts.map((item, idx) => (
              <li key={idx} className="mb-2">
                <div className="">
                  <img src={item.img} alt="img" className="img" />
                  <p className="font-semibold">{item.name}</p>
                  <p className="ml-2 text-gray-600">${item.price}</p>
                </div>

                <div className="">
                  <div className="quantity flex items-center p-1">
                    <div className="input-group-btn ">
                      <button
                        type="button"
                        onClick={() => decreaseQty(item.id, item.quantity)}
                        className="btn btn-sm btn-minus rounded-circle bg-light border hover:bg-teal-400"
                      >
                        <i className="fa fa-minus"></i>
                      </button>

                      <span className="mx-2">{item.quantity || 1}</span>

                      <button
                        type="button"
                        onClick={() => increaseQty(item.id, item.quantity)}
                        className="btn btn-sm btn-minus rounded-circle bg-light border hover:bg-teal-400"
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <span className="font-bold">${item.totalPrice}</span>
                </div>

                <div
                  className="bg-black text-white text-xl ps-2 pe-2 hover:bg-teal-400"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="fa fa-close"></i>
                </div>
              </li>
            ))}

            <div className="bg-black text-white text-center text-2xl uppercase p-2">
              ${totalAmount}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
