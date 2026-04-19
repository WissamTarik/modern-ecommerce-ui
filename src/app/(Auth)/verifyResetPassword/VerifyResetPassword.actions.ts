"use server"

import { getApiBaseUrl } from "@/utils/api";
import { VerifyResetPasswordFailedResponse, VerifyResetPasswordSuccessfulResponse, VerifyResetPasswordType } from "./VerifyResetPassword.types";
import { apiClient } from "@/utils/apiClient";
const baseURL=getApiBaseUrl()
export async function handleVerifyOTP(data:VerifyResetPasswordType):Promise<VerifyResetPasswordSuccessfulResponse|VerifyResetPasswordFailedResponse|null>{

    
    return apiClient<VerifyResetPasswordSuccessfulResponse|VerifyResetPasswordFailedResponse>(`/api/v1/auth/verifyResetCode`,{
            method:"POST",
          
            body:JSON.stringify(data)
        })
}