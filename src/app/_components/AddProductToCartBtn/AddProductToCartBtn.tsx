"use client"

import { Button } from "@/components/ui/button";
import { AddProductToCartBtnProps } from "./Button.types";
import { Loader2, ShoppingCart } from "lucide-react";

import useAddProductToCartBtn from "./useAddProductToCartBtn";

export  default function AddProductToCartBtn({classes,btnSize,sizeIcon,productId}:AddProductToCartBtnProps) {

    const {isLoading,handleAddProductToCart}=useAddProductToCartBtn(productId)
  return (
     <Button className={`${classes} cursor-pointer ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`} size={btnSize} onClick={handleAddProductToCart}
      disabled={isLoading}

     >{isLoading ? (
        <>
          <Loader2 size={sizeIcon} className="animate-spin" />
          Adding...
        </>
      ) : (
        <>
          <ShoppingCart size={sizeIcon} />
          Add to Cart
        </>
      )}
        </Button>
  )
}
