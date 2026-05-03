"use client"

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {  LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthButtons() {
     const {data,status}=useSession();
     function handleLogout(){
        signOut({
            callbackUrl:"/login"
        })
     }
      if(status==="loading"){
        return  <Skeleton className="h-10 w-24 rounded-md" />;
      }
      if(data){
        return<>
       <div className="flex items-center gap-3">
        <Button asChild variant="ghost" className="hidden sm:flex items-center gap-2 text-primary hover:bg-primary/10">
          <Link href="/allorders">
            <User className="size-4" />
            <span>My Orders</span>
          </Link>
        </Button>
        
        <Button 
          variant="destructive" 
          onClick={handleLogout}
          className="flex items-center gap-2 font-bold cursor-pointer"
        >
          <LogOut className="size-4" />
          <span>Sign Out</span>
        </Button>
      </div>
        </>
      }
  return (
   <div className="flex items-center gap-2">
      <Button asChild variant="ghost" className="text-primary font-semibold hover:bg-primary/10">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild className="font-bold shadow-lg shadow-primary/20">
        <Link href="/register">Sign up</Link>
      </Button>
    </div>
  )
}
