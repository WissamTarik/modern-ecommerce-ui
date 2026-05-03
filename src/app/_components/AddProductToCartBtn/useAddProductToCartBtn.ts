<<<<<<< HEAD
import { CartContext } from "@/Contexts/CartContextProvider";
import { AddProductToUserCart } from "@/Services/Cart.services";
import { useContext, useState } from "react";
import { toast } from "sonner";

// useAddProductToCartBtn.ts
export default function useAddProductToCartBtn(productId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount } = useContext(CartContext);

  async function handleAddProductToCart() {
    // 1. Optional: Add a client-side check if you store token in a place accessible to client
  //   if (!isLoggedIn) { toast.error("Please login first"); return; }

    setIsLoading(true);
    const result = await AddProductToUserCart(productId);
    
    if (result) {
      if ("status" in result && result.status === "success") {
        toast.success(result.message);
        updateCartCount(result.numOfCartItems);
      } else {
        // This captures the "You are not logged in" message from the API
        toast.error(result.message || "Please login to add items to cart");
      }
    } else {
      toast.error("Failed to add the product. Try again later.");
    }
    setIsLoading(false);
  }

  return { isLoading, handleAddProductToCart };
}
=======
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
>>>>>>> de63b5392dd26dfee50ca3f88c2e994e1f88b83a
