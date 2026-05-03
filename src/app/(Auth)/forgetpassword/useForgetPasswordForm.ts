import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { handleForgetPassword } from "./ForgetPassword.actions"
import { ForgetPasswordFormTypes } from "./ForgetPassword.types"
import { useForm } from "react-hook-form"
import { forgetPasswordSchema } from "./ForgetPassword.schema"
import { useRouter } from "next/navigation"

export default function useForgetPasswordForm() {
    const router=useRouter()
     const {control,formState:{errors,isSubmitting},handleSubmit}=useForm<ForgetPasswordFormTypes>({
        mode:"onTouched",
        resolver:zodResolver(forgetPasswordSchema)
     })
     const onSubmit=async(data:ForgetPasswordFormTypes)=>{
         const result=await handleForgetPassword(data) 
         if(result?.statusMsg){
                if(result.statusMsg=="success")
                {
                  toast.success(result.message)
                  localStorage.setItem("email",data.email)
                  router.push("/verifyResetPassword")
                }
                else
                   toast.error(result.message)
         }      else{
          toast.error("Unexpected error")
         } 
     }
  return {
 isSubmitting,
 handleSubmit,
 errors,
 control,
 onSubmit
  }
}
