import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { cartActions } from "../../features/cart/CartSlice";
import { cartUIActions } from "../../features/cart/cartUISlice";
import OrderNoteSection from "./OrderNoteSection";
import CartDrawerItems from "./CartDrawerItems";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartUI.isOpen);
  const cart = useSelector((state) => state.cart);
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const increaseQuantity = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  const removeFromCart = (item) => {
    dispatch(cartActions.deleteFromCart(item));
  };

  const closeCartDrawer = () => {
    dispatch(cartUIActions.closeCart());
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
        <button onClick={closeCartDrawer}>
          <IoCloseOutline size={32} className="text-gray-400" />
        </button>
      </div>
      <CartDrawerItems
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
      <hr />
      <div className="px-4">
        <OrderNoteSection
          note={note}
          setNote={setNote}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <p className="text-xs text-gray-400 font-thin mt-2">
          Taxes and shipping calculated at checkout
        </p>
        <div>
          <p className="px-3 py-1.5 bg-red-500 text-white text-sm font-thin mt-2">
            5% Instant (Get 5% Prepaid)
          </p>
          <p>Rs. {Number(cart.totalAmount) * 0.05}</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartDrawer;
