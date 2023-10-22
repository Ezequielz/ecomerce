import { Carousel } from "@/components/carousel";
import { getCarouselMain } from "@/products/services/productServices";





 export default async function Home() {

  const carouselMain = await getCarouselMain()

  return (
    <div className="">
        <Carousel carouselMain={carouselMain}/>

    </div>
  )
}
