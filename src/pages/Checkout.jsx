import { useSelector } from "react-redux";
import CheckoutNavbar from "../components/Navbar/CheckoutNavbar";
import CheckoutForm from "../components/CartDrawer/Checkout/CheckoutForm";
import CheckoutDiscount from "../components/CartDrawer/Checkout/CheckoutDiscount";
import { MdDiscount } from "react-icons/md";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const prepaidDiscount = (Number(cart.totalAmount) * 0.05).toFixed(2);
  const amountAfterDiscount = (cart.totalAmount - prepaidDiscount).toFixed(2);
 
  return (
    <>
      <CheckoutNavbar />
      <div className="pt-32 mb-12 mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <CheckoutForm />
        </div>
        <div>
          <div className="bg-gray-100 p-8">
            {Object.values(cart.items).length > 0 ? (
              Object.values(cart.items).map((item) => (
                <div key={item.id} className="flex gap-8 items-center ">
                  <div className="relative object-contain">
                    <img
                      src={item.img1}
                      className="h-20 w-24 mb-4 rounded-lg border-4 border-white"
                      alt=""
                    />
                    <p
                      className="absolute w-6 h-6 p-1 bg-black text-white left-14 
                  -top-2 text-xs text-center rounded-lg border-2 border-white shadow"
                    >
                      {item.quantity}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between gap-2">
                    <p className="text-sm tracking-wider text-gray-700 w-3/4">
                      {item.name}
                    </p>
                    <p className="text-sm tracking-wider text-gray-700">
                      Rs. {item.discountedPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700">Your cart is empty</p>
            )}
            <CheckoutDiscount />
            {cart.orderNote && (
              <p className="pt-8 text-sm text-gray-700">
                Order Note: "{cart.orderNote}"
              </p>
            )}
            <div className="flex gap-8 mt-8 justify-between text-sm text-gray-700">
              <p>SubTotal: ({Object.values(cart.items).length} items)</p>
              <p>Rs. {cart.totalAmount.toFixed(2)}</p>
            </div>
            <p className="mt-2 text-gray-700">Order Discount</p>
            <div className=" flex items-center gap-4 justify-between ">
              <div
                className="px-3 py-1.5 mt-2 max-w-fit bg-white text-gray-500
                          text-sm font-thin flex items-center gap-2 rounded"
              >
                <MdDiscount />{" "}
                <p>5% Instant Discount (Get 5% Prepaid Discount)</p>
              </div>
              <p className="text-sm text-gray-700">- Rs. {prepaidDiscount}</p>
            </div>
            <div className="flex justify-between text-gray-700 text-sm mt-2">
              <p>Shipping</p>
              <p>Enter shipping address.</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-lg font-semibold">Total : </p>
              <p className="text-lg font-semibold">
                <span className="text-gray-500 text-sm mr-2">INR </span> Rs.{" "}
                {amountAfterDiscount}
              </p>
            </div>
            <p className="mt-2 text-sm font-semibold">
              Total Savings: Rs. {prepaidDiscount}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
