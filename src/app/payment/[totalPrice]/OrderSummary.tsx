import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { OrderSummaryProps } from '@/types/Payment.types'

export default function OrderSummary({isSubmitting,totalPrice}:OrderSummaryProps) {
  return (
     <div className="lg:col-span-4">
            <Card className="sticky top-28 border-none shadow-lg pt-0 overflow-hidden bg-white">
              <div className="bg-primary p-4 mt-0 text-primary-foreground text-center font-bold">
                Order Summary
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-medium text-foreground">EGP {totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping Fee</span>
                  <span className="text-green-600 font-bold">FREE</span>
                </div>
                <div className="h-px bg-dashed border-t border-dashed my-2" />
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-black text-primary">EGP  {totalPrice}</span>
                </div>

                <Button 
                disabled={isSubmitting}
                  type="submit" 
                  size="lg" 
                  className="w-full cursor-pointer disabled:cursor-not-allowed h-14 text-lg font-bold shadow-lg shadow-primary/20 mt-4 rounded-xl transition-all hover:scale-[1.02]"
                >
                  {isSubmitting ? "Processing Order..." : "Confirm & Pay"}
                  Confirm & Pay
                </Button>

                <p className="text-[10px] text-center text-muted-foreground mt-4 leading-relaxed">
                  By clicking "Confirm & Pay", you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>
  )
}
