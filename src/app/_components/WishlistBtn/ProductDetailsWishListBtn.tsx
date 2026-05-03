import { ProductWishListComponentsProps } from './Wishlist.types'
import clsx from 'clsx'
import { Heart, Loader2 } from 'lucide-react'

export default function ProductDetailsWishListBtn({className,isLoading,isWishlisted,toggleWishlist}:ProductWishListComponentsProps) {
  return (
     <button
      onClick={toggleWishlist}
      disabled={isLoading}
      className={clsx(
        "h-14 px-6 rounded-lg border flex cursor-pointer items-center justify-center gap-2 text-sm font-semibold transition-all duration-300",
        isWishlisted
          ? "bg-red-50 border-red-200 text-red-600"
          : "hover:bg-muted",
        className
      )}
    >
     {
      isLoading?<Loader2 size={18} className='animate-spin'/>
      :(

         <Heart
        size={20}
        className={clsx(
          "transition-all",
          isWishlisted ? "fill-red-500 text-red-500" : ""
        )}
      />
      )
     }
      {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
    </button>
  )
}
