const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={product[1]} className="max-w-72 max-h-72" alt="" />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.discountedPrice}</p>
      <p>Original Price: ₹{product.originalPrice}</p>
      <p>Discount: {product.discountedPrice}%</p>
      <p>Rating: {product.rating} ⭐</p>
    </div>
  );
};

export default ProductCard;
