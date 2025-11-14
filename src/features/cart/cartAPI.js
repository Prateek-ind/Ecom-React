export const projectId = import.meta.env.VITE_PROJECT_ID;
export const apiKey = import.meta.env.VITE_API_KEY;

let idToken = null;
export const setIdToken = (token) => {
  idToken = token;
};

const getHeaders = () => {
  const headers = { "Content-Type": "application/json" };
  if (idToken) headers["Authorization"] = `Bearer ${idToken}`;
  return headers;
};

export const fetchCart = async (userId) => {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/carts/${userId}?key=${apiKey}`;
  const response = await fetch(url, { headers: getHeaders() });
  if (!response.ok) {
    throw new Error("Failed to fetch cart!!!");
  }
  const data = await response.json();
  const itemFields = data.fields?.items?.mapValue?.fields || {};

  const cartItems = Object.fromEntries(
    Object.entries(itemFields).map(([id, val]) => {
      const fields = val.mapValue.fields;
      return [
        id,
        {
          id,
          name: fields.name.stringValue,
          price: parseFloat(fields.price.doubleValue),
          quantity: parseInt(fields.quantity.integerValue),
        },
      ];
    })
  );
  return cartItems;
}; 

export const saveCart = async (userId, cartItems) => {
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/carts/${userId}?key=${apiKey}`;

  const body = {
    fields: {
      items: {
        mapValue: {
          fields: Object.fromEntries(
            Object.entries(cartItems).map(([id, item]) => [
              id,
              {
                mapValue: {
                  fields: {
                    name: { stringValue: item.name },
                    price: { doubleValue: item.price },
                    quantity: { integerValue: item.quantity },
                  },
                },
              },
            ])
          ),
        },
      },
    },
  };
  const res = await fetch(url, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error("Failed to save cart");
};
