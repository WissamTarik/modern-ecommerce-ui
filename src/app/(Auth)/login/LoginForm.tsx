"use client"
import FormInput from '@/app/_components/FormInput/FormInput'
import Link from 'next/link'
import FormButton from '@/app/_components/FormButton/FormButton'
import useLogin from './useLogin'
//www.ahmedAliC14@gmail.com
export default function LoginForm() {
 
  const {
         control,
         errors,
         isSubmitting,
         onSubmit,
         handleSubmit
  }=useLogin()
  return (
      <div className="grid gap-4">
          
           <form action="" onSubmit={handleSubmit(onSubmit)}>

           <div className='mb-3'>

              <FormInput
            name='email'
            type='email'
            control={control}
            className="md:col-span-2"
             label='Email Address'
             error={errors.email}
             placeholder='ex@example.com'
            
            />
           </div>
                <FormInput
                 label='Password'
                 name='password'
                 control={control}
                 className="md:col-span-2 " 
                  error={errors.password}
                  type='password'
                />
                <Link href="/forgetpassword" className="text-sm font-bold mt-3 block  text-primary hover:opacity-80 ">
                  Forgot?
                </Link>
                   <FormButton isLoading={isSubmitting} loadingText='Signing In...' className='mt-3'  >
            Sign In
          </FormButton>
           </form>
              
          </div>
  )
}
