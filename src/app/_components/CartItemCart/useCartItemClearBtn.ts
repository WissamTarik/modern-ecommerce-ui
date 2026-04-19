import { CartContext } from "@/Contexts/CartContextProvider";
import { RemoveProductFromTheCart } from "@/Services/Cart.services";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { toast } from "sonner";


export default function useCartItemClearBtn(productId:string) {

    const [isLoading, setIsLoading] = useState(false)
        const {updateCartCount}=useContext(CartContext)
        const router=useRouter();
        async function  handleClearCartItem(){
           setIsLoading(true)
         const result= await RemoveProductFromTheCart(productId)
         if(result !=null){
            if("status" in result && result.status=="success"){
                updateCartCount(result.numOfCartItems)
                toast.success(result.message)
                router.refresh()
    
            }else{
                toast.error(result.message)
            }
         }
         else{
            toast.error("Failed to remove product from the cart try again")
         }
         setIsLoading(false)
        }       
  return {isLoading,handleClearCartItem}
}
