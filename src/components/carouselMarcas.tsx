'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 
import { Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { CarouselMarca } from '@/products/interfaces/carouselMarcas';

const marcas:CarouselMarca[] = [
    {
        "id": 92,
        "imagen": "imagen_marca_303_9_754.jpg",
        "nombreMarca": "Adata"
    },
    {
        "id": 18,
        "imagen": "imagen_marca_308_9_866.jpg",
        "nombreMarca": "Zotac"
    },
    {
        "id": 39,
        "imagen": "imagen_marca_314_9_380.jpg",
        "nombreMarca": "Viewsonic"
    },
    {
        "id": 78,
        "imagen": "imagen_marca_316_9_591.png",
        "nombreMarca": "Nvidia"
    },
    {
        "id": 19,
        "imagen": "imagen_marca_320_9_411.jpg",
        "nombreMarca": "AMD"
    },
    {
        "id": 41,
        "imagen": "imagen_marca_322_9_619.jpg",
        "nombreMarca": "Western Digital"
    },
    {
        "id": 8,
        "imagen": "imagen_marca_331_9_273.jpg",
        "nombreMarca": "Asus"
    },
    {
        "id": 99,
        "imagen": "imagen_marca_343_9_603.jpg",
        "nombreMarca": "Team"
    },
    {
        "id": 6,
        "imagen": "imagen_marca_359_9_526.jpg",
        "nombreMarca": "Asrock"
    },
    {
        "id": 115,
        "imagen": "imagen_marca_360_9_796.jpg",
        "nombreMarca": "GeiL"
    },
    {
        "id": 20,
        "imagen": "imagen_marca_364_9_203.jpg",
        "nombreMarca": "Intel"
    },
    {
        "id": 129,
        "imagen": "imagen_marca_365_9_441.jpg",
        "nombreMarca": "HyperX"
    },
    {
        "id": 164,
        "imagen": "imagen_marca_366_9_965.jpg",
        "nombreMarca": "Be Quiet!"
    },
    {
        "id": 152,
        "imagen": "imagen_marca_367_9_389.jpg",
        "nombreMarca": "Kolink"
    },
    {
        "id": 76,
        "imagen": "imagen_marca_369_9_879.jpg",
        "nombreMarca": "Deepcool"
    },
    {
        "id": 167,
        "imagen": "imagen_marca_370_9_893.jpg",
        "nombreMarca": "Lian Li"
    },
    {
        "id": 17,
        "imagen": "imagen_marca_371_9_755.jpg",
        "nombreMarca": "Logitech"
    }
]

export const CarouselMarcas = () => {
    return (
        <section className='bg-white  ' >
            <Swiper
                modules={[ Scrollbar, A11y, Autoplay]}
                // spaceBetween={1}
                // effect={"fade"}
                // navigation={true}
                
                slidesPerView={8}
                autoplay={{ delay: 3000, disableOnInteraction: false}}
                loop={true}
                onSlideChange={() => { return }}
                onSwiper={(swiper) => { return }}
            >
                {
                    marcas.map(marca => (
                        <SwiperSlide key={marca.id}  >
                        <picture >
                        
                                <img  src={`https://imagenes.compragamer.com/marcas/${marca.imagen}`} alt="" />
                        </picture>
                        

                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </section>
    )
}
