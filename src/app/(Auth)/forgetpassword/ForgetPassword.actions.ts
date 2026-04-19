"use server"

import { ForgetPasswordFormTypes, ForgetPasswordResponseType } from "./ForgetPassword.types"
import { apiClient } from "@/utils/apiClient"


export async function handleForgetPassword(data:ForgetPasswordFormTypes):Promise<ForgetPasswordResponseType|null>{
          //  try {
          //   const response=await fetch(`${baseURL}/api/v1/auth/forgotPasswords`,{
          //       method:"POST",
          //       headers:{
          //           "Content-type":"application/json"
          //       },
          //       body:JSON.stringify(data)
          //   })
          //   const result=await response.json()
          //   return result
          //  } catch (error) {
          //    console.log("Forget password error",error);
          //    return null;
             
          //  }

          return apiClient<ForgetPasswordResponseType>(`/api/v1/auth/forgotPasswords`,{
                method:"POST",
               
                body:JSON.stringify(data)
          }
              )

}