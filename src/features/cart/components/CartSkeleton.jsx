const CartSkeleton = () => {
  return (
    <div className="pt-24 bg-[#feffec] animate-pulse">
      
      {/* Header */}
      <div className="mt-12 flex flex-col items-center">
        <div className="h-8 w-32 bg-gray-300 rounded mb-6"></div>
        <div className="h-4 w-64 bg-gray-200 rounded mb-8"></div>
      </div>

      {/* Table Header */}
      <div className="w-3/4 mx-auto grid grid-cols-3 md:grid-cols-5 pb-2 mb-4">
        <div className="col-span-3 h-4 bg-gray-200 rounded"></div>
        <div className="hidden md:block h-4 bg-gray-200 rounded"></div>
        <div className="hidden md:block h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Cart Items */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-3/4 mx-auto grid grid-cols-3 md:grid-cols-5 py-6 border-b"
        >
          {/* Product Info */}
          <div className="flex gap-6 col-span-3">
            <div className="h-32 w-24 bg-gray-300 rounded"></div>
            <div className="flex flex-col gap-3 justify-center w-full">
              <div className="h-4 w-40 bg-gray-300 rounded"></div>
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Quantity */}
          <div className="pt-4">
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>

          {/* Total */}
          <div className="pt-8 hidden md:block">
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}

      {/* Summary Section */}
      <div className="w-3/4 mx-auto flex justify-between pt-8">
        
        {/* Notes */}
        <div className="h-24 w-1/3 bg-gray-200 rounded"></div>

        {/* Price Section */}
        <div className="flex flex-col gap-3 items-end w-1/3">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;