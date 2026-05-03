import { ShippingAddressPaymentFormType } from "@/app/payment/[totalPrice]/ShippingAddress.types"
import { ProductTypes } from "./Cart.types"

 
  export type UserDetails={
    id:string,
    name:string,
    email:string,
    pricing:OrderPricing
  }
export type OrderPricing={
    cartPrice:number,
   taxPrice: number,
    shippingPrice: number,
    totalOrderPrice: number ,
}
export type OrderDataFailedResponse={
     statusMsg:"fail",
     message:string

}

export type OrderDataSuccessfulResponse={
    shippingAddress:ShippingAddressPaymentFormType,
     taxPrice: number,
    shippingPrice: number,
    totalOrderPrice: number,
    paymentMethodType: 'cash'|'card',
    isPaid: boolean,
    isDelivered: boolean,
    _id: string,
    user:FullUserDetail,
    cartItems:ProductTypes[],
    createdAt: string,
    updatedAt: string,

}
export type FullUserDetail= {
  _id: string;
  name: string;
  email: string;
  phone: string;
}
export type  OrderCardPriceProps={
  createdAt:string,
  isDelivered:boolean,
  totalOrderPrice:number
} 