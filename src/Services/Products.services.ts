import { ProductResponseType } from "@/types/Product.types";
import { apiClient } from "@/utils/apiClient";
export async function getAllProducts(queryString:string):Promise<ProductResponseType[]>{
    const result=await apiClient<ProductResponseType>(`/api/v1/products${queryString}`,{
        cache:"force-cache"
    })
    return result.data
}

export async function getSpecificProducts(id:string):Promise<ProductResponseType>{
    const result=await apiClient<ProductResponseType>(`/api/v1/products/${id}`,{cache:"force-cache"})
    console.log(result);
    
    return result.data
}
