
import { Button } from "@/components/ui/button";
import { KeyRound, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ForgetPasswordForm from "./ForgetPasswordForm";
import AuthLayoutWrapper from "../AuthLayoutWrapper";
export default function ForgetPasswordPage() {

  return (
  
    <AuthLayoutWrapper
    Icon={KeyRound}
     description="No worries! Enter your email and we'll send you instructions to reset your password." 
     title="Forgot Password?"
     >
      <ForgetPasswordForm/>
       <div className="text-center mt-3">
          <Button variant="link" asChild className="text-muted-foreground hover:text-primary">
            <Link href="/login" className="flex items-center gap-2 text-sm">
              <ArrowLeft size={16} />
        Back to Login
            </Link>
          </Button>
          </div>
    </AuthLayoutWrapper>
  );
}