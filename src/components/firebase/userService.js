import { rdbUrl, setIdToken, getHeaders } from "../../features/cart/cartAPI";

export const contactUsToDb = async ({ userId, messageDetails }) => {
  const url = `${rdbUrl}/messages/${userId}.json?auth=${setIdToken() || null}`;
  const payload = {
    ...messageDetails,
    message: messageDetails.message,
    createdAt: new Date().toISOString(),
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: getHeaders(),
  });
  if (!response.ok) {
    throw new Error("Count not send message.");
  }
  return await response.json();
};
