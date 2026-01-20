import { rdbUrl, getIdToken } from "../cart/cartAPI";

export const contactUsToDb = async ({ uid, messageDetails }) => {
  const url = `${rdbUrl}/messages/${uid}.json?auth=${getIdToken() || null}`;
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
    throw new Error("Could not send message.");
  }
  return await response.json();
};

export const fetchUserDetailsFromDb = async (uid) => {
  try {
    const token = getIdToken();
    const response = await fetch(
      `${rdbUrl}/users/${uid}.json?auth=${token}`
    );
    if (!response.ok) throw new Error("Failed to fetch profile!!!");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw new Error(error.message);
  }
};

export const storeUserDetailsToDb = async (userDetails, uid) => {
  try {
    const token =  getIdToken();
    const response = await fetch(
      `${rdbUrl}/users/${uid}.json?auth=${token}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...userDetails,
          updatedAt: new Date().toISOString(),
        }),
      }
    );
    if (!response.ok) throw new Error("Failed to set profile!!!");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending user details:", error);
    throw new Error(error.message);
  }
};
