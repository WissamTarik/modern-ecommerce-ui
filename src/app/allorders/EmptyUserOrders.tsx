import { Package } from "lucide-react"
import Link from "next/link"

export default function EmptyUserOrders() {
  return (
    <div className="container mx-auto px-4 py-10 min-h-[60vh] flex flex-col">
      
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
        <Package className="text-primary w-6 h-6 md:w-7 md:h-7" />
        My Orders
      </h1>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-8 md:p-12 bg-muted/20 rounded-2xl border border-dashed w-full max-w-md">

          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <Package className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h2 className="text-lg md:text-xl font-semibold mb-2">
            No orders yet
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-6">
            Looks like you haven’t placed any orders. Start shopping and your orders will appear here.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}