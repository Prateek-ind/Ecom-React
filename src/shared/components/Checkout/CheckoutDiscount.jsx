

const CheckoutDiscount = () => {
  return (
    <div className="w-full flex gap-8 mt-4">
      <input
        type="text"
        placeholder="Discount Code"
        name="discount-coupon"
        id="discount-coupon"
        className="w-2/4 px-4 py-4 rounded"
      />
      <button className="bg-gray-200 px-4 py-2 rounded text-gray-500">Apply</button>
    </div>
  );
};

export default CheckoutDiscount;
