/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { type Product } from '@/products/interfaces/product'
import { useRouter } from 'next/navigation'


interface Props {
    searchParams?: { [key: string]: string | undefined },
    prod: Product
}

interface Build {
    paso: string
    prod: string[]
}

export const InfoCard = ({ prod, searchParams }: Props) => {

    const router = useRouter()
    let paso = searchParams?.paso ? searchParams.paso : '1'


    const handeSelect = (e: React.MouseEvent<HTMLElement>) => {

        e.preventDefault()
        const build: Build[] = localStorage.getItem('pcbuild') ? JSON.parse(localStorage.getItem('pcbuild')!) : []

        let found = false;
        for (const item of build) {
            if (item.paso === paso) {
                item.prod.push(prod.id_producto.toString());
                found = true;
            }
        }
        if (!found) {

            build.push({ paso, prod: [prod.id_producto.toString()] });
        }

        localStorage.setItem('pcbuild', JSON.stringify(build))

        if (paso  === '4') {
            build.map((item) => {
        
                if (item.paso === '4') {
                    console.log(item.prod.length)
                    if (item.prod.length >= 4) 
                    return   router.push(`buildpc?paso=${(+paso + 1).toString()}`)
                }                        
                
            })

        } else {

        
            router.push(`buildpc?paso=${(+paso + 1).toString()}`)
        }
    }


    const img = prod && prod.imagenes && prod.imagenes?.length >= 1 ? prod.imagenes[0].nombre : undefined


    return (
        <div
            onClick={(e) => handeSelect(e)}
            className='cursor-pointer flex flex-row items-center m-auto h-[120px] '
        >

            <picture className="w-1/4 block ">
                <img
                    className="w-full "
                    src={`https://imagenes.compragamer.com/productos/compragamer_Imganen_general_${img}-med.jpg`} alt=""
                />
            </picture>
            <div className="w-3/4 flex flex-col p-2">
                <p className="text-xs font-semibold">{prod && prod.nombre}</p>
                {
                    prod && prod.precioEspecial &&
                    <p>{(+prod.precioEspecial).toLocaleString('es-ar', {
                        currency: 'ARS',
                        style: 'currency',
                        maximumSignificantDigits: 8
                    })}</p>

                }
            </div>
        </div>
    )
}
