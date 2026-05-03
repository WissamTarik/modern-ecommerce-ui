import { toast } from "sonner"
import { registerAction } from "./Register.action"
import { RegisterFormType } from "./Register.types"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "./Register.schema"

export default function useRegister() {
      const router=useRouter()
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterFormType>({
    mode: "onTouched",
    resolver: zodResolver(RegisterSchema),
    defaultValues: { name: "", email: "", password: "", rePassword: "", phone: "" }
  })

  const onSubmit = async (data: RegisterFormType) => {
    console.log("Form Submitted:", data)
  try {
    const result= await  registerAction(data)
    if(!result) return;
  if(result.message==="success"){
        toast.success("Account created successfully",{
            description: `Welcome to fresh cart, ${result.user.name}`,
        })
        router.replace("/login")
  }else{
    toast.error("Registration failed", {
        description: result.message || "Something went wrong",
      });
  }
  } catch (error) {
    toast.error("Network Error", {
      description: "Unable to reach the server.",
    });
  }
  }
  return {
handleSubmit,
onSubmit,
control,
errors,
isSubmitting
  }
}
