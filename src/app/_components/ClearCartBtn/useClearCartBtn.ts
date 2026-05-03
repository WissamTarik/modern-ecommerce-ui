import { CartContext } from "@/Contexts/CartContextProvider"
import { ClearUserCart, getUserCart } from "@/Services/Cart.services"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react"
import { toast } from "sonner"

export default function useClearCartBtn() {
     const [isLoading, setIsLoading] = useState(false)
    const router=useRouter()
    const {updateCartCount}=useContext(CartContext)
   async function handleDeleteUserCart(){
    setIsLoading(true)

    const result=await ClearUserCart()
    if(result !=null){
         if("status" in result && result.status=="success"){

             updateCartCount(result.numOfCartItems)
             getUserCart()
             toast.success(result.message)
             router.refresh()
         }
       else{

           toast.error(result.message)
       }
    }
    else{
        toast.error("Unexpected error")
    }
       setIsLoading(false)
    }
  return {handleDeleteUserCart,isLoading}
}
