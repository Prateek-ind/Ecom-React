import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { MdDiscount } from "react-icons/md";
import { cartUIActions } from "../../features/cart/cartUISlice";
import OrderNoteSection from "./OrderNoteSection";
import CartDrawerItems from "./CartDrawerItems";
import { useNavigate } from "react-router";
import MultiButton from "../Product/MultiButton";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartUI.isOpen);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

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
      <CartDrawerItems cart={cart} />
      <hr />
      <div className="px-4">
        <OrderNoteSection />
        <p className="text-xs text-gray-400 font-thin mt-2">
          Taxes and shipping calculated at checkout
        </p>
        <div>
          <div className="flex items-center gap-4 ">
            <div
              className="px-3 py-1.5 mt-2 max-w-fit bg-red-600
             text-white text-xs font-thin flex items-center gap-2"
            >
              <MdDiscount /> <p>5% Instant (Get 5% Prepaid)</p>
            </div>
            <p className="text-sm text-gray-700">
              {" "}
              - Rs. {(Number(cart.totalAmount) * 0.05).toFixed(2)}
            </p>
          </div>
        </div>
        <MultiButton
          className="w-full px-8 py-2 bg-[#63ce36] text-white mt-4 mb-4"
          
            navigate={"cart/checkout"}
            closeCartDrawer={closeCartDrawer}
          
        >
          Checkout
        </MultiButton>
      </div>
    </div>
  );
};

export default CartDrawer;
