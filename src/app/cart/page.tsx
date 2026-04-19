import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getUserCart } from "@/Services/Cart.services"
import { ShoppingBag } from "lucide-react"; 
import Link from "next/link";
import CartItemCart from "../_components/CartItemCart/CartItemCart";
import EmptyCart from "./EmptyCart";
import ClearCartBtn from "../_components/ClearCartBtn/ClearCartBtn";
import SummaryBox from "./SummaryBox";
export const metadata={
  title:"Your cart"
}
export default async function Cart() {
  const cartItems = await getUserCart();
  
  if (cartItems === null) return null;
  const { data, numOfCartItems, cartId } = cartItems;
  const { products, totalCartPrice } = data;
  
  
   if (products.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <ShoppingBag className="text-primary" />
          Shopping Cart 
          <span className="text-sm font-normal text-muted-foreground">({numOfCartItems} items)</span>
        </h1>


        <ClearCartBtn/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {products?.map((product, index) => (
              
              <div key={product._id}>
                <CartItemCart {...product} />
                {index < products.length - 1 && <Separator className="mx-6 w-auto" />}
              </div>
            ))}
          </div>
          
          <Button variant="link" asChild className="p-0 text-muted-foreground hover:text-primary">
            <Link href="/" className="flex items-center gap-2">
               Continue Shopping
            </Link>
          </Button>
        </div>

        {/* Right: Summary Box */}
      <SummaryBox totalCartPrice={totalCartPrice}/>
      </div>
    </div>
  )
}