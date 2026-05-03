"use client"

import { Button } from '@/components/ui/button'
import { Loader2, Trash2 } from 'lucide-react'
import useDeleteReviewBtn from './useDeleteReviewBtn'
export default function DeleteReviewBtn({reviewId}:{reviewId:string}) {
const {isLoading,handleDeleteReview}=useDeleteReviewBtn(reviewId)
  return (
    <Button 
    onClick={handleDeleteReview}
    disabled={isLoading}
            variant="ghost" 
            size="icon" 
            className={`text-red-500 disabled:cursor-not-allowed 
                               hover:text-red-700 hover:bg-red-50 cursor-pointer 
              
                               ${isLoading ? "animate-pulse" : ""}
              `}
        >
           {isLoading?<Loader2 size={18} className='animate-spin'/>: <Trash2 size={18} />}
        </Button>
  )
}
