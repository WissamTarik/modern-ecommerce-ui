import { Button } from '@/components/ui/button'
import { ArrowRight, Heart } from 'lucide-react'
import Link from 'next/link'

export default function EmptyWishlist() {
  return (
  <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-muted rounded-full p-6 mb-4">
          <Heart size={48} className="text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Your wishlist is empty</h2>
        <p className="text-muted-foreground mt-2">Add items you love to your wishlist to see them here.</p>
        <Link href="/">
          <Button className="mt-6 gap-2">
            Continue Shopping <ArrowRight size={16} />
          </Button>
        </Link>
      </div>  )
}
