"use server"

import { RegisterFormType, RegisterResponseType } from "./Register.types";
import { apiClient } from "@/utils/apiClient";

export async function registerAction(data:RegisterFormType):Promise<RegisterResponseType|undefined>{
    

    return await apiClient<RegisterResponseType>(`/api/v1/auth/signup`,{
        method:"POST",
        body:JSON.stringify(data),
        useAuth:false
    }
       )
} 