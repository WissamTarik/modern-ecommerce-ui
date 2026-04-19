import * as zod from "zod"
import { loginSchema } from "./Login.schema"

 export type LoginSuccessResponse={
    message:"success",
    user:{
        name:string,
        email:string,
        role:string
    },
    token:string
}

export type LoginFormTypes=zod.infer<typeof loginSchema>