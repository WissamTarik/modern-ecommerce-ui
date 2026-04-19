
export type AddReviewModalProps={
    "productId":string,
    "reviewId"?:string,
    "isUpdate"?:boolean,
     "initialData"?:{
            "review":string,
            "rating":number
     }
}

export type ReviewSuccessfulResponseType={
    "_id":string,
    "review":string,
    "rating":number,
    "createdAt":string,
    user:User,
    
}
export type ReviewFormValues={
    "review":string,
    "rating":number
}
export type CreateReviewResponse={
    "errors"?:{
        "msg":string
    }
    ,"_id"?:string

}
export type DeleteProductReviewResponse={
        message:"success"|"fail"
}

type User={
    "_id":string,
    "name":string
}