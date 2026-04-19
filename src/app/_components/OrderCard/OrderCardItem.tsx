import { ProductTypes } from '@/types/Cart.types'
import React from 'react'

export default function OrderCardItem({count,price,product}:ProductTypes) {
  return (
   <div  className="flex items-center gap-4">
                        <div className="size-16 rounded-lg bg-muted shrink-0 overflow-hidden border">
                          <img src={product.imageCover} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{product.title}</p>
                          <p className="text-xs text-muted-foreground">Qty: {count} × EGP {price}</p>
                        </div>
                      </div>
  )
}
