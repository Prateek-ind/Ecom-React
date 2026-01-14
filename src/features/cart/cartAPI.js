export const projectId = import.meta.env.VITE_PROJECT_ID;
export const apiKey = import.meta.env.VITE_API_KEY;

export const rdbUrl =
  "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com/";

let idToken = null;
export const getIdToken = (token) => {
  idToken = token;
};

export const getHeaders = () => {
  const headers = { "Content-Type": "application/json" };
  if (idToken) headers["Authorization"] = `Bearer ${idToken}`;
  return headers;
};

export const fetchCart = async (userId) => {
  const url = `${rdbUrl}/carts/${userId}.json?auth=${idToken || ""}`;
  const response = await fetch(url, { headers: getHeaders() });
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();

  return data || {};
};

export const saveCart = async (userId, cartItems) => {
  const url = `${rdbUrl}/carts/${userId}.json?auth=${idToken || ""}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(cartItems),
  });

  if (!res.ok) throw new Error("Failed to save cart");
};
