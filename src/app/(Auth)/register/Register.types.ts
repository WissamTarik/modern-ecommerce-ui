
import * as zod from "zod"
import { RegisterSchema } from "./Register.schema"

export type RegisterFormType=zod.infer<typeof RegisterSchema>

 type RegisterSuccessResponse={
    message:"success",
    user:{
        name:string,
        email:string,
        role:string
    },
    token:string
}
 type RegisterFailedResponse={
    message:"fail",
    statusMsg:string
}
export type RegisterResponseType=RegisterSuccessResponse|RegisterFailedResponse