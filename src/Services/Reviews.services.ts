"use server"

import { API_TAGS } from "@/Constants/tags"
import { CreateReviewResponse, DeleteProductReviewResponse, ReviewFormValues, ReviewSuccessfulResponseType } from "@/types/Review.types"
import { getApiBaseUrl } from "@/utils/api"
import { apiClient } from "@/utils/apiClient"
import { getAuthHeaders } from "@/utils/auth"
import { revalidateTag } from "next/cache"

const baseUrl=getApiBaseUrl()

export async function getProductReviews(productId:string):Promise<ReviewSuccessfulResponseType[]> {
 
    const result=await apiClient<ReviewSuccessfulResponseType>(`/api/v1/products/${productId}/reviews`,{
               next:{
                tags:[API_TAGS.reviews],
                revalidate:3600
                
               },
               
        })
        return result.data
}
export async function createProductReview(productId:string,reviewData:ReviewFormValues):Promise<CreateReviewResponse|null> {
 
    const result= await apiClient<CreateReviewResponse>(`/api/v1/products/${productId}/reviews`,{
           method:"POST",
            body:JSON.stringify(reviewData),
            useAuth:true
        })
    revalidateTag(API_TAGS.reviews,"")
        return result
}
export async function updateProductReview(reviewId:string,reviewData:ReviewFormValues):Promise<CreateReviewResponse|null> {

    const result=await apiClient<CreateReviewResponse>(`/api/v1/reviews/${reviewId}`,{
           method:"PUT",
             body:JSON.stringify(reviewData),
             useAuth:true
        }
        )
        if(result){
            revalidateTag(API_TAGS.reviews,"")
        }
        return result
}

export async function deleteProductReview(reviewId:string):Promise<DeleteProductReviewResponse> {
    try {
        const authHeaders=await getAuthHeaders()
        const response=await fetch(`${baseUrl}/api/v1/reviews/${reviewId}`,{
            method:"DELETE",
            headers:authHeaders
        })
        if(response.ok)
        {                         
            revalidateTag(API_TAGS.reviews,"") 
            return {message:"success"}
            
        }
      
        return {message:"fail"}
    } catch (error) {
        console.log("Delete review error",error);
        return {message:"fail"}
        
    }
}                                                                                                                                                                                                                                                                                                                                                                                  