import {  OrderDataFailedResponse, OrderDataSuccessfulResponse, UserDetails } from "./Order.types"

export type PaymentParams={
    params:{
        totalPrice:number
    }
}
export type PaymentFormParams={
  
        totalPrice:number,
        cartId:string
    
}
 export type CheckoutSuccessfulResponse={
    status:"success",
    message:string,
    user:UserDetails
    data:OrderDataSuccessfulResponse
  }
 export type CheckoutFailedResponse={
    statusMsg:"fail",
    message:string,
   
  }
  export type CardPaymentSuccessResponse={
          status:"success",
          session:CardPaymentSuccessResponseSession
  }
  export type CardPaymentFailedResponse={
          statusMsg: 'fail',
           message: string 
  }
  type CardPaymentSuccessResponseSession={
    url:string,
    success_url:string,
    cancel_url:string
  }
  export type OrderSummaryProps={
    isSubmitting:boolean,
    totalPrice:number
  }