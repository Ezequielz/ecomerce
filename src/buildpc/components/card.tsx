
import { getProductById } from "@/products/services/productServices"

import { Modal } from "./modal";

export const Card = async ({ product }: any) => {
  const prod = await getProductById({ slug: '_' + product.id_producto })
  const img = prod && prod.imagenes && prod.imagenes?.length >= 1 ? prod.imagenes[0].nombre : undefined



  if (!prod) {
    return null
  }
  return (
    <article className={`relative flex flex-row justify-center items-center h-[120px] border-slate-200 bg-white border-solid border-2 rounded-lg p-2 shadow-lg`}>
      <Modal prod={prod}  />

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
  
    </article>
  )
}
