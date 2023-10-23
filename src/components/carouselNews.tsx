'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css/navigation';
import { Product } from '@/products/interfaces/product';
import { ProductCardGrid } from '@/products/components/productCardGrid';


export const CarouselNews = ({ products }: { products: Product[] }) => {
console.log(products)
    return (
        <section className='bg-white  px-16 py-5' >
            <header>
                <p className='font-semibold text-xl'>ÚLTIMAS NOVEDADES</p>
                <hr
                    className="mb-3 mt-1 h-px border-t-0 bg-neutral-500" />
            </header>
            <Swiper
                modules={[ Navigation]}
                spaceBetween={10}
                
                slidesPerView={4}
                // autoplay={{ delay: 3000, disableOnInteraction: false }}
                style={{
                    padding: '0 20px'
                    // margin: '0 20pxD',
                }}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                  }}
                onSlideChange={() => { return }}
                onSwiper={(swiper) => { return }}
            >
                {
                    products.map(product => (
                        <SwiperSlide  style={{padding:'10px'}} key={product.id_producto}   >
                      
                                <ProductCardGrid product={product} news/>

                        

                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </section>
    )
}
