
import Link from "next/link"
import { Zap } from "lucide-react"
import LoginForm from "./LoginForm"
import AuthLayoutWrapper from "../AuthLayoutWrapper"
export default function LoginPage() {
 
  return (

    <AuthLayoutWrapper Icon={Zap} 
    title="Welcome Back" 
    description="Login to access your fresh groceries" 
    classNameFooterClasses="flex flex-col gap-4 border-t border-muted pt-6"
    childrenFooter={ <p className="text-sm text-muted-foreground text-center">
            New to Fresh cart?{" "}
            <Link href="/register" className="font-bold text-primary hover:underline">
              Create an account
            </Link>
          </p>} 
    >
    
      <LoginForm/>
    </AuthLayoutWrapper>
  )
}