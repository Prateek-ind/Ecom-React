import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { fetchSingleOrder } from "../features/order/orderSlice";
import { getProductById } from "../utils/getProductById";

const OrderDetailsPage = () => {
  const uid = useSelector((state) => state.user.uid);
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const dispatch = useDispatch();
  const currentOrder = useSelector((state) => state.orders.currentOrder);
  const orderDate = new Date(currentOrder?.createdAt).toDateString();
  const orderTime = new Date(currentOrder?.createdAt).toLocaleTimeString();

  useEffect(() => {
    if (uid && orderId) dispatch(fetchSingleOrder({ uid, orderId }));
  }, [uid, orderId, dispatch]);

  if (!currentOrder) {
    return <p className="mt-32 text-center">Loading order...</p>;
  }

  return (
    <section className="w-full  py-10 bg-[#feffec]">
      <div className=" mx-auto max-w-6xl px-4 md:px-8 mb-6 mt-28">
        <h2 className="text-4xl text-center text-gray-700 tracking-widest mb-8 uppercase">
          Order Details
        </h2>
        <hr />
        <div className="mt-6 mb-6 px-12 flex flex-col md:flex-row md:justify-between gap-4 ">
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Order Number -{" "}
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              {currentOrder?.orderNumber}
            </p>
          </div>
          <div className="flex gap-2 ">
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Placed on -
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              {orderDate} {orderTime}
            </p>
          </div>
        </div>

        <div className="px-12 mb-8 flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Status -{" "}
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              {currentOrder?.status}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Payment Method -{" "}
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              {currentOrder?.payment.method}
            </p>
          </div>
        </div>
        <hr />

        {currentOrder?.items.map((item, key) => {
          const product = getProductById(item.productId);

          return (
            <div
              key={key}
              className="mx-auto flex items-center justify-center gap-4 md:gap-8 py-4 px-4"
            >
              <img src={product.img1} className="h-32" alt="" />
              <div className=" flex flex-col gap-4 justify-center">
                <p className=" max-w-48 font-thin text-sm tracking-widest text-gray-800 leading-6 uppercase">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500 tracking-widest">
                  {item.quantity} × Rs. {(item.total || 0).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mt-12 px-12">
          <div className="flex flex-col items-start justify-start">
            <hr />
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Shipping Address
            </p>
            <hr />
            <p className="text-sm text-gray-700 tracking-widest">
              Name - {currentOrder?.customer.name},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              Address - {currentOrder?.shippingAddress.address},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              Additional Address -{" "}
              {currentOrder?.shippingAddress.addressOptional},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              City - {currentOrder?.shippingAddress.city},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              State - {currentOrder?.shippingAddress.state},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              Pincode - {currentOrder?.shippingAddress.pinCode},
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              Country - {currentOrder?.shippingAddress.country}.
            </p>
            <p className="text-sm text-gray-700 tracking-widest">
              Phone Number - {currentOrder?.customer.phone}
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <hr />
            <p className="text-sm text-gray-700 tracking-widest font-semibold">
              Order Summary
            </p>
            <hr />
            <div className="flex">
              <p className="text-sm text-gray-700 tracking-widest font-semibold">
                Sub Total -{" "}
              </p>
              <p className="text-sm text-gray-700 tracking-widest">
                Rs. {currentOrder?.pricing.subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex">
              <p className="text-sm text-gray-700 tracking-widest font-semibold">
                Discount -{" "}
              </p>
              <p className="text-sm text-gray-700 tracking-widest">
                Rs. {currentOrder?.pricing?.discount.toFixed(2)}
              </p>
            </div>
            <div className="flex ">
              <p className="text-sm text-gray-700 tracking-widest font-semibold">
                Shipping -{" "}
              </p>
              <p className="text-sm text-gray-700 tracking-widest">
                Rs. {currentOrder?.pricing?.shipping.toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="flex items-center">
              <p className="text-lg text-gray-700 tracking-widest font-semibold">
                Total -{" "}
              </p>
              <p className="text-lg text-gray-700 tracking-widest font-semibold">
                Rs. {currentOrder?.pricing.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailsPage;
