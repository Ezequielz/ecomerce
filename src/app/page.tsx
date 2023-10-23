import { Carousel } from "@/components/carousel";
import { CarouselNews } from "@/components/carouselNews";
import { getCarouselMain, getProductsFeatured } from "@/products/services/productServices";





 export default async function Home() {

  const carouselMain = await getCarouselMain()
  const productsFeatured = await getProductsFeatured()

  return (
    <div className="">
        <Carousel carouselMain={carouselMain}/>
        <CarouselNews products={productsFeatured} />
    </div>
  )
}
