import WishlistCardSkeleton from "./WishlistCardSkeleton";


export default function WishlistSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Skeleton */}
      <div className="mb-10 flex items-baseline gap-3">
        <div className="h-10 bg-gray-200 rounded-md w-48 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded-md w-16 animate-pulse" />
      </div>

      {/* Grid of Skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <WishlistCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}