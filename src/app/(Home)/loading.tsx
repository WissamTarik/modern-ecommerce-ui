import { ProductSkeleton } from "@skeletons/ProductSkeleton";


export default function Loading() {
  return (
    <section className="container py-10 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="hidden lg:block w-64 space-y-6">
          <div className="space-y-2">
             <div className="h-4 w-20 bg-muted rounded animate-pulse" />
             <div className="h-10 w-full bg-muted rounded animate-pulse" />
          </div>
          <div className="h-px w-full bg-border" />
          <div className="space-y-4">
             <div className="h-4 w-24 bg-muted rounded animate-pulse" />
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex gap-2 items-center">
                 <div className="h-4 w-4 bg-muted rounded" />
                 <div className="h-3 w-20 bg-muted rounded" />
               </div>
             ))}
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="flex-1">
          <div className="mb-8">
             <div className="h-8 w-48 bg-muted rounded mb-2 mx-auto lg:mx-0 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}