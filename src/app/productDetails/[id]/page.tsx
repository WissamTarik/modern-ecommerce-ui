
import Link from 'next/link'
import {  ArrowLeft} from 'lucide-react'


import ReviewSection from './ReviewSection'
import ProductDetailsInfo from './ProductDetailsInfo'
import { getSpecificProducts } from '@/Services/Products.services'
export const dynamicParams = true; 

export const dynamic = 'force-dynamic';
export async function generateMetadata({params}:{params:{id:string}}) {
  const {id}=await params
  const product=await getSpecificProducts(id)
  if(!product) 
  {
    return {title:"Product not found"}
  }
  return{
    title:product.title,
    description:product.description,
    openGraph:{
      images:[product.imageCover]
    }
  }
}
export default async function ProductDetails({params}:{params:{id:string}}) {
    const {id}=await params

    
  return (
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Navigation */}
      <nav className="mb-8 flex items-center text-sm text-muted-foreground">
        <Link href="/" className="flex items-center hover:text-primary transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to products
        </Link>
      </nav>

   <ProductDetailsInfo id={id}/>

      {/* REVIEWS SECTION */}
   <ReviewSection id={id}/>
    </div>
  )
}
