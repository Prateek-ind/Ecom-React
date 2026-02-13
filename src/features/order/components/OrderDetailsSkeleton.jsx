const OrderDetailsSkeleton = () => {
  return (
    <section className="w-full py-10 bg-[#feffec] animate-pulse">
      <div className="mx-auto max-w-6xl px-4 md:px-8 mb-6 mt-28">

        {/* Title */}
        <div className="h-8 w-64 mx-auto bg-gray-300 rounded mb-10" />

        <hr />

        {/* Order meta */}
        <div className="mt-6 mb-6 px-12 flex flex-col md:flex-row md:justify-between gap-4">
          <div className="h-4 w-56 bg-gray-300 rounded" />
          <div className="h-4 w-64 bg-gray-300 rounded" />
        </div>

        <div className="px-12 mb-8 flex flex-col md:flex-row md:justify-between gap-4">
          <div className="h-4 w-40 bg-gray-300 rounded" />
          <div className="h-4 w-48 bg-gray-300 rounded" />
        </div>

        <hr />

        {/* Ordered items */}
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="mx-auto flex items-center justify-center gap-6 py-6 px-4"
          >
            <div className="h-28 w-28 bg-gray-300 rounded-lg" />
            <div className="flex flex-col gap-3">
              <div className="h-4 w-48 bg-gray-300 rounded" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
          </div>
        ))}

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-12 px-12">

          {/* Shipping */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-1/2">
            <div className="h-4 w-40 bg-gray-300 rounded mb-2" />
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i} className="h-3 w-72 bg-gray-200 rounded" />
            ))}
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-3 w-full md:w-1/3">
            <div className="h-4 w-40 bg-gray-300 rounded mb-2" />
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="h-3 w-48 bg-gray-200 rounded" />
            ))}
            <div className="h-5 w-56 bg-gray-300 rounded mt-3" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderDetailsSkeleton;
