"use server"

import { ShippingAddressPaymentFormType } from "@/app/payment/[totalPrice]/ShippingAddress.types";
import { API_TAGS } from "@/Constants/tags";
import { CardPaymentFailedResponse, CardPaymentSuccessResponse, CheckoutFailedResponse, CheckoutSuccessfulResponse } from "@/types/Payment.types";
import { apiClient } from "@/utils/apiClient";
import { revalidateTag } from "next/cache";

export async function PayByCash(shippingAddress:ShippingAddressPaymentFormType,cartId:string):Promise<CheckoutFailedResponse|CheckoutSuccessfulResponse>{
        
        const result=await apiClient<CheckoutFailedResponse|CheckoutSuccessfulResponse>(`/api/v2/orders/${cartId}`,{
                method:"POST",
                body:JSON.stringify({shippingAddress}),
                useAuth:true
            })
            
            if(result && result.status=="success"){
               revalidateTag(API_TAGS.orders,"")

            }
            return result

}
export async function PayByCard(shippingAddress:ShippingAddressPaymentFormType,cartId:string):Promise<CardPaymentSuccessResponse|CardPaymentFailedResponse|null>{
 
        const result=await apiClient<CardPaymentFailedResponse|CardPaymentSuccessResponse>(`/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,{
                method:"POST",
                body:JSON.stringify({shippingAddress}),
                useAuth:true
            })
            if(result && result.status=="success"){
                revalidateTag(API_TAGS.orders,"")

            }
            return result
        
}