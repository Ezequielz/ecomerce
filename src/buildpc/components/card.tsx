
import { getProductById } from "@/products/services/productServices"

import { Modal } from "./modal";
import { InfoCard } from "./infoCard";
import { Product } from "@/products/interfaces/product";

interface Props {
  product: Product
}

export const Card = async ({ product }: Props) => {
  const prod = await getProductById({ slug: '_' + product.id_producto })
 
  if (!prod) {
    return null
  }
  return (
    <article className={`relative h-[120px] border-slate-200 bg-white border-solid border-2 rounded-lg px-2 shadow-lg  justify-center items-center`}>
      <Modal prod={prod}  />
      <InfoCard  prod={prod}/>
  
    </article>
  )
}
