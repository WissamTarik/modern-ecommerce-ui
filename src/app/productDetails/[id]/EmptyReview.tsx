import { MessageSquare } from 'lucide-react'
import React from 'react'

export default function EmptyReview() {
  return (
       <div className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed">
            <div className="inline-flex p-4 rounded-full bg-muted mb-4">
              <MessageSquare size={32} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">No reviews yet</h3>
            <p className="text-muted-foreground mt-2">Be the first to share your experience with this product!</p>
          </div>
  )
}
