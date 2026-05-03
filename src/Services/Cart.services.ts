"use server"

import { API_TAGS } from "@/Constants/tags";
import { CartSuccessfulResponse, FailedCartResponse } from "@/types/Cart.types";
import { apiClient } from "@/utils/apiClient";
import { revalidateTag } from "next/cache";

export async function getUserCart():Promise<CartSuccessfulResponse|null>{
 
    return apiClient<CartSuccessfulResponse>("/api/v2/cart",{
        next:{
            tags:[API_TAGS.cart]
        },
    useAuth:true,

    })
}
export async function AddProductToUserCart(productId:string):Promise<CartSuccessfulResponse|FailedCartResponse|null>{
   
    const result= await apiClient<CartSuccessfulResponse | FailedCartResponse>("/api/v2/cart",{
        method:"POST",
        body:JSON.stringify({productId}),
        useAuth:true
    })
    if(result&& "status" in result){
        revalidateTag(API_TAGS.cart,"")
    }
    return result
}
export async function ClearUserCart():Promise<CartSuccessfulResponse|FailedCartResponse|null>{
   
   const result= await apiClient<CartSuccessfulResponse | FailedCartResponse>("/api/v2/cart", {
        method: "DELETE",
        useAuth:true

    });
 if(result&& "status" in result){
        revalidateTag(API_TAGS.cart,"")
    }
    return result
 
    
}
export async function RemoveProductFromTheCart(productId:string):Promise<CartSuccessfulResponse|FailedCartResponse|null>{
  
    const result= apiClient<CartSuccessfulResponse|FailedCartResponse>(`/api/v2/cart/${productId}`,{
        method:"DELETE",
        useAuth:true
    })
     if(result&& "status" in result){
        revalidateTag(API_TAGS.cart,"")
    }
    return result
}
export async function changeProductCountInTheCart(productId:string,count:number):Promise<CartSuccessfulResponse|FailedCartResponse|null>{
       
    const result=await apiClient<CartSuccessfulResponse|FailedCartResponse>(`/api/v2/cart/${productId}`,{
        method:"PUT",
          body:JSON.stringify({"count":count}),
          useAuth:true
    })
     if(result&& "status" in result){
        revalidateTag(API_TAGS.cart,"")
    }
    return result
}
export async function ApplyCouponToTheCart(couponName:string):Promise<CartSuccessfulResponse|FailedCartResponse|null>{
       
    const result=await apiClient<CartSuccessfulResponse|FailedCartResponse>("/api/v2/cart/applyCoupon",{
          method:"PUT",
          body:JSON.stringify({"couponName":couponName}),
          useAuth:true
    })
     if(result&& "status" in result){
        revalidateTag(API_TAGS.cart,"")
    }
    return result
}
