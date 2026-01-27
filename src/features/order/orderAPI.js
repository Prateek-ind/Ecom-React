import { generateOrderNumber } from "../../utils/generateOrderNumber";
import { rdbUrl } from "../cart/cartAPI";
import { getIdToken } from "../../utils/getIdToken";

export const placeOrderToDb = async ({ orderDetails, uid }) => {
  const token = await getIdToken();
  if (!uid) throw new Error("User id is missing.");
  const orderNumber = generateOrderNumber();
  const url = `${rdbUrl}/orders/${uid}.json?auth=${token || ""}`;
  const payload = {
    ...orderDetails,
    orderNumber,
    uid,
    status: "PLACED",
    createdAt: new Date().toISOString(),
  };

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to place Order");
  }
  const data = await response.json();

  return { orderId: data.name, ...payload };
};
export const fetchOrdersFromDb = async ({ uid }) => {
  const token = await getIdToken();
  console.log("UID:", uid);
  console.log("TOKEN:", token);

  if (!uid) throw new Error("User id is missing.");
  if (!token) throw new Error("Auth token missing.");
  
  if (!uid) throw new Error("User id is missing.");

  const url = `${rdbUrl}/orders/${uid}.json?auth=${token || ""}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch Order");
  }
  const data = await response.json();
  if (!data) return [];
  return Object.entries(data).map(([orderId, order]) => ({
    orderId,
    ...order,
  }));
};

export const fetchSingleOrderFromDb = async ({ orderId, uid }) => {
  const token = await getIdToken();
  if (!orderId || !uid) {
    throw new Error("Missing UID or Order ID.");
  }
  const url = `${rdbUrl}/orders/${uid}/${orderId}.json?auth=${token || ""}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Unable to fetch order details");
  return response.json();
};

export const bulkOrderInquiryToDb = async ({ uid, orderDetails }) => {
  const token = await getIdToken();
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
  const data = await response.json();
  return { orderId, ...data };
};
