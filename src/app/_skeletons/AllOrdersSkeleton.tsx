import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AllOrdersSkeleton() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title Skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-48" />
      </div>

      <div className="grid gap-6">
        {[1, 2, 3].map((order) => (
          <Card key={order} className="overflow-hidden border-none shadow-md">
            {/* Header Skeleton */}
            <CardHeader className="bg-muted/40 border-b flex flex-row items-center justify-between flex-wrap gap-4 p-6">
              <div className="space-y-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Items List Skeleton */}
                <div className="md:col-span-2 space-y-6">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <Skeleton className="size-16 rounded-lg shrink-0" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/4" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info Box Skeleton */}
                <div className="bg-muted/20 p-4 rounded-lg space-y-4 h-fit border border-muted/50">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-28" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Separator className="bg-muted/50" />
                  <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-5 w-12" />
                    <Skeleton className="h-7 w-24" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}