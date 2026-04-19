import { DefaultSession } from "next-auth"

declare module "next-auth"{
    interface Session{
         user:{
            id?:string
            name?:string,
            email?:string,
            role?:string,
            token?:string
         }& DefaultSession["user"]
    }
    interface User{
        id?:string,
        message?:string,
        token?:string
        role?:string
    }
}
declare module "next-auth/jwt"{
    interface JWT{
        id?:string,
        token?:string,
        role?:string
    }
}