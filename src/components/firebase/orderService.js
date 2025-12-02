
import { rdbUrl, setIdToken, getHeaders } from "../../features/cart/cartAPI";

export const placeOrderToDb = async ({ orderDetails, userId,  }) => {
  const url = `${rdbUrl}/orders/${userId}.json?auth=${setIdToken() || ""}`;
  const payload = {
    ...orderDetails,
    userId: userId || null,
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to place Order");
  }
  return await response.json();
};
