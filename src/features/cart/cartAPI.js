export const projectId = import.meta.env.VITE_PROJECT_ID;
export const apiKey = import.meta.env.VITE_API_KEY;
export const rdbUrl =
  "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com/";

let idToken = null;
export const setIdToken = (token) => {
  idToken = token;
};

export const getIdToken = () => {
  if (!idToken) {
    throw new Error("User not logged in");
  }
  return idToken;
};

export const fetchCart = async (uid) => {
  const token = getIdToken();
  const url = `${rdbUrl}/carts/${uid}.json?auth=${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  const data = await response.json();

  return data || {};
};

export const saveCart = async (uid, cartItems) => {
  const token = getIdToken();
  const url = `${rdbUrl}/carts/${uid}.json?auth=${token}`;
  const res = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(cartItems),
  });

  if (!res.ok) throw new Error("Failed to save cart");
};
