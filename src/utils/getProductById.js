import { allProducts } from "../features/product/Products";

export const getProductById = (productId) => {
    return allProducts.find((p) => p.id === productId);
  };