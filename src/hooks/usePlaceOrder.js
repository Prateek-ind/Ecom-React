import { useState } from "react";
import { placeOrderToDb } from "../components/firebase/orderService";

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
      setError("Order error" || error.message);
      console.log(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
    
  };
  return { placeOrder, isLoading, success, error };
};
