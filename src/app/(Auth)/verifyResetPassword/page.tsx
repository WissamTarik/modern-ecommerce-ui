import { ShieldCheck } from 'lucide-react'
import VerifyResetPasswordForm from './VerifyResetPasswordForm'
import AuthLayoutWrapper from '../AuthLayoutWrapper'


export default function VerifyResetPassword() {
  return (
  
    <AuthLayoutWrapper Icon={ShieldCheck}
    title='Verify Your Account'
    description='Enter the 6-digit code sent to your email.'
    
    >
      <VerifyResetPasswordForm/>
    </AuthLayoutWrapper>
  )
}
