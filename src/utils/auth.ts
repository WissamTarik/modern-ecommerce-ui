"use server"

import { getUserToken } from "@/utiiles/utilites"

export async function getAuthHeaders(){
    let token=await getUserToken()
    
  if (!token) {
    token=""
  }
 return{
    token,
    "Content-Type":"application/json"
 }
}