import { toast } from "sonner"
import { WishlistResponseType } from "./Wishlist.types"
import { handleProductToWishlist } from "@/Services/Wishlist.services"
import { useEffect, useState } from "react"

export default function useWishlistBtn(productId:string,isInitiallyWishlisted:boolean) {
      const [isLoading, setIsLoading] = useState(false)
        const [isWishlisted, setIsWishlisted] = useState(isInitiallyWishlisted)
        useEffect(() => {
          setIsWishlisted(isInitiallyWishlisted)
        
          
        }, [isInitiallyWishlisted])
        
        async function toggleWishlist () {
               setIsLoading(true)
               const prevState=isWishlisted
               setIsWishlisted(!prevState)
               try {
                 let result=   await handleProductToWishlist(productId,!prevState)
                if(result?.status!=="success"){
                   setIsWishlisted(prevState)
                }
                displayToastMessage(result)
               } catch (error) {
                  setIsWishlisted(prevState)
                  toast.error("Something went wrong")
               }
               finally{
                setIsLoading(false)
               }
        }
        function displayToastMessage(result:WishlistResponseType|null){
          if(result ==null) toast.error("Unexpected error")
          else{
        if("status" in result){
           toast.success(result.message)
        }else{
          toast.error(result.message)
        }
        }  
        }
  return {
      isLoading,
      toggleWishlist,
      isWishlisted
  }
}
