import { ApplyCouponToTheCart } from '@/Services/Cart.services'
import React, { useRef, useState } from 'react'
import { toast } from 'sonner'

export default function useApplyCouponToCartBtn() {
       const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
  async function  handleApplyCoupon(){
    if(!inputRef.current?.value.trim()){
         toast.error("Please enter a coupon number")
    }else{
        setIsLoading(true)
        const result=await ApplyCouponToTheCart(inputRef.current.value)
      if(result !=null){

      
        if("success" in result){
           toast.success("Coupon applied")
          inputRef.current.value=""
        }
        else{
            toast.error(result.message)
                    inputRef.current.value=""

        }
    }else{
        toast.error("Failed to apply coupon try again later!!")
    }
setIsLoading(false)
}
    
    }
  return {
    isLoading,
    inputRef,
    handleApplyCoupon
  }
}
