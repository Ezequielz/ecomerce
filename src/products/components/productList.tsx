import { FC } from "react"
import { Product } from "../interfaces/product"
import { ProductCard } from "./productCard"

interface Props {
    products: Product[]
}

export const ProductList: FC<Props> = async ({ products }) => {

    return (
        <ul
            className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 "
        >
            {
                products.map(product => (
                    <li key={product.id_producto} >
                        <ProductCard product={product} />
                    </li>
                ))
            }
        </ul>
    )
}
