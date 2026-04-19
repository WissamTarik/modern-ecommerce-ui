import { Card, CardContent } from "@/components/ui/card";

export default function WishlistCardSkeleton() {
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      {/* Image Area Skeleton */}
      <div className="relative aspect-4/5 bg-gray-200 animate-pulse" />

      <CardContent className="p-4 space-y-4">
        {/* Title Skeleton */}
        <div className="h-4 bg-gray-200 rounded-md w-3/4 animate-pulse" />
        
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            {/* Price Skeleton */}
            <div className="h-5 bg-gray-200 rounded-md w-20 animate-pulse" />
            {/* Old Price Skeleton */}
            <div className="h-3 bg-gray-200 rounded-md w-12 animate-pulse" />
          </div>
          
          {/* Badge Skeleton */}
          <div className="h-5 bg-gray-200 rounded-full w-16 animate-pulse" />
        </div>

        {/* Button Skeleton */}
        <div className="h-10 bg-gray-200 rounded-lg w-full animate-pulse" />
      </CardContent>
    </Card>
  );
}