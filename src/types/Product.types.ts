export type ProductResponseType={
    _id:string,
    title:string,
    description:string
    price:number,
    quantity:number,
    imageCover:string,
    ratingsAverage:number,
    ratingsQuantity:number,
    priceAfterDiscount?:number,
    category:CategoryBrandsType,
    brand:CategoryBrandsType,
    images:string[]
    id:string
}
export type ProductCardProps=ProductResponseType&{
     isInWishlist:boolean
}
export type CategoryBrandsTypeResponse={
    data:CategoryBrandsType[]
}
export type CategoryBrandsType={
    _id:string,
    name:string,
    image:string,
    slug:string
}