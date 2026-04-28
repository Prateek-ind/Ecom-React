const ViewAllProductsSkeleton = () => {
  return (
    <section className="w-full max-w-8xl flex flex-col items-center bg-[#feffec] animate-pulse">
      
      {/* Header */}
      <div className="w-full text-center mt-28">
        <div className="w-full py-12">
          <div className="h-3 w-48 bg-gray-200 rounded mx-4 mb-4"></div>
          <div className="h-8 w-64 bg-gray-300 rounded mx-auto"></div>
        </div>

        {/* Count */}
        <div>
          <hr />
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto my-4"></div>
          <hr />
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 lg:px-6 xl:px-8 mb-12 w-full max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              
              {/* Image */}
              <div className="w-full h-48 bg-gray-300 rounded-lg"></div>

              {/* Title */}
              <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

              {/* Price */}
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ViewAllProductsSkeleton;