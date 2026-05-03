"use client"

import { Button } from '@/components/ui/button'
import { CartContext } from '@/Contexts/CartContextProvider'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useContext, } from 'react'

export default function NavbarCartBtn() {
    const {cartCount}=useContext(CartContext)
 
  
  return (
 <>
 
 <Button variant="ghost" size="icon" asChild className="relative text-primary hover:bg-primary/10">
              <Link href="/cart">
                <ShoppingCart className="size-6" />
               {cartCount>0&&  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full">{cartCount}</span>} 
              </Link>
            </Button>
 </>
  )
}
