import {  CategoryBrandsTypeResponse } from "@/types/Product.types";
import { apiClient } from "@/utils/apiClient";

export async function getAllBrands():Promise<CategoryBrandsTypeResponse|null>{

    return apiClient<CategoryBrandsTypeResponse>("/api/v1/brands")
}