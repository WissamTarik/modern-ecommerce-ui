import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { toast } from "sonner";
import { ResetPasswordSchema } from "./ResetPassword.schema";
import { ResetPasswordFormType } from "./ResetPassword.types";
import { ResetPasswordAction } from "./ResetPassword.action";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function useResetPasswordForm() {
     const router=useRouter()
        const {control,formState:{errors,isSubmitting},handleSubmit,setValue}=useForm<ResetPasswordFormType>({
            mode:"onTouched",
            defaultValues:{
                email:"",
                newPassword:"",
                confirmPassword:""
            },
            resolver:zodResolver(ResetPasswordSchema)
        })
         const onSubmit= async (data:ResetPasswordFormType)=>{
             const request={
               email:data.email,
               newPassword:data.newPassword
             }
           const result=  await ResetPasswordAction(request);
           if(result){
            toast.success('Password is reset successfully')
            localStorage.removeItem("email")
            router.push("/login")
           }else{
            toast.error("Failed to reset password")
           }
         }
         useEffect(() => {
           const email=localStorage.getItem("email")
              if(email){
                setValue("email",email)
              }
         }, [setValue])
         
  return {

    errors,
    isSubmitting,
    handleSubmit,
    control,
    onSubmit
}
}
