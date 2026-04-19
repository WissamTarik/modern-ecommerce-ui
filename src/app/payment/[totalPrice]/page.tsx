
import { ChevronRight,  ShoppingBag } from 'lucide-react'
import PaymentForm from './PaymentForm'
import { PaymentParams } from '@/types/Payment.types'
import { getUserCart } from '@/Services/Cart.services';
export const metadata={
  title:"Payment"
}
export  default async function payment({params}:PaymentParams) {
  const {totalPrice}=await params;
   const result=await getUserCart()
   let cardId="";
   if(result !=null){
           if(result.cartId){
             cardId=result.cartId as string
           }
   }
  return (
    <>
    <div className="min-h-screen bg-muted/30 pb-20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        
        {/* Breadcrumbs - Responsive Hide */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span className="hover:text-primary cursor-pointer">Cart</span>
          <ChevronRight size={14} />
          <span className="text-foreground font-semibold">Checkout</span>
          <ChevronRight size={14} />
          <span>Confirmation</span>
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold mb-8 flex items-center gap-2">
          <ShoppingBag className="text-primary" />
          Complete Your Order
        </h1>

      <PaymentForm totalPrice={totalPrice} cartId={cardId}/>
      </div>
    </div>
    </>
  )
}
