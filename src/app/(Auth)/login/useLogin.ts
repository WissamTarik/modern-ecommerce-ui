import { toast } from "sonner";
import { LoginFormTypes } from "./login.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginSchema } from "./Login.schema";
import { signIn } from "next-auth/react";

export default function useLogin() {
     const router=useRouter()
        const {control,formState:{errors,isSubmitting},handleSubmit}=useForm<LoginFormTypes>({
            mode:"onTouched",
            defaultValues:{
                email:"",
                password:""
            },
            resolver:zodResolver(loginSchema)
        })
       const onSubmit=async (data:LoginFormTypes)=>{
       const response= await signIn("credentials",{
          ...data,
          redirect:false
         })
         console.log("Response",response);
         
         if(response?.ok){
          toast.success("Welcome back")
        //   router.push("/")
        //   router.refresh()
        window.location.href ='/'         }
        
         else{
          toast.error(response?.error|| "Invalid login😢 try again")
         }
         console.log("Auth response",response);
         
        }
  return {
         control,
         errors,
         isSubmitting,
         onSubmit,
         handleSubmit
  }
}
