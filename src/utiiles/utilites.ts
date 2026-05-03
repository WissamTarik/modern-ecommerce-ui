"use server"

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken():Promise<string| undefined>{
    const cookie=await cookies();
    const token=cookie.get("next-auth.session-token")?.value;
    if(!token) return;
    const decodedToken=await decode({
        secret:process.env.NEXTAUTH_SECRET||"",
        token,

    });
    return decodedToken?.token
}