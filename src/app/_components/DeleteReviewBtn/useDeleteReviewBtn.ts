import { deleteProductReview } from '@/Services/Reviews.services'
import { useState } from 'react'
import { toast } from 'sonner'

export default function useDeleteReviewBtn(reviewId:string) {
      const [isLoading, setIsLoading] = useState(false)
  async function handleDeleteReview() {
    setIsLoading(true)
    try {
    const result=  await deleteProductReview(reviewId)
      if(result.message=="success"){
        toast.success("Review is deleted successfully")
      }else{
        toast.error("Failed to delete the review")
      }
    } catch (error) {
          toast.error("Unexpected error")
    }finally{
      setIsLoading(false)
    }
  }

  return{isLoading,handleDeleteReview}
}
