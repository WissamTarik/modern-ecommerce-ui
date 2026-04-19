import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { OrderDataSuccessfulResponse } from '@/types/Order.types'
import OrderCardItem from './OrderCardItem'
import { ProductTypes } from '@/types/Cart.types'
import OrderCardPrice from './OrderCardPrice'

export default function OrderCard({_id,cartItems,createdAt,isDelivered,isPaid,paymentMethodType,totalOrderPrice}:OrderDataSuccessfulResponse) {
  return (
     <Card  className="overflow-hidden border-none shadow-md pt-0!">
              <CardHeader className="bg-muted/50 border-b flex flex-row items-center justify-between flex-wrap  gap-4">
                <div className="space-y-1 pt-4">
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Order ID</p>
                  <CardTitle className="text-sm md:text-base">#{_id}</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Badge variant={isPaid ? "success" : "destructive"}>
                    {isPaid ? "Paid" : "Unpaid"}
                  </Badge>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    {paymentMethodType.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4">
                    {cartItems.map((item: ProductTypes) => (
                      <OrderCardItem {...item} key={item._id}/>
                    ))}
                  </div>

                 <OrderCardPrice createdAt={createdAt} isDelivered={isDelivered} totalOrderPrice={totalOrderPrice}/>
                </div>
              </CardContent>
            </Card>
  )
}
