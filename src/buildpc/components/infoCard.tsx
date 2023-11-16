/* eslint-disable react-hooks/exhaustive-deps */
'use client'


import { type Product } from '@/products/interfaces/product'
import { useBuildPCStore } from '@/store/buildPC'



export const InfoCard = ({ prod } : {prod : Product}) => {

    const { paso, addProductBuild, getTotalWatts, setTipo } = useBuildPCStore(state => state)

    const handeSelect = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        addProductBuild({...prod ,paso})
        
        if (prod.id_subcategoria === 27){
            setTipo(27)
        }
        if (prod.id_subcategoria === 48){
            setTipo(48)
        }
  
        if (Number(paso) <= 6) { getTotalWatts()}
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
