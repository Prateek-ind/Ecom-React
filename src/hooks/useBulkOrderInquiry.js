import { useState } from "react";
import { bulkOrderInquiryToDb } from "../components/firebase/orderService";

export const useBulkOrderInquiry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const submitInquiry = async ({userId, orderDetails}) => {
    setIsLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const result = await bulkOrderInquiryToDb({ userId, orderDetails });
      setSuccess(true);
      return result;
    } catch (error) {
      setError("COuld not place order inquiry" || error.message);
      console.log(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return { submitInquiry, isLoading, error, success };
};
