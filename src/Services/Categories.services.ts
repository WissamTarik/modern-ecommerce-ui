import {  CategoryBrandsTypeResponse } from "@/types/Product.types";
import { apiClient } from "@/utils/apiClient";

export async function getAllCategories():Promise<CategoryBrandsTypeResponse|null>{
 
    return apiClient<CategoryBrandsTypeResponse>("/api/v1/categories")
}