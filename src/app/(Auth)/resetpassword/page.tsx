import { LockKeyhole } from 'lucide-react'
import PasswordRequirement from './PasswordRequirement'
import ResetPasswordForm from './ResetPasswordForm'
import AuthLayoutWrapper from '../AuthLayoutWrapper'

export default function ResetPassword() {
  return (
  
    <AuthLayoutWrapper Icon={LockKeyhole} title='Set New Password'>
      <ResetPasswordForm/>
      <PasswordRequirement/>
    </AuthLayoutWrapper>
  )
}
