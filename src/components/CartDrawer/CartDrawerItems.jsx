import React from "react";

const CartDrawerItems = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const totalAmount = cart.totalAmount;
  console.log(totalAmount);
  return (
    <>
      <div>
        <hr />
        {totalAmount > 308.45 ? (
          <p className="py-2 px-4 text-xs text-gray-500">
            You are eligible for free shipping.
          </p>
        ) : (
          <p className="py-2 px-4 text-xs text-gray-500">
            ` Spend Rs. {(308.45 - totalAmount).toFixed(2)} more and get free shipping!`
          </p>
        )}
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
                <div className="flex flex-col gap-1">
                  <p className="w-48 font-thin text-xs tracking-widest text-gray-800 leading-6 uppercase">
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
    </>
  );
};

export default CartDrawerItems;
