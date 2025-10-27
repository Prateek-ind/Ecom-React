import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { cartActions } from "../features/cart/CartSlice";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartUI.isOpen);
  const cart = useSelector((state) => state.cart);

  const increaseQuantity = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  const removeFromCart = (item) => {
    dispatch(cartActions.deleteFromCart(item));
  };

  console.log(cart);
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg
    transition-transform duration-300 z-50 flex flex-col
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <div className="flex justify-between px-4 py-8 uppercase">
        <h2 className="text-xl font-thin tracking-widest text-gray-700">
          Cart
        </h2>
        <button>
          <IoCloseOutline size={32} className="text-gray-400" />
        </button>
      </div>
      <div>
        <hr />
        <p className="py-2 px-2 text-xs text-gray-500">
          You are eligible for free shipping.
        </p>
        <hr />
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        {Object.keys(cart.items).length === 0 ? (
          <p className="py-4 text-gray-500 text-sm">Your Cart is Empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {Object.values(cart.items).map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b px-8 py-4 gap-6"
              >
                <img src={item.img1} className="h-32" alt="" />
                <div className="flex flex-col gap-2">
                  <p className="font-thin text-sm tracking-widest text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 tracking-widest">
                    {item.quantity} × ${item.discountedPrice.toFixed(2)}
                  </p>
                  <p className="text-sm font-extralight text-gray-800">
                    {` Rs. ${(item.quantity * item.discountedPrice).toFixed(
                      2
                    )}`}
                  </p>
                  <div className="flex justify-between mt-4 text-sm tracking-widest text-gray-700">
                    <div className="flex gap-4 border px-4 py-1">
                      <button onClick={() => decreaseQuantity(item)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                    <button
                      className="underline hover:text-red-500"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <button>Add Order Note</button>
      <p>Taxes and shipping calculated at checkout</p>
      <div>
        <p>5% Instant (Get 5% Prepaid)</p>
        <p>Discount</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartDrawer;
