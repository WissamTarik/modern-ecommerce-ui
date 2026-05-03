"use client"

import { AddReviewModalProps } from "@/types/Review.types"
import useAddReviewModal from "./useAddReviewModal"
import { Dispatch, SetStateAction } from "react"
import { Star } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AddReviewModalForm({productId,isUpdate,reviewId,initialData,open,setOpen}:AddReviewModalProps&{open:boolean,setOpen:Dispatch<SetStateAction<boolean>>}) {
        const {
    handleSubmit,
    onSubmit,
    register,
    setValue,
    isSubmitting,
    errors,
    currentRating,
    hover,
    setHover,
      }=useAddReviewModal({productId,isUpdate,reviewId,initialData,open,setOpen})
  return (
     <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => {
              const isActive=star<=(hover||currentRating)
              return (
              
               <Star
                key={star}
                size={32}
                className={`cursor-pointer transition-all duration-200 
                      ${isActive ? "fill-yellow-400 text-yellow-400 scale-110" : "text-gray-300"}`}
               onClick={()=>setValue("rating",star,
                {shouldValidate:true}
               )}
               onMouseEnter={()=>setHover(star)}
                 onMouseLeave={()=>setHover(0)}
               
              />
              )
            }
             
            )}
          </div>
            {errors.rating && <span className="text-xs text-center  text-red-500 italic">Rating is required</span>}
          {/* Comment Area */}
          <Textarea
            placeholder="What did you like or dislike about this product?"
           {...register("review",{
            required:"Review comment is required"
           })}
            className="min-h-30"
          />
          {errors.review && <span className="text-xs text-red-500">{errors.review.message}</span>}
          <Button 
            disabled={isSubmitting}
            className="w-full cursor-pointer"
          >
{isSubmitting ? "Processing..." : isUpdate ? "Update Review" : "Submit Review"}
          </Button>
        </form>
  )
}
