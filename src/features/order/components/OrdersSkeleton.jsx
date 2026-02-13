const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`} />
);

const OrderSkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Skeleton className="h-3 w-36" />
        <Skeleton className="h-3 w-20" />
      </div>

      <hr className="opacity-30" />

      {/* Order meta */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="space-y-2">
          <Skeleton className="h-3 w-20 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-3 w-16 mx-auto" />
          <Skeleton className="h-4 w-16 mx-auto" />
        </div>

        <div className="space-y-2 hidden md:block">
          <Skeleton className="h-3 w-20 mx-auto" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </div>
      </div>

      <hr className="opacity-30" />

      {/* Total */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-6 w-24" />
      </div>
    </div>
  );
};

const OrdersSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4">
      {[1, 2, 3].map((_, index) => (
        <OrderSkeletonCard key={index} />
      ))}
    </div>
  );
};

export default OrdersSkeleton;
