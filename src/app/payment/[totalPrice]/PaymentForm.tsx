"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {   MapPin } from 'lucide-react'
import FormInput from '@/app/_components/FormInput/FormInput'
import { PaymentFormParams } from '@/types/Payment.types'
import OrderSummary from './OrderSummary'
import PaymentMethodSection from './PaymentMethodSection'
import usePaymentForm from './usePaymentForm'

export default function PaymentForm({totalPrice,cartId}:PaymentFormParams) {
 const {
    onSubmit,
    control,
    errors,
    isSubmitting,
    handleSubmit,
    setPaymentMethod
  

  }=usePaymentForm(cartId)
  return (
    <>
     
        <form  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" onSubmit={handleSubmit(onSubmit)}>
          
          {/* Left Side: Forms (8 Columns on Large Screens) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Shipping Address Section */}
            <Card className="border-none shadow-sm">
              <CardHeader className="border-b bg-white rounded-t-xl">
                <CardTitle className="text-xl flex items-center gap-2">
                  <MapPin className="text-primary size-5" />
                  Shipping Address
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-b-xl">
                <div className="space-y-4 mb-3">
                 <FormInput control={control} label='City' error={errors.city} 
                 className="pl-10 h-11"
                 placeholder='Ex:Nasr-city' name='city' />
                </div>

                <div className="space-y-4 mb-3">
                  <div className="relative">
                 
                  <FormInput control={control}  
                  className='pl-9 h-11'
                  label='Phone number' error={errors.phone}  type='tel' placeholder='0110+8' name='phone' />

                  </div>
                </div>
                <div className="space-y-4 my-3">
                  <div className="relative">
                 
                  <FormInput control={control}  
                  className='pl-9 h-11'
                  label='Postal code' error={errors.postalCode}    placeholder='123645' name='postalCode' />

                  </div>
                </div>

                <div className="space-y-5 mt-3 md:mt-1 md:col-span-2">
                  <FormInput name='details' label='Full Address Details' error={errors.details} control={control} className='h-11 pl-9' placeholder='123-street-FloorNo:99'/>
                
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Section */}
           
            <PaymentMethodSection setPaymentMethod={setPaymentMethod}/>
          </div>

          {/* Right Side: Order Summary (4 Columns on Large Screens) */}
         <OrderSummary isSubmitting={isSubmitting} totalPrice={totalPrice} />

        </form>
    </>
  )
}
