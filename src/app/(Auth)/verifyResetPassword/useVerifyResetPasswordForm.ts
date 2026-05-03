import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { VerifyResetPasswordType } from "./VerifyResetPassword.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { VerifyResetPasswordSchema } from "./VerifyResetPassword.schema"
import { handleVerifyOTP } from "./VerifyResetPassword.actions"
import { toast } from "sonner"

export default function useVerifyResetPasswordForm() {
      const router=useRouter()
    const {setValue,formState:{errors,isSubmitting},handleSubmit}=useForm<VerifyResetPasswordType>({
        resolver:zodResolver(VerifyResetPasswordSchema)

    })
    const onSubmit= async (data:VerifyResetPasswordType)=>{
        const result= await handleVerifyOTP(data)
        if(result){
            if("status" in result){
                toast.success("OTP is correct")
               router.push("/resetpassword")
            }else{
                toast.error(result?.message||"Invalid Code")
            }
        }else{
            toast.error("Unexpected error")
        }
    }
  return {
    errors,
    isSubmitting,
    onSubmit,
    handleSubmit,
    setValue
  }
}
