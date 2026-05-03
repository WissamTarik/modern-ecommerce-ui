import { OrderCardPriceProps } from '@/types/Order.types'
import { Calendar, Clock } from 'lucide-react'

export default function OrderCardPrice({createdAt,isDelivered,totalOrderPrice}:OrderCardPriceProps) {
  return (
     <div className="bg-muted/30 p-4 rounded-lg space-y-3 h-fit">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {new Date(createdAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      {isDelivered ? "Delivered" : "Processing"}
                    </div>
                    <div className="pt-2 border-t mt-2 flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="text-lg font-black text-primary">EGP {totalOrderPrice}</span>
                    </div>
                  </div>
  )
}
