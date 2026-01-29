import { useDispatch, useSelector } from "react-redux";
import Order from "../components/Order";
import { useEffect, useState } from "react";
import { fetchOrdersFromDb } from "../features/order/orderAPI";
import { fetchOrders } from "../features/order/orderSlice";

const OrdersPage = () => {
  const uid = useSelector((state) => state.user.uid);
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (uid) {
      dispatch(fetchOrders({ uid }));
    }
  }, [uid, dispatch]);

  

  console.log(orders);
  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      <div className="mb-6 mt-28 text-center">
        <h2 className="text-4xl text-gray-700 tracking-widest mb-8 uppercase">
          Orders
        </h2>
        <hr />
        {orders.length === 0 ? (
          <p className="text-center mt-20 text-gray-700 text-xl">Loading orders...</p>
        ) : (
          <div>
            <div className="px-4 py-2 grid grid-cols-7 grid-flow-col items-center gap-4 text-center border-b">
              <p className="col-span-2">Order Number</p>
              <p>Date</p>
              <p>Items</p>
              <p>Order Status</p>
              <p>Payment Method</p>
              <p>Total</p>
            </div>
            {orders.map((order) => (
              <Order key={order.orderNumber} orderDetails={order} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OrdersPage;
