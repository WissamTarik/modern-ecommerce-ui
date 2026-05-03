import { createProductReview, updateProductReview } from '@/Services/Reviews.services'
import { AddReviewModalProps, ReviewFormValues } from '@/types/Review.types'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { fa } from 'zod/v4/locales'

export default function useAddReviewModal({productId,initialData,isUpdate,reviewId,open,setOpen}:AddReviewModalProps&{

  open:boolean,
  setOpen:Dispatch<SetStateAction<boolean>>
}) {
      const [hover, setHover] = useState(0)
      const {watch,register,reset,handleSubmit,setValue,formState:{isSubmitting,errors}}=useForm<ReviewFormValues>({
        defaultValues:initialData||{
          review:"",
          rating:0
        }
      })
      const currentRating=watch("rating")
      const onSubmit=async (data:ReviewFormValues)=>{
        let result; 
   if(!data.rating){
          toast.error("Please add rating !!")   
        }
        else{
         if(isUpdate&&reviewId){
              result=await updateProductReview(reviewId,data)
         }else{
          result= await createProductReview(productId,data)
        } 
         }  
     if(result==null) toast.error("Unexpected error ")
          else{
        if("errors" in result){
          toast.error(result.errors?.msg)
        }else{
          toast.success(isUpdate?"Review is updated successfully":"Review is created successfully")
        
          reset()
          setOpen(false)
        }
      }
    
    }
    useEffect(() => {
    register("rating", { required: "Rating is required", min: 1 });
  }, [register]);
      useEffect(() => {
         if(initialData) reset(initialData)
  
      }, [initialData,reset])
  return {
handleSubmit,
onSubmit,
register,
setValue,
isSubmitting,
errors,
currentRating,
open,
hover,
setHover,
setOpen
  }
}
