"use client"

import { WishlistBtnProps } from './Wishlist.types'

import useWishlistBtn from './useWishlistBtn'
import ProductCardWishListIcon from './ProductCardWishListIcon'
import ProductDetailsWishListBtn from './ProductDetailsWishListBtn'

export default function WishlistBtn({productId,variant="icon",className,isInitiallyWishlisted=false}:WishlistBtnProps) {
  
  const {
      isLoading,
      toggleWishlist,
      isWishlisted
  }=useWishlistBtn(productId,isInitiallyWishlisted)
  if (variant === "icon") {
    return (
     <ProductCardWishListIcon isWishlisted={isWishlisted} isLoading={isLoading} className={className} toggleWishlist={toggleWishlist}/>
    );
  }

  return (
   <ProductDetailsWishListBtn isLoading={isLoading} isWishlisted={isWishlisted} className={className} toggleWishlist={toggleWishlist}/>

  )
}
