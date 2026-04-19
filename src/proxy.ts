import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request:NextRequest) {

  const jwt=await getToken({
    req:request,
    secret:process.env.NEXTAUTH_SECRET
  })

  const {pathname}=request.nextUrl

  const authPages = ["/login", "/register", "/forgetpassword", "/resetpassword", "/verifyResetPassword"];
  if(jwt&&authPages.some((page)=>pathname.startsWith(page))){
    return NextResponse.redirect(new URL("/",request.url))
  }
  const isPublicPages=authPages.some((page)=>pathname.startsWith(page)|| pathname=="/")
         
  if(!jwt&&!isPublicPages){
    return NextResponse.redirect(new URL("/login", request.url));
  }

    return NextResponse.next()
  
  
}
export const config = {
  matcher: [
    "/((?!api/auth|api|_next/static|_next/image|favicon.ico).*)",
  ],
};