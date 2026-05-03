import { Card, CardContent } from '@/components/ui/card'
import { ProductTypes } from '@/types/Cart.types'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import CartItemClearBtn from './CartItemClearBtn'
import ChangeCartItemCount from '../ChangeCartItemCount/ChangeCartItemCount'

export default function CartItemCart({_id,count,price,product}:ProductTypes) {
   
  return (
     <Card  className="overflow-hidden border-none shadow-sm bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                  {/* Image */}
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 bg-muted rounded-lg overflow-hidden border">
                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-primary font-medium uppercase tracking-wider">
                          {product.category?.name}
                        </p>
                        <h3 className="font-bold text-lg leading-tight line-clamp-1">
                          {product.title}
                        </h3>
                      </div>
                   
                      <CartItemClearBtn productId={product.id}/>
                    </div>

                    <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-lg bg-background">
                        {/* <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" >
                          <Minus size={14} />
                        </Button> */}
                        <ChangeCartItemCount count={count-1} productId={product.id} >
                          <Minus size={14}/>
                        </ChangeCartItemCount>
                        <span className="w-10 text-center text-sm font-semibold">{count}</span>
                       <ChangeCartItemCount count={count+1}  productId={product.id}>
                          <Plus size={14}/>
                        </ChangeCartItemCount>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">EGP {price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
  )
}
