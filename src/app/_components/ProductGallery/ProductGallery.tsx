"use client"

import Image from "next/image"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs ,Navigation,Pagination,Zoom} from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function ProductGallery({images,title}:{images:string[],title:string}) {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
   
  return (
    <div className="space-y-4">

{/* Main swiper image */}

        <Swiper
             spaceBetween={10}
             thumbs={{swiper:thumbsSwiper}}
              modules={[Thumbs,Navigation,Pagination,Zoom]}
              zoom
              navigation
              pagination={{
                clickable:true
              }}
             className="rounded-2xl border"

        >

  {images.map((image,index)=>(
    <SwiperSlide key={index}>

        <div className="relative aspect-square bg-muted/30">
      <Image src={image} alt={title} fill   className="object-contain p-4 sm:p-6 md:p-8"/>
        </div>
    </SwiperSlide>
  ))}

        </Swiper>
        {/* Thumbnails */}
        <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={40}
        slidesPerView={4}
        watchSlidesProgress
        className="h-24"
        breakpoints={{
            0:{slidesPerView:3},
            640:{slidesPerView:4},
            1024:{slidesPerView:5}
        }}
        >
         {images.map((image,index)=>
         <SwiperSlide key={index}>
            <div className="swiper-zoom-container relative h-20 sm:h-24 cursor-pointer overflow-hidden rounded-md border hover:border-primary">
              <Image
                src={image}
                alt="thumbnail"
                fill
                className="object-cover"
              />
            </div>
         </SwiperSlide>
        )}
           
        </Swiper>
                 
                    
    </div>
  )
}
