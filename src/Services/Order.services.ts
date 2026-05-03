"use server"

import { API_TAGS } from "@/Constants/tags"
import { OrderDataFailedResponse, OrderDataSuccessfulResponse } from "@/types/Order.types"
import { apiClient } from "@/utils/apiClient"

export async function getAllUserOrders(userId:string):Promise<OrderDataSuccessfulResponse[]|OrderDataFailedResponse|null>{
 
    return apiClient<OrderDataSuccessfulResponse[]|OrderDataFailedResponse>(`/api/v1/orders/user/${userId}`,{
        
          next:{
           tags:[API_TAGS.orders],
           revalidate:3600*24
          },
          useAuth:true
    })
}