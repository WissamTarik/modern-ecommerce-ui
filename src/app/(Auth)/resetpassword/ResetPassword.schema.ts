import { confirmPassword, emailSchema, passwordSchema, withConfirmPassword } from "@/Validation/auth.schema"
import * as zod from "zod"

export const ResetPasswordSchema=withConfirmPassword(
    zod.object({
   email:emailSchema,
   newPassword:passwordSchema,
    confirmPassword:confirmPassword,                      

}),
"newPassword",
"confirmPassword"
)