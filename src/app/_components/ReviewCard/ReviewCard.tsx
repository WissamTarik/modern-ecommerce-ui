import AddReviewModal from '@/app/productDetails/[id]/AddReviewModal'
import { nextAuthConfig } from '@/components/next-auth/nextAuth.config'
import { ReviewSuccessfulResponseType } from '@/types/Review.types'
import { Calendar, Star, User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import DeleteReviewBtn from '../DeleteReviewBtn/DeleteReviewBtn'

export default async function ReviewCard({_id,user,createdAt,rating,review,productId}:ReviewSuccessfulResponseType&{productId:string}) {
   const serverSession= await getServerSession(nextAuthConfig)
   const isReviewOwner=serverSession?.user.id===user._id
  const initialData={
    review,
    rating,
  }
  
  return (
          <div 
             
                className="group p-6 rounded-3xl border bg-card transition-all hover:shadow-xl hover:border-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-linear-to-tr from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{user?.name || 'Anonymous'}</p>
                      {isReviewOwner && (
         <div className="flex items-center justify-between gap-2">
    <AddReviewModal 
        productId={productId} 
        isUpdate={true} 
        reviewId={_id} 
        initialData={initialData}
    />
    
    <DeleteReviewBtn  reviewId={_id} />
</div>
        )}
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    <Calendar size={12} className="mr-1.5" />
                    {new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
                  <p className="text-muted-foreground leading-relaxed italic relative">
                  <span className="text-4xl text-primary/10 absolute -top-4 -left-2 font-serif">"</span>
                  {review}
                </p>
              </div>
  )
}
