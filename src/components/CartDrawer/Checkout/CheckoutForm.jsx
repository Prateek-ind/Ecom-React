import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../features/cart/CartSlice";
import { orderActions, placeOrder } from "../../../features/order/orderSlice";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile);
  const uid = useSelector((state) => state.user.uid);
  const email = useSelector((state) => state.user.email);
  const cart = useSelector((state) => state.cart);
  const cartItems = Object.values(useSelector((state) => state.cart.items));
  const navigate = useNavigate();
  const { loading, error, orderPlaced } = useSelector((state) => state.orders);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select payment method.");
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * Number(item.originalPrice),
      0
    );
    const discountedTotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * Number(item.discountedPrice),
      0
    );

    const discount = subtotal - discountedTotal;

    const orderPayload = {
      customer: {
        email,
        phone: userProfile?.phoneNumber,
        name: `${userProfile?.firstName} ${userProfile?.lastName}`,
      },

      shippingAddress: {
        address: userProfile?.address,
        addressOptional: userProfile?.addressOptional || null,
        city: userProfile?.city,
        state: userProfile?.state,
        pinCode: userProfile?.pinCode,
        country: "India",
      },

      items: cartItems.map((item) => ({
        productId: item.id,
        name: item.name,
        image: item.img1 || null,
        price: Number(item.discountedPrice),
        quantity: item.quantity,
        total: item.quantity * Number(item.discountedPrice),
      })),

      pricing: {
        subtotal,
        discount,
        shipping: cart.shipping,
        total: discountedTotal + cart.shipping,
      },

      payment: {
        method: paymentMethod.toUpperCase(),
        status: paymentMethod === "cod" ? "PENDING" : "INITIATED",
      },
    };

    dispatch(placeOrder({ uid, orderDetails: orderPayload }));
  };

  useEffect(() => {
    if (orderPlaced) {
      dispatch(cartActions.clearCart());
      navigate("/");
      dispatch(orderActions.clearOrderPlaced())
    }

  }, [orderPlaced, dispatch, navigate]);

  return (
    <Form className="space-y-6 " onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">CONTACT</h2>
        <input
          type="email"
          name="email"
          defaultValue={email}
          placeholder="Enter your email"
          className="border px-2 py-4 w-full rounded"
          required
        />

        <label htmlFor="news-and-offers">
          <input
            type="checkbox"
            name="news-and-offers"
            id="news-and-offers"
            className="mr-2"
          />
          Email me with news and offers
        </label>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Delivery</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="first-name"
            defaultValue={userProfile?.firstName}
            className="border px-2 py-4 w-full rounded"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last-name"
            defaultValue={userProfile?.lastName}
            className="border px-2 py-4 w-full rounded"
            placeholder="Last Name"
            required
          />

          <input
            type="text"
            name="address"
            defaultValue={userProfile?.address}
            className="col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Address"
            required
          />
          <input
            type="text"
            name="address-optional"
            defaultValue={userProfile?.addressOptional}
            className=" col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Apartment/Flat No. etc (Optional) "
            required
          />
          <input
            type="text"
            name="City"
            defaultValue={userProfile?.city}
            className="border px-2 py-4 w-full rounded"
            placeholder="City"
            required
          />
          <input
            type="text"
            name="State"
            defaultValue={userProfile?.state}
            className="border px-2 py-4 w-full rounded"
            placeholder="State"
            required
          />
          <input
            type="text"
            name="pin-code"
            defaultValue={userProfile?.pinCode}
            className="border px-2 py-4 w-full rounded"
            placeholder="Pin-code"
            required
          />
          <select
            name="country"
            className="border px-2 py-4 rounded w-full "
            defaultValue="India"
            required
          >
            <option value="Select Country/Region" required>
              - Select Country/Region
            </option>
            <option>India</option>
          </select>
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            defaultValue={userProfile?.phoneNumber}
            placeholder="Phone number"
            className="border px-2 py-4 w-full rounded"
          />
        </div>
      </section>
      <section className="mt-8 space-y-4">
        <h2 className="font-semibold text-lg">Payment</h2>
        <div>
          <div className="space-y-4">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                value="cod"
                onChange={() => setPaymentMethod("cod")}
                className="accent-[#63ce36]"
              />
              <span>Cash on Delivery (COD)</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                value="upi"
                onChange={() => setPaymentMethod("upi")}
                className="accent-[#63ce36]"
              />
              <span>UPI</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                value="debit/credit-card"
                onChange={() => setPaymentMethod("card")}
                className="accent-[#63ce36]"
              />
              <span>Debit/Credit Card</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="payment-method"
                value="net-banking"
                onChange={() => setPaymentMethod("net-banking")}
                className="accent-[#63ce36]"
              />
              <span>Net Banking</span>
            </label>
          </div>
          {paymentMethod === "upi" && (
            <div className="mt-6 space-y-3" id="upi-section">
              <input
                type="text"
                name="upi-id"
                placeholder="Enter UPI ID (eg name@okicici)"
                className="border px-3 py-3 w-full rounded"
              />
            </div>
          )}
          {paymentMethod === "card" && (
            <div className="mt-6  space-y-3" id="card-section">
              <input
                type="text"
                name="card-number"
                placeholder="Enter your card number "
                className="border px-3 py-3 w-full rounded"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="cvv"
                  placeholder="Enter your CVV"
                  className="border px-3 py-3 w-full rounded"
                />
                <input
                  type="text"
                  name="expiry-date"
                  placeholder="Expiry Date"
                  className="border px-3 py-3 w-full rounded"
                />
              </div>
              <input
                type="text"
                name="name-on-card"
                className="border px-2 py-4 w-full rounded"
                placeholder="Name on Card"
                required
              />
            </div>
          )}
          {paymentMethod === "net-banking" && (
            <div className="mt-6 space-y-3" id="net-banking-section">
              <select>
                <option value="axis-bank">Axis Bank</option>
                <option value="hdfc-bank">HDFC Bank</option>
                <option value="icici-bank">ICICI Bank</option>
                <option value="sbi-bank">SBI Bank</option>
              </select>
            </div>
          )}
        </div>
      </section>
      <button
        type="submit"
        className="w-full bg-[#63ce36] text-white text-lg px-8 py-2 uppercase font-semibold hover:bg-[#57b92d] hover:scale-105"
      >
        {paymentMethod === "cod" ? "Place Order" : "Pay Now"}
      </button>
    </Form>
  );
};

export default CheckoutForm;
