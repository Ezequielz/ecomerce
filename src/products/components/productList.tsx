import { FC } from "react"
import { Product } from "../interfaces/product"
import { ProductCard } from "./productCard"
import { OptionsShow } from "@/components/optionsShow"
import { ButtonsPage } from "@/components/buttonsPage"

interface Props {
    products: Product[]
}

export const ProductList: FC<Props> = async ({ products }) => {

    return (
        <section className="w-3/4 pl-4 pt-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20">
            <OptionsShow />
            {
                products.length === 0
                    ? (
                        <div>no hay resultados</div>
                    )
                    : (

                        <ul
                            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  "
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
            <footer className="py-5 px-40 flex flex-row justify-center items-start">


                <ButtonsPage products={products.length} />

            </footer>

        </section>
    )
}
