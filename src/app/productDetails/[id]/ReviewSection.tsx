import EmptyReview from './EmptyReview'
import { MessageSquare } from 'lucide-react'
import { getProductReviews } from '@/Services/Reviews.services';
import ReviewCard from '@/app/_components/ReviewCard/ReviewCard';
import AddReviewModal from './AddReviewModal';

export default async function ReviewSection({id}:{id:string}) {
        const reviews=await getProductReviews(id)
    if(reviews ==null) return;
  
  return (
      <section className="mt-20 border-t pt-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              Customer Reviews <MessageSquare className="text-primary h-6 w-6" />
            </h2>
            <p className="text-muted-foreground mt-2">
              Showing {reviews.length} reviews for this product
            </p>
          </div>
         <AddReviewModal productId={id} />
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <ReviewCard  productId={id} {...review}  key={review._id}/>
            ))}
          </div>
        ) : (
       <EmptyReview/>
        )}
      </section>
  )
}
