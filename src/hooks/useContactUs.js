import { useState } from "react";
import { contactUsToDb } from "../features/users/userAPI";


export const useContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);


  const contactUsFormSubmit = async ({ userId, messageDetails }) => {
    setIsLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const result = await contactUsToDb({ userId, messageDetails });
      setSuccess(true);
      return result;
    } catch (error) {
      setError("Failed to send Message." || error.message);
      console.log(error.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };
  return {contactUsFormSubmit, isLoading, success, error};
};
