"use client"

import { getUserCart } from "@/Services/Cart.services"
import { CartContextProps } from "@/types/CartContext.types"
import { createContext, useEffect, useState } from "react"

export const CartContext=createContext<CartContextProps>({cartCount:0,updateCartCount:(newCount:number)=>{}})
export default function CartContextProvider({children}:{children:React.ReactNode}) {
  const [cartCount, setCartCount] = useState(0)
  function updateCartCount(newCount:number){
    setCartCount(newCount)
  }
    useEffect(() => {
        getUserCart().then((response)=>updateCartCount(response?.numOfCartItems||0))
      }, [])
      
  return (
    <CartContext.Provider value={{cartCount,updateCartCount}}>
      {children}
    </CartContext.Provider>
  )
}
