import { Link } from "react-router-dom";

const Order = ({ orderDetails }) => {
  let orderPlacedDate = orderDetails.createdAt;
  orderPlacedDate = new Date(orderPlacedDate).toLocaleDateString();
  return (
    <Link
      to={`/orderDetails?orderId=${orderDetails.orderId}`}
    >
      <div
        className="px-4 py-4 grid grid-cols-7 grid-flow-col items-center
     gap-4 text-center border-b"
      >
        <p className="col-span-2 cursor-pointer">{orderDetails.orderNumber}</p>
        <p>{orderPlacedDate}</p>
        <p className="flex items-center">
          <img src={orderDetails.items[0].image} className="w-16 mr-4" alt="" />
          {orderDetails.items.length > 1 && (
            <img
              src={orderDetails.items[1].image}
              className="w-16 mr-4"
              alt=""
            />
          )}
          {orderDetails.items.length > 2 && " + more..."}
        </p>
        <p>OrderStatus</p>
        <p>{orderDetails.payment.method}</p>
        <p>{orderDetails.pricing.total}</p>
      </div>
    </Link>
  );
};

export default Order;
