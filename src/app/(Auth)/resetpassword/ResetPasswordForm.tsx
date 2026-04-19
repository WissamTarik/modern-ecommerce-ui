"use client"
import FormButton from "@/app/_components/FormButton/FormButton"
import FormInput from "@/app/_components/FormInput/FormInput"
import useResetPasswordForm from "./useResetPasswordForm"
export default function ResetPasswordForm() {
 const {

    errors,
    isSubmitting,
    handleSubmit,
    control,
    onSubmit
}=useResetPasswordForm()
  return (
      <form  className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="space-y-2">
            <FormInput 
                    control={control} 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    readOnly={true} 
                    error={errors.email}
                             
             />
            </div>
            <div className="space-y-2">
             <FormInput  control={control} label="new Password" name="newPassword" type="password" error={errors.newPassword} 
             
             />
            </div>

            <div className="space-y-2">
              <FormInput control={control} label="Confirm password" type="password" error={errors.confirmPassword} name="confirmPassword" />
               
            </div>

         
            <FormButton loadingText="Update password"   isLoading={isSubmitting}  >
              Reset 
            </FormButton>
          </form>
  )
}
