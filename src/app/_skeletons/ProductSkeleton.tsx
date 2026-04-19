import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <Card className="group overflow-hidden pt-0 rounded-2xl border bg-white shadow-sm">
      
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Skeleton className="h-full w-full" />

        {/* Fake Wishlist Icon */}
        <Skeleton className="absolute top-3 right-3 h-8 w-8 rounded-full" />

        {/* Fake Discount Badge */}
        <Skeleton className="absolute top-3 left-3 h-5 w-16 rounded-md" />
      </div>

      <CardContent className="p-4 space-y-3">
        
        {/* Category & Brand */}
        <Skeleton className="h-2 w-1/3" />

        {/* Title */}
        <Skeleton className="h-4 w-3/4" />

        {/* Rating + Stock */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-3 w-12" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-4 w-14" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-2">
        <Skeleton className="h-9 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}