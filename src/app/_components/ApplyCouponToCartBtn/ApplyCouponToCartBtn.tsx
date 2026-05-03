
"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, TicketPercent } from 'lucide-react'
import useApplyCouponToCartBtn from './useApplyCouponToCartBtn'

export default function ApplyCouponToCartBtn() {

const {
    isLoading,
    inputRef,
    handleApplyCoupon
  }=useApplyCouponToCartBtn()
  return (
    <>
     <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-dashed border-primary/20">
      <p className="text-sm font-semibold mb-3 flex items-center gap-2">
        <TicketPercent size={18} className="text-primary" />
        Have a Promo Code?
      </p>
      <div className="flex gap-2">
        <Input 
          placeholder="Enter code (e.g. SAVE20)" 
          className="h-10 bg-background focus:border-primary/50! focus:outline-none "
      
          disabled={isLoading}
          ref={inputRef}
        />
        <Button 

          className={`${isLoading?"cursor-not-allowed opacity-50":"cursor-pointer opacity-100"} h-10 px-6 font-bold `}
          onClick={handleApplyCoupon}
          disabled={isLoading}
        >
          {isLoading ? <Loader2 size={16} className="animate-spin" /> : "Apply"}
        </Button>
      </div>
    </div>
    
    </>
  )
}
