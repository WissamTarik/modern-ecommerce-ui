import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ProductResponseType } from '@/types/Product.types'
import { ShoppingCart, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import AddProductToCartBtn from '../_components/AddProductToCartBtn/AddProductToCartBtn'
import WishlistBtn from '../_components/WishlistBtn/WishlistBtn'

export default function WishlistCard({product}:{product:ProductResponseType}) {
  return (
     <Card key={product._id} className="group overflow-hidden border-none shadow-sm hover:shadow-md transition-all">
            <div className="relative aspect-4/5 overflow-hidden bg-muted/20">
              {/* Product Image */}
              <Image
                src={product.imageCover}
                alt={product.title}
                fill
                className="object-contain p-4 transition-transform group-hover:scale-105"
              />
              
              {/* Remove Button (Quick Action) */}
              < WishlistBtn productId={product._id} isInitiallyWishlisted={true}/>
            </div>

            <CardContent className="p-4">
              <Link href={`/productDetails/${product._id}`}>
                <h3 className="font-semibold text-sm line-clamp-1 hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </Link>
              
              <div className="mt-2 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">
                    EGP {product.priceAfterDiscount || product.price}
                  </span>
                  {product.priceAfterDiscount && (
                    <span className="text-xs text-muted-foreground line-through">
                      EGP {product.price}
                    </span>
                  )}
                </div>
                
                {/* Stock status */}
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-2">
               <AddProductToCartBtn productId={product._id} btnSize="sm" sizeIcon={16}  
                        classes="w-full gap-2 font-semibold shadow-sm transition hover:scale-[1.02]"
/>
              </div>
            </CardContent>
          </Card>
  )
}
