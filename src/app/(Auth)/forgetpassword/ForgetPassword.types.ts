import * as zod from "zod"
import { forgetPasswordSchema } from "./ForgetPassword.schema"


export type ForgetPasswordFormTypes=zod.infer<typeof forgetPasswordSchema>

export type ForgetPasswordResponseType={
    statusMsg: 'success'|"fail", 
     message: string

       }
