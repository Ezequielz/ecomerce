/* eslint-disable @next/next/no-img-element */
import { type Product } from '@/products/interfaces/product';
import Link from 'next/link';
import { FC } from 'react';


interface Props {
    product: Product
}


export const ProductCard:FC<Props> = async({product}) => {

    const slug = product.nombre.trim()
                                .replaceAll(' ','_')
                                .replaceAll("'",'')
                                .replaceAll("/",'-')

    return (
        <Link href={`/product/${slug + '_' + product.id_producto}`} >
            <article
                key={product.id_producto}
                className=" flex flex-col justify-center items-center border-slate-200 bg-white border-solid border-2 rounded-lg p-2 h-40"
            >
                <img src={product.imagenes
                    ? `https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${product.imagenes[0].nombre}-med.jpg`
                    : undefined} alt="" />
                {/* <h3>{product.nombre}</h3> */}
                <strong>{product.precioLista.toLocaleString('es-ar', {
                    currency: 'ARS',
                    style: 'currency'
                })}
                </strong>
                <span className="text-xs whitespace-pre text-center ">{product.nombre}</span>


            </article>
        </Link>
    )
}
