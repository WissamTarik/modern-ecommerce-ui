import { ShieldCheck, Star, Truck } from 'lucide-react'
import AddProductToCartBtn from '../../_components/AddProductToCartBtn/AddProductToCartBtn'
import ProductGallery from '../../_components/ProductGallery/ProductGallery'
import { Badge } from '@/components/ui/badge'
import { getSpecificProducts } from '@/Services/Products.services'
import { Separator } from '@/components/ui/separator'
import WishlistBtn from '../../_components/WishlistBtn/WishlistBtn'
import { getLoggedUserWishlist } from '@/Services/Wishlist.services'

export default async function ProductDetailsInfo({id}:{id:string}) {
     const product=await getSpecificProducts(id)
     
     if(product ===null) return;
     const {category,brand,title,price,priceAfterDiscount,description,imageCover,quantity,ratingsAverage,images,ratingsQuantity}=product
    let isInWishlist=false;
        const wishlistResponse=await getLoggedUserWishlist()
       const wishlistsData=wishlistResponse?.data||[]
    if(wishlistsData!=null){
       isInWishlist= wishlistsData.some((item) => item._id === id)
    }
  
     return (
      <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2">
        {/* LEFT: Product Gallery */}
        <div className="space-y-4">
          <ProductGallery images={[imageCover, ...images]} title={title} />
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              {category?.name}
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">{brand?.name}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            {title}
          </h1>

          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="ml-1 text-lg font-bold text-foreground">{ratingsAverage}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">{ratingsQuantity} Reviews</span>
            <Separator orientation="vertical" className="h-4" />
            <span className={`text-sm font-semibold ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {quantity > 0 ? `${quantity} In Stock` : 'Out of Stock'}
            </span>
          </div>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="text-3xl sm:text-4xl font-bold text-primary">
              EGP {priceAfterDiscount || price}
            </span>
            {priceAfterDiscount && (
              <span className="text-xl text-muted-foreground line-through decoration-red-500/50">
                EGP {price}
              </span>
            )}
          </div>

          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <AddProductToCartBtn
              productId={id}
              classes="h-14 flex-[2] gap-3 text-lg font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95"
              sizeIcon={22}
              btnSize="lg"
            />
            <WishlistBtn
              productId={id}
              variant="button"
              className="flex-1 h-14"
              isInitiallyWishlisted={isInWishlist}
            />
          </div>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border bg-muted/5 p-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Truck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">Within 24-48 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold">Genuine Product</p>
                <p className="text-xs text-muted-foreground">100% Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
