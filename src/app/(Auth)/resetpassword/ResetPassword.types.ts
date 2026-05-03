import * as zod from "zod"
import { ResetPasswordSchema } from "./ResetPassword.schema"

export type ResetPasswordFormType=zod.infer<typeof ResetPasswordSchema> 
export type ResetPasswordRequest={
    email:string,
    newPassword:string
}
