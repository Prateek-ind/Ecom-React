import { Link } from "react-router-dom";
import { getProductById } from "../../../utils/getProductById";

const Order = ({ orderDetails }) => {
  let orderPlacedDate = orderDetails.createdAt;
  orderPlacedDate = new Date(orderPlacedDate).toLocaleDateString();

  const firstItem = orderDetails.items[0];
  const product = getProductById(firstItem.productId);
  const previewImage = product?.img1 || firstItem.image;

  return (
    <Link to={`/orderDetails?orderId=${orderDetails.orderId}`}>
      <div
        className="px-4 py-4 flex flex-col md:grid md:grid-cols-7 items-center
     gap-4 text-center border-b hover:bg-gray-50 transition"
      >
        <div className="col-span-2 ">
          <p className="block md:hidden text-gray-400 text-sm">
            Order Number:{" "}
          </p>
          <p className=" font-medium">{orderDetails.orderNumber}</p>
        </div>
        <div className="">
          <p className="block md:hidden text-gray-400 text-sm">Order Date: </p>
          <p>{orderPlacedDate}</p>
        </div>
        <p className="flex items-center text-xs text-gray-500">
          <img
            src={previewImage}
            className="w-14 h-14 object-cover rounded-lg"
            alt="product preview"
          />
          {orderDetails.items.length > 1 && (
            <span className="text-sm text-gray-500">
              +{orderDetails.items.length - 1} more
            </span>
          )}
        </p>
        <div className="">
          <p className="block md:hidden text-gray-400 text-sm">
            Order Status:{" "}
          </p>
          <p className="font-semibold">{orderDetails?.status}</p>
        </div>
        <div className="">
          <p className="block md:hidden text-gray-400 text-sm">
            Payment Method:{" "}
          </p>
          <p>{orderDetails.payment.method}</p>
        </div>
        <div className="">
          <p className="block md:hidden text-gray-400 text-sm">Order Total: </p>
          <p>Rs. {orderDetails.pricing.total.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Order;
