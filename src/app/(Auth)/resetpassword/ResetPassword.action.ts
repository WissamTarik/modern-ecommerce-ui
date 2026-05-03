"use server"

import { ResetPasswordRequest } from "./ResetPassword.types";
import { apiClient } from "@/utils/apiClient";
export async function ResetPasswordAction(data:ResetPasswordRequest):Promise<boolean>{
  
    return await apiClient<boolean>(`/api/v1/auth/resetPassword`,{
        method:"PUT",
        body:JSON.stringify(data),
       
       })
}