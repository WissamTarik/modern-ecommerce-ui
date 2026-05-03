"use client"
import FormButton from "@/app/_components/FormButton/FormButton"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"
import { ArrowRight } from "lucide-react"
import useVerifyResetPasswordForm from "./useVerifyResetPasswordForm"

export default function VerifyResetPasswordForm() {
  const {
    errors,
    isSubmitting,
    onSubmit,
    handleSubmit,
    setValue
  }=useVerifyResetPasswordForm()
  return (
      <form  className="space-y-8 flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
            
            {/* Shadcn OTP Component */}
            <div className="space-y-4 w-full flex flex-col items-center">
              <InputOTP 
                maxLength={6} 
                onChange={(value) => setValue("resetCode", value)} 
                disabled={isSubmitting}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                  <InputOTPSlot index={1} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                  <InputOTPSlot index={2} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                  <InputOTPSlot index={4} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                  <InputOTPSlot index={5} className="h-12 w-10 md:h-14 md:w-12 text-lg border-2" />
                </InputOTPGroup>
              </InputOTP>

              {errors.resetCode && (
                <p className="text-destructive text-sm font-medium italic">
                  {errors.resetCode.message}
                </p>
              )}
            </div>

       <FormButton loadingText="Verifying..." isLoading={isSubmitting}>
             Verify & Continue <ArrowRight className="ml-2 size-5" />
        </FormButton>
          
          </form>
  )
}
