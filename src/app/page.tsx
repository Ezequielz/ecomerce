import { Carousel } from "@/components/carousel";
import { getCarouselMain } from "@/products/services/productServices";





 export default async function Home() {

  const carouselMail = await getCarouselMain()

  return (
    <main className="">
        <Carousel carouselMail={carouselMail}/>

    </main>
  )
}
