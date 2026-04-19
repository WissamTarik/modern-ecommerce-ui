"use client"
import { Button } from '@/components/ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import useClearCartBtn from './useClearCartBtn'
export default function ClearCartBtn() {
      const {isLoading,handleDeleteUserCart}=useClearCartBtn()
  return (
   
        <Button disabled={isLoading}
        onClick={handleDeleteUserCart}
          variant="outline" 
          className={`text-destructive hover:bg-destructive/10 cursor-pointer border-destructive/20 gap-2 font-semibold *:
             ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
            `}
       
        >
          <Trash2 size={18} />
          {isLoading?<>
            <Loader2 size={15} className="animate-spin" />
               clearing....
          </>
          :"Clear Cart"}
        </Button>
  )
}
