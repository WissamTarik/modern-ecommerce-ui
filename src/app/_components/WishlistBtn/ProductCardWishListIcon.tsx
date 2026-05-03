import clsx from 'clsx'
import { Heart, Loader2 } from 'lucide-react'
import { ProductWishListComponentsProps } from './Wishlist.types'

export default function ProductCardWishListIcon({toggleWishlist,isLoading,className,isWishlisted}:ProductWishListComponentsProps) {
  return (
     <button
            onClick={toggleWishlist}
            disabled={isLoading}
            className={clsx(
              "absolute top-3 right-3 z-20 cursor-pointer rounded-full bg-white/90 backdrop-blur p-2 shadow-md transition-all duration-300 hover:scale-110 active:scale-95",
              className
            )}
          >
            {isLoading ? (
            <>
              <Loader2 size={15} className="animate-spin" />
            </>
          ):(
            <Heart
              size={18}
              className={clsx(
                "transition-all duration-300",
                isWishlisted
                  ? "fill-red-500 text-red-500 scale-110"
                  : "text-gray-400 group-hover:text-red-400"
              )}
            />
          )}
          
          </button>
  )
}
