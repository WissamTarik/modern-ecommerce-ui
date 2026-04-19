import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Package } from 'lucide-react'
import Link from 'next/link'
export const metadata={
  title:"Order success"
}
export default async function OrderSuccess({params}:{params:{orderId:string}}) {
    const {orderId}=await params
  return (
   <div className="container mx-auto px-4 py-20 text-center">
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle2 size={64} className="text-green-600 animate-bounce" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
      <p className="text-muted-foreground mb-6">
        Thank you for your purchase. Your order <span className="font-bold text-foreground">#{orderId}</span> is being processed.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg" className="gap-2">
          <Link href="/allorders">
            <Package size={20} /> View My Orders
          </Link>
        </Button>
        
        <Button variant="outline" size="lg" asChild>
          <Link href="/">
            Continue Shopping <ArrowRight size={18} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
