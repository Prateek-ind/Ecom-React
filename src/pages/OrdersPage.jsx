import { useSelector } from "react-redux";
import Order from "@/features/order/components/Order";
import OrdersSkeleton from "../features/order/components/OrdersSkeleton";
import { useQuery } from "@tanstack/react-query";
import { fetchOrdersFromDb } from "../features/order/orderAPI";

const OrdersPage = () => {
  const { uid } = useSelector((state) => state.auth);
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders", uid],
    queryFn: () => fetchOrdersFromDb({ uid }),
    enabled: !!uid,
  });

  return (
    <section className="w-full mx-auto py-10 bg-[#feffec]">
      <div className="mt-28 text-center mb-8">
        <h2 className="text-4xl text-gray-700 tracking-widest uppercase">
          Orders
        </h2>
        <p className="text-sm text-gray-400 mt-2">Your recent purchases</p>
      </div>

      {isLoading ? (
        <OrdersSkeleton />
      ) : isError ? (
        <p className="text-center text-red-500 mt-20">{error.message}</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-600 mt-20">
          You haven’t placed any orders yet.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6 px-4">
          <div
            className="hidden md:grid max-w-4xl mx-auto grid-cols-7
           gap-8 px-6 py-3 text-sm text-gray-500 border-b"
          >
            <p className="col-span-2 mx-auto">Order ID</p>
            <p className="mx-auto">Date</p>
            <p className="mx-auto">Items</p>
            <p className="mx-auto">Status</p>
            <p className="mx-auto">Payment</p>
            <p className="text-right">Total</p>
          </div>
          {orders.map((order) => (
            <Order key={order.orderNumber} orderDetails={order} />
          ))}
        </div>
      )}
    </section>
  );
};

export default OrdersPage;
