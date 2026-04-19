import * as zod from "zod"
import { VerifyResetPasswordSchema } from "./VerifyResetPassword.schema"
export type VerifyResetPasswordType=zod.infer<typeof VerifyResetPasswordSchema>

export type VerifyResetPasswordSuccessfulResponse={ status: 'Success' }
export type VerifyResetPasswordFailedResponse={ 
         statusMsg:"fail",
         message:string

        }