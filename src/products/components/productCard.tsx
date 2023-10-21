/* eslint-disable @next/next/no-img-element */
import { type Product } from '@/products/interfaces/product';
import Link from 'next/link';
import { FC } from 'react';


interface Props {
    product: Product
}


export const ProductCard: FC<Props> = async ({ product }) => {

    const slug = product.nombre.trim()
        .replaceAll(' ', '_')
        .replaceAll("'", '')
        .replaceAll("/", '-')

    const priceSpecial = (+product.precioEspecial).toLocaleString('es-ar', {
        currency: 'ARS',
        style: 'currency',
        maximumSignificantDigits: 8
    })

    return (
        <Link href={`/product/${slug + '_' + product.id_producto}`} >
            <article
                key={product.id_producto}
                className=" flex flex-col justify-center items-center border-slate-200 bg-white border-solid border-2 rounded-lg p-2 shadow-lg"
            >
                <picture className='m-auto mb-5 p-1'>

                    <img src={product.imagenes
                        ? `https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${product.imagenes[0].nombre}-med.jpg`
                        : undefined}
                        alt={`imagen de ${product.nombre}}`}
                        className='w-[130px] object-cover'
                    />
                </picture>
                {/* <h3>{product.nombre}</h3> */}
                <div className='h-20  text-center leading-none'>
                    <span className="">{product.nombre.length >= 100 ? product.nombre.slice(0, 100) + '...' : product.nombre}</span>
                </div>
                <strong className=' text-blue-600 text-2xl font-normal mt-1'>{priceSpecial}
                </strong>
                <button className="bg-[#fd611a] text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ">
            
                    SUMAR AL CARRITO
                </button>


            </article>
        </Link>
    )
}
