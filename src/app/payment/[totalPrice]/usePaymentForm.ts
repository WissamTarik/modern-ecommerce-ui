import { PayByCard, PayByCash } from '@/Services/Payment.services'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'
import { ShippingAddressPaymentFormType } from './ShippingAddress.types'
import { PaymentShippingAddressSchema } from './ShippingAddress.schema'
import { useForm } from 'react-hook-form'
import { CartContext } from '@/Contexts/CartContextProvider'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

export default function usePaymentForm(cartId:string) {
   const [paymentMethod, setPaymentMethod] = useState("cash")
  const {updateCartCount}=useContext(CartContext)
  const router=useRouter()
       const {control,formState:{errors,isSubmitting},handleSubmit}=useForm<ShippingAddressPaymentFormType>({
        mode:"onTouched",
        resolver:zodResolver(PaymentShippingAddressSchema)
       })
       const onSubmit=async (data:ShippingAddressPaymentFormType)=>{
            const shippingAddress={
              ...data
            }
            
             if(paymentMethod==="visa"){
                    const result=await PayByCard(shippingAddress,cartId)
                    if(result!=null){
                      if("status" in result&& result.status=="success"){
                        toast.success("Payment operation created successfully")
                        window.open(result.session.url,"_self")
                            
                      }else if("statusMsg" in result){
                        toast.error(result.message)
                      }
                    }          
             }else{
               const result=await PayByCash(shippingAddress,cartId)
               if(result!=null){
                if("status" in result){
                  toast.success(result.message)
                  updateCartCount(0)
                  router.push(`/orderSuccess/${result.data._id}`)
                }else{
                  toast.error(result.message)
                }
               }else{
                toast.error("Unexpected error try again later")
               }
             }
             
       }
  return {
    onSubmit,
    control,
    errors,
    isSubmitting,
    handleSubmit,
    setPaymentMethod
  

  }
}
