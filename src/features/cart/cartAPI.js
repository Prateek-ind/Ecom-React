import { getIdToken } from "../../utils/getIdToken";

export const projectId = import.meta.env.VITE_PROJECT_ID;
export const apiKey = import.meta.env.VITE_API_KEY;
export const rdbUrl =
  "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com/";



export const fetchCart = async (uid) => {
  const token =await getIdToken();
  const url = `${rdbUrl}/carts/${uid}.json?auth=${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();

  return data || {};
};

export const saveCart = async (uid, cartItems) => {
  const token =await getIdToken();
  const url = `${rdbUrl}/carts/${uid}.json?auth=${token}`;
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(cartItems),
  });

  if (!res.ok) throw new Error("Failed to save cart");
};
