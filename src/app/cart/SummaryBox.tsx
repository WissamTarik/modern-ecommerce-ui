import { ArrowRight } from 'lucide-react'
import ApplyCouponToCartBtn from '../_components/ApplyCouponToCartBtn/ApplyCouponToCartBtn'
import { Card, CardContent } from '@/components/ui/card'
import { SummaryBoxType } from '@/types/Cart.types'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SummaryBox({totalCartPrice}:SummaryBoxType ) {
  return <>
    <div className="lg:col-span-1">
          <Card className="sticky top-24 border-none shadow-md bg-white">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">EGP {totalCartPrice}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary font-extrabold">EGP {totalCartPrice}</span>
                </div>
            
              <ApplyCouponToCartBtn/>

              <Link href={`/payment/${totalCartPrice}`}  className= "cursor-pointer bg-primary flex justify-center items-center text-white rounded-2xl w-full mt-8 h-14 text-lg font-bold gap-2 shadow-lg shadow-primary/20">
                Checkout
                <ArrowRight size={20} />
              </Link>
              </div>

            </CardContent>
          </Card>
        </div>
  </>
}
