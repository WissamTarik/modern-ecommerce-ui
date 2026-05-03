"use client"
import { Button } from '@/components/ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import useCartItemClearBtn from './useCartItemClearBtn'

export default function CartItemClearBtn({productId}:{productId:string}) {

    const {isLoading,handleClearCartItem}=useCartItemClearBtn(productId)     
  return (
       <Button 
        disabled={isLoading}
       onClick={handleClearCartItem} variant="ghost" size="icon" className={`text-destructive cursor-pointer hover:bg-destructive/10
        ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
            `}>
                       {isLoading?<>
            <Loader2 size={15} className="animate-spin" /> </> :<Trash2 size={18} />}
     </Button>
  )
}
