import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Breadcrumbs Skeleton */}
      <div className="mb-8 flex items-center gap-2">
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
        {/* Left: Product Gallery Skeleton */}
        <div className="space-y-4">
          {/* Main Image Skeleton */}
          <Skeleton className="aspect-square w-full rounded-2xl border" />
          
          {/* Thumbnails Skeleton */}
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 rounded-md border" />
            ))}
          </div>
        </div>

        {/* Right: Product Info Skeleton */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-3/4" /> {/* Title */}
          </div>

          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-16" /> {/* Rating */}
            <Separator orientation="vertical" className="h-4" />
            <Skeleton className="h-5 w-24" /> {/* Reviews */}
            <Separator orientation="vertical" className="h-4" />
            <Skeleton className="h-5 w-20" /> {/* Stock Status */}
          </div>

          <div className="flex items-baseline gap-4">
            <Skeleton className="h-12 w-32" /> {/* Price */}
            <Skeleton className="h-6 w-20" />  {/* Old Price */}
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Skeleton className="h-14 flex-1 rounded-md" /> {/* Add to Cart */}
            <Skeleton className="h-14 w-full sm:w-32 rounded-md" /> {/* Wishlist */}
          </div>

          {/* Trust Badges Skeleton */}
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border p-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="flex gap-8 border-b mb-8">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </div>
  );
}