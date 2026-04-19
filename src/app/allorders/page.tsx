import { nextAuthConfig } from "@/components/next-auth/nextAuth.config";
import { getAllUserOrders } from "@/Services/Order.services";
import { getServerSession } from "next-auth"
import EmptyUserOrders from "./EmptyUserOrders";
import {   Package } from "lucide-react";

import OrderCard from "../_components/OrderCard/OrderCard";
import { OrderDataSuccessfulResponse } from "@/types/Order.types";
export const metadata={
  title:"My Orders"
}
export  default async function AllOrders() {
 const serverSession=await getServerSession(nextAuthConfig)
 
 const orders=await getAllUserOrders(serverSession?.user.id as string) 
 if(orders==null) 
 {
   return (
    <div className="text-center py-20">
      <p className="text-red-500 font-medium">Something went wrong. Please try again.</p>
    </div>
  )
 }
 if("statusMsg" in orders) 
 {
   return (
    <div className="text-center py-20">
      <p className="text-red-500 font-medium">
        Failed to load orders: {orders.message}
      </p>
    </div>
   )
 }
  if(orders.length==0)
    return <EmptyUserOrders/>
  return (
    <>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Package className="text-primary" /> My Orders
      </h1>
      <div className="grid gap-6">
          {orders.map((order: OrderDataSuccessfulResponse) => (
          <OrderCard {...order} key={order._id}/>
          ))}
        </div>
    
      </div>
    </>
  )
}
