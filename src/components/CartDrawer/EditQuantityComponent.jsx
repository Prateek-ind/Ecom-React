import { useDispatch } from "react-redux";
import { cartActions } from "../../features/cart/CartSlice";

const EditQuantityComponent = ({ cartItem }) => {
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };
  const removeFromCart = (item) => {
    dispatch(cartActions.deleteFromCart(item));
  };
  return (
    <div className="flex justify-between mt-4 text-sm tracking-widest text-gray-700 gap-4">
      <div className="flex gap-4 border px-4 py-1">
        <button onClick={() => decreaseQuantity(cartItem)}>-</button>
        <p>{cartItem.quantity}</p>
        <button onClick={() => increaseQuantity(cartItem)}>+</button>
      </div>
      <button
        className="underline hover:text-red-500"
        onClick={() => removeFromCart(cartItem)}
      >
        Remove
      </button>
    </div>
  );
};

export default EditQuantityComponent;
