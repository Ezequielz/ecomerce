/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 
import { CarouselMain } from '@/products/interfaces/carouselMain';
import { FC } from 'react';
import Link from 'next/link';



interface Props {
    carouselMain: CarouselMain[]
}

export const Carousel:FC<Props> = ({carouselMain}) => {
const BASE_URL = 'http://localhost:3000/'
    return (

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={1}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        pagination={{
            clickable: true,
          }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {return}}
        onSwiper={(swiper) => {return}}
      >
        {
            carouselMain.map(item => (
                <SwiperSlide key={item.id}>
                  <Link href={`${BASE_URL}${item.link}`} >
                    <img src={`https://imagenes.compragamer.com/bannerPrincipal/${item.nombre}`} alt="" />
                  </Link>
               
                </SwiperSlide>

            ))
        }

        ...
      </Swiper>

    )
}
