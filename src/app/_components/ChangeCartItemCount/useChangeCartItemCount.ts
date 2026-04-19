import { CartContext } from "@/Contexts/CartContextProvider"
import { changeProductCountInTheCart } from "@/Services/Cart.services"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { toast } from "sonner"

export default function useChangeCartItemCount(productId:string,count:number) {
     const {updateCartCount}=useContext(CartContext)
    
    const router=useRouter()
    const [isLoading, setIsLoading] = useState(false)
    async  function handleChangeItemCount(){
    setIsLoading(true)
    
     const result=await changeProductCountInTheCart(productId,count) 
    if(result !=null){
             if("status" in result){
              updateCartCount(result.numOfCartItems)
               toast.success("Count is updated")
               
               setIsLoading(false)
               router.refresh()
             }
             else{
                toast.error(result.message)
             }
    }else{
        toast.error("Failed to update product count try again!!!")
    }
    setIsLoading(false)
}
  return {isLoading,handleChangeItemCount}
}
