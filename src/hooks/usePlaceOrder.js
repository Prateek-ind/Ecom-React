import { useState } from "react";
import { placeOrderToDb } from "../features/order/orderAPI";

export const usePlaceOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const placeOrder = async ({ userId, orderDetails }) => {
    setIsLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const result = await placeOrderToDb({ userId, orderDetails });
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
