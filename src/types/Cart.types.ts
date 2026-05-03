import { ProductResponseType } from "./Product.types"

export type CartSuccessfulResponse={
    status:"success"
    message:string
    cartId:string,
    numOfCartItems:number,
    data:CartData
    
}
export type FailedCartResponse={

  statusMsg: 'fail',
  message: string

}
type CartData={
    _id:string
     cartOwner: string,
    products:ProductTypes[],
  
    totalCartPrice: number
}
export type ProductTypes={
    _id:string,
    price:number,
    count:number,
    product:ProductResponseType
}
export type SummaryBoxType={
totalCartPrice:number

}