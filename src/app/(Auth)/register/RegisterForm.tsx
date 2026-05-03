"use client"
//www.ahmed116@gmail.com
//Ahmed123@
import useRegister from './useRegister';
import FormInput from '@/app/_components/FormInput/FormInput';
import FormButton from '@/app/_components/FormButton/FormButton';

const RegisterForm = () => {
const {
handleSubmit,
onSubmit,
control,
errors,
isSubmitting
  }=useRegister()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <FormInput name="name" label="Full Name" className="md:col-span-2" placeholder='ex:AhmedAli' control={control} error={errors.name} />
  <FormInput name="email" label="Email" className="md:col-span-2" placeholder='ex@ex.com' control={control} error={errors.email} type='email' />
  <FormInput name="password" label="Password" className="md:col-span-1"  control={control} error={errors.password} type='password' />
  <FormInput name="rePassword" label="Confirm Password" className="md:col-span-1" type='password' error={errors.rePassword} control={control}  />
  <FormInput name="phone" label="Phone number" className="md:col-span-2" type='tel' error={errors.phone} control={control}  />
  <FormButton className="md:col-span-2" isLoading={isSubmitting} loadingText='Creating...'>Create Account</FormButton>
</form>
  )
}

export default RegisterForm