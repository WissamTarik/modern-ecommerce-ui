import { authBaseSchema, confirmPassword, withConfirmPassword } from "@/Validation/auth.schema"
import * as zod from "zod"

export const RegisterSchema=withConfirmPassword(
  authBaseSchema.extend({
    name:zod.string()
         .min(1,"Please enter your full name")
         .min(3,"Name should be at least 3 characters long")
         .max(15,"Name cannot exceed 15 characters"),
    rePassword:confirmPassword,   
    phone:zod.string()
              .min(1,"Phone number is required")
              .regex(/^01[1250][0-9]{8}$/, "Please enter a valid Egyptian phone number")               
            
  }),
  "password",
  "rePassword"
)


