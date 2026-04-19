"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AddReviewModalProps } from "@/types/Review.types"
import { useState } from "react"
import AddReviewModalForm from "./AddReviewModalForm"

export default function AddReviewModal({productId,isUpdate,reviewId,initialData}:AddReviewModalProps) {
      const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
       <Button  size={isUpdate ? "sm" : "lg"} className="rounded-full cursor-pointer px-8 shadow-md">
                    {isUpdate ? "Edit Review" : "Write a Review"}
                </Button>
      </DialogTrigger>
      <DialogContent className="`sm:max-w-106.25">
        <DialogHeader>
<DialogTitle>{isUpdate ? "Update your review" : "Share your experience"}</DialogTitle>
        </DialogHeader>
        <AddReviewModalForm initialData={initialData} reviewId={reviewId} productId={productId} open={open} setOpen={setOpen} isUpdate={isUpdate}/>
      </DialogContent>
    </Dialog>
  )
}
