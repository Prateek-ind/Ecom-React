import { rdbUrl, getIdToken, getHeaders } from "../cart/cartAPI";

export const placeOrderToDb = async ({ orderDetails, userId }) => {
  const token = getIdToken();
  const url = `${rdbUrl}/orders/${userId}.json?auth=${token || ""}`;
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

export const bulkOrderInquiryToDb = async ({ userId, orderDetails }) => {
  const token = getIdToken();
  if (!token) throw new Error("User not authenticated");
  const url = `${rdbUrl}/bulkOrderInquiry/${userId}.json?auth=${token || ""}`;
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
    throw new Error("Failed to place Order Inquiry");
  }
  return await response.json();
};
