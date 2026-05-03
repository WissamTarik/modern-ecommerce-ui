import { Button } from "@/components/ui/button";
import { FormButtonProps } from "./FormButton.types";
import { cn } from "@/lib/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function FormButton({loadingText,isLoading,children,className,...props}:FormButtonProps) {
  return (
    <Button
     disabled={isLoading}
     type="submit"
     className={cn(
        "w-full h-12 text-lg font-bold cursor-pointer !disabled:cursor-not-allowed shadow-lg shadow-primary/20 transition-all active:scale-95",
        className
      )}
      {...props}

    >
       {
        isLoading?
<div className="flex items-center gap-2">
    <AiOutlineLoading3Quarters className="animate-spin size-5"/>
    {loadingText&&<span>{loadingText}</span>}
    </div>  :children
       }

    </Button>
  )
}
