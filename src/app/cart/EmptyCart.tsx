import { Button } from '@/components/ui/button'
import {  ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export default function EmptyCart() {
  return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-muted rounded-full">
            <ShoppingBag size={48} className="text-muted-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
  )
}
