import { FC } from "react"
import { Product } from "../interfaces/product"
import Link from "next/link"

interface Props {
    product: Product
}
export const ProductCardList: FC<Props> =  ({ product }) => {
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
                className=" flex flex-row items-center border-slate-200 bg-white border-solid border-2 rounded-md p-1 shadow-lg"
            >
                
                <picture className='min-w-max px-1'>

                    <img src={product.imagenes
                        ? `https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${product.imagenes[0].nombre}-med.jpg`
                        : undefined}
                        alt={`imagen de ${product.nombre}}`}
                        className='w-[80%] m-auto'
                    />
                </picture>
                <div className="text-lg p-1 ">
                    
                    <p className="leading-tight mb-2">{product.nombre.length >= 100 ? product.nombre.slice(0, 100) + '...' : product.nombre}</p>
                   
                    <strong className=' text-blue-600 text-2xl font-normal '>
                        {priceSpecial}
                    </strong>
                    <button className="bg-[#fd611a] mt-2 text-white py-2 px-4 rounded-md text-xs font-semibold flex gap-2 justify-center items-center shadow-md ">

                        SUMAR AL CARRITO
                    </button>
                </div>


            </article>
        </Link>
    )
}
