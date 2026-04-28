const CheckoutSkeleton = () => {
  return (
    <div className="animate-pulse">
      
      {/* Navbar */}
      <div className="h-16 w-full bg-gray-200 fixed top-0 left-0"></div>

      {/* Main Layout */}
      <div className="pt-32 mb-12 mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Left - Form Skeleton */}
        <div className="space-y-4">
          <div className="h-6 w-40 bg-gray-300 rounded"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-full bg-gray-200 rounded"></div>
          ))}
          <div className="h-10 w-32 bg-gray-300 rounded mt-4"></div>
        </div>

        {/* Right - Order Summary */}
        <div>
          <div className="bg-gray-100 p-8 space-y-6">
            
            {/* Items */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center">
                <div className="h-20 w-24 bg-gray-300 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}

            {/* Discount Section */}
            <div className="h-10 w-full bg-gray-200 rounded"></div>

            {/* Order Note */}
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>

            {/* Pricing */}
            <div className="flex justify-between">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>

            <div className="flex justify-between mt-4">
              <div className="h-6 w-20 bg-gray-300 rounded"></div>
              <div className="h-6 w-28 bg-gray-300 rounded"></div>
            </div>

            <div className="h-4 w-40 bg-gray-200 rounded mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;