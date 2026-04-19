import * as zod from "zod"

export const VerifyResetPasswordSchema=zod.object({
    resetCode: zod.string().length(6, "Reset code must be exactly 6 digits"),
})
