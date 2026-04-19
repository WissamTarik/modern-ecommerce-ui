"use client"
import FormInput from "@/app/_components/FormInput/FormInput"

import FormButton from "@/app/_components/FormButton/FormButton"

import useForgetPasswordForm from "./useForgetPasswordForm"

export default function ForgetPasswordForm() {
  const {
 isSubmitting,
 handleSubmit,
 errors,
 control,
 onSubmit
  }=useForgetPasswordForm()
  return (
    <form  className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <div className="relative">
              <FormInput control={control} label="Email Address" placeholder="ex:ex@exa.com" name="email" error={errors.email} type="email"/>
              </div>
           
            </div>

           <FormButton isLoading={isSubmitting} loadingText='sending Link...'   >
            Send Reset Link
          </FormButton>
          </form>
  )
}
