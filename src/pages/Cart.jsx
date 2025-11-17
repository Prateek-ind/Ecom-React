import { useSelector } from "react-redux";
import EditQuantityComponent from "../components/CartDrawer/EditQuantityComponent";
import OrderNoteSection from "../components/CartDrawer/OrderNoteSection";
import { MdDiscount } from "react-icons/md";
import { useNavigate } from "react-router";

function Cart({}) {
  const cart = useSelector((state) => state.cart);
  const isCartEmpty = Object.values(cart.items).length;
  const subtotal = cart.totalAmount.toFixed(2);
  const instantPrepaidDiscount = (Number(cart.totalAmount) * 0.05).toFixed(2);
  const finalTotal = subtotal - instantPrepaidDiscount;
  const totalAmount = cart.totalAmount;
  const navigate = useNavigate();

  return (
    <div className="pt-24 bg-[#feffec]">
      <div className=" mt-12 flex flex-col items-center">
        <h2 className="text-3xl font-thin tracking-widest text-gray-700">
          Cart
        </h2>
        {isCartEmpty === 0 && <p className="my-8">Your cart is empty.</p>}
        {isCartEmpty > 0 && (
          <div>
            {totalAmount > 308.45 ? (
              <p className="py-2 px-4 text-xs text-gray-500 pb-12">
                You are eligible for free shipping.
              </p>
            ) : (
              <p className="py-2 px-4 text-xs text-gray-500 pb-12">
                Spend Rs. {(308.45 - totalAmount).toFixed(2)} more and get free
                shipping!
              </p>
            )}
          </div>
        )}
        <hr />
      </div>
      {isCartEmpty > 0 && cart.items && (
        <div className="w-3/4 mx-auto grid grid-cols-3 md:grid-cols-5 place-items-center border-b pb-2">
          <p className="col-span-3 text-sm tracking-widest text-gray-600 text-start">
            PRODUCT
          </p>
          <p className="text-sm tracking-widest text-gray-600 hidden md:block">
            QUANTITY
          </p>
          <p className="text-sm tracking-widest text-gray-600 hidden md:block">
            TOTAL
          </p>
        </div>
      )}
      {isCartEmpty > 0 &&
        Object.values(cart.items).map((item) => (
          <div
            key={item.id}
            className="w-3/4 mx-auto grid grid-cols-3 md:grid-cols-5 place-items-start py-6 border-b "
          >
            <div className="flex gap-8 col-span-3 ">
              <img src={item.img1} className="h-32" alt="" />
              <div className=" flex flex-col gap-4 justify-center">
                <p className="font-thin text-sm tracking-widest text-gray-800 leading-6 uppercase">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 tracking-widest">
                  {item.quantity} × Rs. {(item.discountedPrice || 0).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="pt-4 pl-0 md:pl-4">
              <EditQuantityComponent cartItem={item} />
            </div>
            <div className="pt-8 pl-10 lg:pl-20 hidden md:block">
              <p>Rs. {cart.totalAmount.toFixed(2)}</p>
            </div>
          </div>
        ))}
      {isCartEmpty > 0 && (
        <div className="w-3/4 mx-auto flex justify-between pt-8">
          <OrderNoteSection />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-sm text-gray-500">Subtotal: Rs. {subtotal}</p>
            <div className="flex items-center gap-4 ">
              <div
                className="px-3 py-1.5 mt-2 max-w-fit bg-red-600
                       text-white text-xs font-thin flex items-center gap-2"
              >
                <MdDiscount /> <p>5% Instant (Get 5% Prepaid)</p>
              </div>
              <p className="text-sm text-gray-500">
                {" "}
                - Rs. {instantPrepaidDiscount}
              </p>
            </div>
            <p className="text-sm text-gray-700">Total: Rs. {finalTotal}</p>
            <p className="text-xs text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
            <button
              className="w-full px-8 py-2 bg-[#63ce36] text-white mt-4 mb-4 uppercase"
              onClick={() => {
                navigate("checkout");
              }}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
