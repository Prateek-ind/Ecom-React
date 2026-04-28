const ProductDetailsSkeleton = () => {
  return (
    <div className="pt-36 pb-36 mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
      
      
      <div className="col-span-1">
        <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-4"></div>
        <div className="flex gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>

      <div className="col-span-1"></div>

      {/* Details Section */}
      <div className="col-span-1 space-y-4">
        
        {/* Title */}
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
        <div className="h-6 w-64 bg-gray-300 rounded"></div>

        {/* Price */}
        <div className="flex gap-4">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Rating */}
        <div className="h-4 w-32 bg-gray-200 rounded"></div>

        {/* Quantity */}
        <div className="h-10 w-32 bg-gray-200 rounded"></div>

        {/* Buttons */}
        <div className="h-10 w-full bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>

        {/* Description */}
        <div className="space-y-2 pt-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-3 w-full bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;