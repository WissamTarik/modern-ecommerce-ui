import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CartSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Header Skeleton */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" /> {/* Icon */}
          <Skeleton className="h-10 w-64" /> {/* Title */}
        </div>
        <Skeleton className="h-10 w-32 rounded-md" /> {/* Clear Cart Button */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items List Skeleton */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {[1, 2, 3].map((item) => (
              <div key={item} className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  {/* Product Image */}
                  <Skeleton className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg shrink-0" />
                  
                  {/* Product Details */}
                  <div className="flex-1 w-full space-y-3">
                    <div className="flex justify-between">
                      <div className="space-y-2 w-full">
                        <Skeleton className="h-4 w-20" /> {/* Category */}
                        <Skeleton className="h-6 w-3/4" /> {/* Title */}
                      </div>
                      <Skeleton className="h-8 w-8 rounded-md" /> {/* Trash Icon */}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <Skeleton className="h-9 w-28 rounded-lg" /> {/* Quantity Controls */}
                      <div className="space-y-1 text-right">
                        <Skeleton className="h-4 w-16 ml-auto" /> {/* Old Price */}
                        <Skeleton className="h-6 w-24 ml-auto" /> {/* Current Price */}
                      </div>
                    </div>
                  </div>
                </div>
                {item < 3 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary Box Skeleton */}
        <div className="lg:col-span-1">
          <Card className="border-none shadow-md">
            <CardContent className="p-6 space-y-6">
              <Skeleton className="h-7 w-1/2" /> {/* Summary Title */}
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
                <Separator />
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-28" />
                </div>
              </div>

              <Skeleton className="h-14 w-full rounded-xl" /> {/* Checkout Button */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}