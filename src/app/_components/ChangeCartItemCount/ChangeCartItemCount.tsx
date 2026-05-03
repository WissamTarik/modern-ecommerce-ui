"use client"
import { Button } from "@/components/ui/button";
import { ChangeCartItemCountProps } from "./ChangeCartItemCount.types";
import { Loader2 } from "lucide-react";
import useChangeCartItemCount from "./useChangeCartItemCount";

export default function ChangeCartItemCount({children,count,productId}:ChangeCartItemCountProps) {

const {isLoading,handleChangeItemCount}=useChangeCartItemCount(productId,count)
  return (
    <Button
      disabled={count<1||isLoading}
        variant="ghost" size="icon" className={`h-8 w-8 rounded-none cursor-pointer   ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
            `}  onClick={handleChangeItemCount}>
       
        {isLoading?<>
            <Loader2 size={15} className="animate-spin" />
            </>:
            <>
            {children}
            </>
        
        }
    </Button>
  )
}
