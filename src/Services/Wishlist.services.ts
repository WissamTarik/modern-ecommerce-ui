"use server"
import { UserWishlistResponseType, WishlistResponseType } from "@/app/_components/WishlistBtn/Wishlist.types";
import { API_TAGS } from "@/Constants/tags";
import { apiClient } from "@/utils/apiClient";
import { revalidateTag } from "next/cache";
    const url=`/api/v1/wishlist`
    export async function getLoggedUserWishlist():Promise<UserWishlistResponseType|null> {
    return apiClient<UserWishlistResponseType>(url,{
         next:{
                tags:[API_TAGS.wishlist],
                revalidate:3600// after an hour
            },
            useAuth:true
    })
    
}
export async function handleProductToWishlist(productId:string, add=true):Promise<WishlistResponseType> {
    
 
    if(add){
        return apiClient<WishlistResponseType>(url,{
                method:"POST",
                 body:JSON.stringify({productId}),
                 useAuth:true
            })
    }else{
        const result=await apiClient<WishlistResponseType>(`${url}/${productId}`,{
           method:"DELETE",
           useAuth:true
        })
           if (result && result.status === "success") {
        revalidateTag(API_TAGS.wishlist,"");
    }
    return result
    }
}
