import { getAllProducts } from "../../Services/Products.services";
import ProductCard from "../_components/ProductCard/ProductCard";
import FilterSidebar from "../_components/FilterSidebar/FilterSidebar";
import { getAllCategories } from "../../Services/Categories.services";
import { getAllBrands } from "../../Services/Brands.services";
import { getUserToken } from "@/utiiles/utilites";
import { getLoggedUserWishlist } from "@/Services/Wishlist.services";
import { ProductResponseType } from "@/types/Product.types";
import { serializeSearchParams } from "@/utiiles/url";

export default async function Home({searchParams}:{searchParams:any}) {
  const resolvedParams=await searchParams

const queryStrings =serializeSearchParams(resolvedParams)
  const token=await getUserToken()
  const [products,categoriesResult,brandsResult]=await Promise.all([getAllProducts(queryStrings?`?${queryStrings}`:""),getAllCategories(),getAllBrands()])
   const categories=categoriesResult?.data||[]
   const brands=brandsResult?.data||[]

  let wishListData:ProductResponseType[]|undefined
     if(token){
    const wishListResponse=  await getLoggedUserWishlist()
       wishListData=  wishListResponse?.data
     }
  return (
<section className="container py-10 mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar categories={categories} brands={brands} />
        
        <div className="flex-1">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground text-center lg:text-left">Featured Products</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {products?.length ? (
              products.map((product) => {
                const isWishlisted = wishListData?.some((item) => item._id === product._id);
              return  <ProductCard key={product._id} {...product} isInWishlist={isWishlisted||false}  />
})
            ) : (
              <div className="col-span-full py-20 text-center text-muted-foreground">
                No products found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
