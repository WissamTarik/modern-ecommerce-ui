"use client"

import { CartContext } from "@/Contexts/CartContextProvider";
import { AddProductToUserCart } from "@/Services/Cart.services";
import { useContext, useState } from "react";
import { toast } from "sonner";

export default function useAddProductToCartBtn(productId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCartCount } = useContext(CartContext);

  async function handleAddProductToCart() {
    setIsLoading(true);
    
    try {
      const result = await AddProductToUserCart(productId);
      
      if (result) {
        if ("status" in result && result.status === "success") {
          toast.success(result.message);
          updateCartCount(result.numOfCartItems);
        } else {
          // This handles the "You are not logged in" response from the API
          toast.error(result.message || "Please login to add items to cart");
        }
      } else {
        toast.error("Failed to add the product. Try again later.");
      }
    } catch (error) {
      console.error("Cart Error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleAddProductToCart };
}