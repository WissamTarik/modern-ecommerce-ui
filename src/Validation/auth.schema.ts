import * as zod from "zod";
export const passwordSchema = zod
  .string()
  .min(1, "Please enter a valid password")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    "Password must be at least 8 characters and include uppercase, number, and special character",
  );
export const emailSchema = zod.email("Please enter a valid email address");
export const confirmPassword = zod
  .string()
  .min(1, "Please confirm your password");

export const withConfirmPassword=<T extends zod.ZodRawShape>(
    schema:zod.ZodObject<T>,
     passwordField: keyof T = "password" as keyof T,
    confirmField: keyof T = "confirmPassword" as keyof T 

)=>{
     return schema.refine((data:any)=>data[passwordField]==data[confirmField],{
         message: "Password doesn't match confirm password",
          path: [confirmField as string],
     })
}

export const authBaseSchema = zod.object({
  email: emailSchema,
  password: passwordSchema,
});
