import { useState } from "react";
import { placeOrderToDb } from "../features/order/orderAPI";

export const usePlaceOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const placeOrder = async ({ uid, orderDetails }) => {
    if (!uid) {
      setError("User not logged in");
      return null;
    }
    setIsLoading(true);
    setSuccess(false);
    setError(null);

    try {
      console.log(uid, orderDetails);
      const result = await placeOrderToDb({ uid, orderDetails });
      console.log(result);
      setSuccess(true);
      return result;
    } catch (error) {
      setError(error.message || "Order error");
      console.log(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return { placeOrder, isLoading, success, error };
};
