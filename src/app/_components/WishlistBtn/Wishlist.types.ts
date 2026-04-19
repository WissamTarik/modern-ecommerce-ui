import { ProductResponseType } from "@/types/Product.types";

export type WishlistBtnProps={
    productId:string
     variant?: "icon" | "button";
  className?: string;
  isInitiallyWishlisted?: boolean;
}
export type WishlistResponseType={
     status?:"success",
     statusMsg?:"fail"
     message:string
     data?:string[]
}
export type UserWishlistResponseType={
     data:ProductResponseType[]
}
export type ProductWishListComponentsProps={
     toggleWishlist:()=>void,
     isLoading:boolean,
     className?:string,
     isWishlisted:boolean
}