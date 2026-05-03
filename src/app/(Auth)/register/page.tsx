
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import RegisterForm from "./RegisterForm"
import AuthLayoutWrapper from "../AuthLayoutWrapper"
import { UserPlus } from "lucide-react"

export default function RegisterPage() {
  return (
   
    <AuthLayoutWrapper title="Join Our fresh cart"
     description="Products delivered to your door."
      classNameFooterClasses="justify-center"
      Icon={UserPlus}
      childrenFooter={
        <p className="text-sm">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
        </p>
      }
      >
      <RegisterForm/>
    </AuthLayoutWrapper>
  )
}