import { apiClient } from "@/utils/apiClient";
import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const nextAuthConfig:NextAuthOptions={

    providers:[
        CredentialsProvider({
            name:"Fresh Cart",
            credentials:{
                email:{type:"email",label:"Email Address"},
                password:{type:"password", label:"Password"}
            },
          async  authorize(credentials, req) {
       
          try {
    const result = await apiClient<any>(`/api/v1/auth/signin`, {
      method: "POST",
      body: JSON.stringify(credentials),
      useAuth: false // مهم جداً هنا
    });

    if (result && result.message === "success" && result.token) {
      const decodedToken: any = jwtDecode(result.token);
      
      return {
        id: decodedToken.id || result.user._id, // تأكد من وجود ID
        ...result.user,
        token: result.token
      };
    }
    
    return null; 
  } catch (error) {
    console.error("Auth Error:", error);
    return null;
  }
              
            },
            
        }),
        
    ],
    callbacks:{
        async jwt({token,user}){
            // console.log("JWT user",user);
            
            if(user){
                
                token.token=user.token
                token.role=user.role
                token.id=user.id
                 
            }
            return token
        },
        async session({session,token}) {
            if(session.user){
               session.user.token=token.token
               session.user.role=token.role
               session.user.id=token.id as string
            }
            return session
            
        },
    },
    session:{
        strategy:"jwt",
        maxAge:60*60*24
    },
    pages:{
        signIn:"/login"
    },
    secret:process.env.NEXTAUTH_SECRET
}