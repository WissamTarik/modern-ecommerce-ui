import { authBaseSchema } from "@/Validation/auth.schema"
export const forgetPasswordSchema=authBaseSchema.pick({
    email:true,
   
})
