import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {   Star } from 'lucide-react'
import Image from 'next/image'
import { ProductCardProps, ProductResponseType } from '@/types/Product.types'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import AddProductToCartBtn from '../AddProductToCartBtn/AddProductToCartBtn'
import WishlistBtn from '../WishlistBtn/WishlistBtn'

export default function ProductCard({brand,category,title,quantity,price,priceAfterDiscount,imageCover,ratingsAverage,_id,isInWishlist}:ProductCardProps) {
 
 
  const discount =
    priceAfterDiscount &&
    Math.round(((price - priceAfterDiscount) / price) * 100);
  return (
     <Card className="group relative pt-0 overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      {/* IMAGE SECTION */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        
        {/* Wishlist */}
        < WishlistBtn productId={_id} isInitiallyWishlisted={isInWishlist}/>

        {/* Image */}
        <Link href={`/productDetails/${_id}`} className='relative block w-full h-full'>
          <Image
            src={imageCover}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading='eager'
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Discount */}
        {discount && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white shadow">
            SAVE {discount}%
          </Badge>
        )}
      </div>

      {/* CONTENT */}
      <Link href={`/productDetails/${_id}`}>
        <CardContent className="p-4 space-y-2">
          
          {/* Category + Brand */}
          <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            {category.name} • {brand.name}
          </p>

          {/* Title */}
          <h3 className="line-clamp-1 text-sm font-semibold transition group-hover:text-primary">
            {title}
          </h3>

          {/* Rating + Stock */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-500">
              <Star size={14} fill="currentColor" />
              <span className="ml-1 text-xs font-bold text-foreground">
                {ratingsAverage}
              </span>
            </div>

            <span className="text-[10px] text-muted-foreground">
              {quantity} left
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              EGP {priceAfterDiscount || price}
            </span>

            {priceAfterDiscount && (
              <span className="text-xs line-through text-muted-foreground">
                EGP {price}
              </span>
            )}
          </div>
        </CardContent>
      </Link>

      {/* FOOTER */}
      <CardFooter className="p-4 pt-2">
        <AddProductToCartBtn
          classes="w-full gap-2 font-semibold shadow-sm transition hover:scale-[1.02]"
          sizeIcon={16}
          btnSize="sm"
          productId={_id}
        />
      </CardFooter>
    </Card>
  )
}
