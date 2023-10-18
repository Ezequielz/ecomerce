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

interface Props {
    carouselMail: CarouselMain[]
}

export const Carousel:FC<Props> = ({carouselMail}) => {
  
    return (

        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={1}
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        loop={true}
        pagination={{
            clickable: true,
          }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            carouselMail.map(item => (
                <SwiperSlide key={item.id}>
                    <img src={`https://imagenes.compragamer.com/bannerPrincipal/${item.nombre}`} alt="" />
               
                </SwiperSlide>

            ))
        }

        ...
      </Swiper>

    )
}
