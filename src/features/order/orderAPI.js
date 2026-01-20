import { rdbUrl, getIdToken } from "../cart/cartAPI";

export const placeOrderToDb = async ({ orderDetails, uid }) => {
  const token = getIdToken();
  if(!uid) throw new Error('User id is missing.')
  const url = `${rdbUrl}/orders/${uid}.json?auth=${token || ""}`;
  const payload = {
    ...orderDetails,
    uid: uid || null,
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to place Order");
  }
  return await response.json();
};

export const bulkOrderInquiryToDb = async ({ uid, orderDetails }) => {
  const token = getIdToken();
  if (!token) throw new Error("User not authenticated");
  const url = `${rdbUrl}/bulkOrderInquiry/${uid}.json?auth=${token || ""}`;
  const payload = {
    ...orderDetails,
    uid: uid || null,
    createdAt: new Date().toISOString(),
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to place Order Inquiry");
  }
  return await response.json();
};
