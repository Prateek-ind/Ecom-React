import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/features/cart/CartSlice";
import { orderActions, placeOrder } from "@/features/order/orderSlice";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userProfile.data);
  const uid = useSelector((state) => state.auth.uid);
  const email = useSelector((state) => state.auth.email);
  const cart = useSelector((state) => state.cart);
  const cartItems = Object.values(useSelector((state) => state.cart.items));
  const navigate = useNavigate();
  const { orderPlaced } = useSelector((state) => state.orders);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    additionalAddress: "",
    city: "",
    state: "",
    country: "India",
    pinCode: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        firstName: userProfile.firstName || "",
        lastName: userProfile.lastName || "",
        address: userProfile.address || "",
        additionalAddress: userProfile.additionalAddress || "",
        city: userProfile.city || "",
        state: userProfile.state || "",
        pinCode: userProfile.pinCode || "",
        phoneNumber: userProfile.phoneNumber || "",
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert("Please select payment method.");
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * Number(item.originalPrice),
      0,
    );
    const discountedTotal = cartItems.reduce(
      (sum, item) => sum + item.quantity * Number(item.discountedPrice),
      0,
    );

    const discount = subtotal - discountedTotal;

    const orderPayload = {
      customer: {
        email,
        phone: formData?.phoneNumber,
        name: `${formData?.firstName} ${formData?.lastName}`,
      },

      shippingAddress: {
        address: formData?.address,
        additionalAddress: formData?.additionalAddress || null,
        city: formData?.city,
        state: formData?.state,
        pinCode: formData?.pinCode,
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
      dispatch(orderActions.clearOrderPlaced());
    }
  }, [orderPlaced, dispatch, navigate]);

  return (
    <form className="space-y-6 " onSubmit={handleSubmit}>
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
            name="firstName"
            value={formData.firstName}
            className="border px-2 py-4 w-full rounded"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="border px-2 py-4 w-full rounded"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            className="col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Apartment/Flat No. etc"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="additionalAddress"
            value={formData.addressOptional}
            className=" col-span-2 border px-2 py-4 w-full rounded"
            placeholder="Additional Address (Landmark) "
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            className="border px-2 py-4 w-full rounded"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            className="border px-2 py-4 w-full rounded"
            placeholder="State"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            className="border px-2 py-4 w-full rounded"
            placeholder="Pin-code"
            onChange={handleChange}
            required
          />
          <select
            name="country"
            className="border px-2 py-4 rounded w-full "
            value="India"
            onChange={handleChange}
            required
          >
            <option value="Select Country/Region" required>
              - Select Country/Region
            </option>
            <option>India</option>
          </select>
          <input
            type="number"
            name="phoneNumber"
            id="phone-number"
            value={formData.phoneNumber}
            placeholder="Phone number"
            onChange={handleChange}
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
    </form>
  );
};

export default CheckoutForm;
