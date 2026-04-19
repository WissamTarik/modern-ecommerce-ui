"use server"

import { getApiBaseUrl } from "@/utils/api"
import { LoginFormTypes } from "./login.types"

const baseUrl=getApiBaseUrl()
export async function LoginAction(data:LoginFormTypes){
  try {
     const response=await fetch(`${baseUrl}/api/v1/auth/signin`)
   const result =await response.json() 
   console.log("Login result",result);
   
   if(result.status=="success"){
     return result
   }
   else{
    return null
   }
  } catch (error) {
       console.log("Login Error",error);
       
  }
}