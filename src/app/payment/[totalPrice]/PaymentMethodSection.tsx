import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CreditCard, Truck } from 'lucide-react'
import React, { Dispatch, SetStateAction } from 'react'

export default function PaymentMethodSection({setPaymentMethod}:{setPaymentMethod:Dispatch<SetStateAction<string>>}) {
  return (
    <Card className="border-none shadow-sm">
              <CardHeader className="border-b bg-white rounded-t-xl">
                <CardTitle className="text-xl flex items-center gap-2">
                  <CreditCard className="text-primary size-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-white rounded-b-xl">
                <RadioGroup 
                  defaultValue="cash" 
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="relative">
                    <RadioGroupItem value="cash" id="cash" className="peer sr-only" />
                    <Label
                      htmlFor="cash"
                      className="flex items-center gap-4 rounded-xl border-2 border-muted p-4 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted/50"
                    >
                      <div className="bg-primary/10 p-2 rounded-full text-primary">
                        <Truck size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold">Cash on Delivery</span>
                        <span className="text-xs text-muted-foreground">Pay when you receive</span>
                      </div>
                    </Label>
                  </div>

                  <div className="relative">
                    <RadioGroupItem value="visa" id="visa" className="peer sr-only"  />
                    <Label
                      htmlFor="visa"
                      className="flex items-center gap-4 rounded-xl border-2 border-muted p-4 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-muted/50"
                    >
                      <div className="bg-blue-500/10 p-2 rounded-full text-blue-600">
                        <CreditCard size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold">Card Payment</span>
                        <span className="text-xs text-muted-foreground">Visa, MasterCard, etc.</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
  )
}
