

import { getLoggedUserWishlist } from '@/Services/Wishlist.services'
import WishlistCard from './WishlistCard'
import EmptyWishlist from './EmptyWishlist'

export const metadata={
  title:"Wishlist"
}
export default async function WishlistPage() {
  
 const wishlistResult=await getLoggedUserWishlist()
 const wishlistItems=wishlistResult?.data||[]
  if (wishlistItems.length === 0) {
    return (
    <EmptyWishlist/>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-10 flex items-baseline gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight">My Wishlist</h1>
        <span className="text-lg text-muted-foreground">({wishlistItems.length} items)</span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems?.map((product) => (
         <WishlistCard product={product} key={product._id}/>
        ))}
      </div>
    </div>
  )
}