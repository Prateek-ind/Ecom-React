import { Link } from "react-router-dom";
import { getProductById } from "../utils/getProductById";

const Order = ({ orderDetails }) => {
  let orderPlacedDate = orderDetails.createdAt;
  orderPlacedDate = new Date(orderPlacedDate).toLocaleDateString();

  const previewProducts = orderDetails.items
    .map((item) => getProductById(item.productId))
    .filter((p) => p);

  console.log(orderDetails);
  return (
    <Link to={`/orderDetails?orderId=${orderDetails.orderId}`}>
      <div
        className="px-4 py-4 flex flex-col md:grid md:grid-cols-7 items-center
     gap-4 text-center border-b"
      >
        <div className="flex gap-4">
          {" "}
          <p className="block md:hidden">Order Number: </p>
          <p className="col-span-2 cursor-pointer">
            {orderDetails.orderNumber}
          </p>
        </div>
        <div className="flex gap-4">
          {" "}
          <p className="block md:hidden">Order Date: </p>
          <p>{orderPlacedDate}</p>
        </div>
        <p className="flex items-center">
          {previewProducts.slice(0, 1).map((product, i) => (
            <img key={i} src={product.img1} className="w-16 mr-4" alt="" />
          ))}

          {orderDetails.items.length > 1 && (
            <img
              src={orderDetails.items[1].image}
              className="w-16 mr-4"
              alt=""
            />
          )}
          {orderDetails.items.length > 2 && " + more..."}
        </p>
        <div className="flex gap-4">
          {" "}
          <p className="block md:hidden">Order Status: </p>
          <p>{orderDetails?.status}</p>
        </div>
        <div className="flex gap-4">
          {" "}
          <p className="block md:hidden">Payment Method: </p>
          <p>{orderDetails.payment.method}</p>
        </div>
        <div className="flex gap-4">
          {" "}
          <p className="block md:hidden">Order Total: </p>
          <p>Rs. {orderDetails.pricing.total.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Order;
