import { CartContext } from "@/Contexts/CartContextProvider"
import { AddProductToUserCart } from "@/Services/Cart.services"
import { useContext, useState } from "react"
import { toast } from "sonner"

export default function useAddProductToCartBtn(productId:string) {
     const [isLoading, setIsLoading] = useState(false)
    const {updateCartCount}=useContext(CartContext)
    async function  handleAddProductToCart(){

        setIsLoading(true)
       const result= await AddProductToUserCart(productId)
       if(result!=null){

           if( "status" in result){
            toast.success(result.message)
            updateCartCount(result.numOfCartItems)
           }else{
            toast.error(result.message,{
                
            })
           }
       }else{
        toast.error("Failed to add the product to the try again later,")
       }
       setIsLoading(false)
     }
  return {isLoading,handleAddProductToCart}
}
