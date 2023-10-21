import { Categorie } from "../interfaces/categorie"
import { Product } from "../interfaces/product"
import { getCategorieById } from "../services/productServices"

export const SideFilters = ({ cat, products }: { cat: Categorie | undefined, products: Product[] | undefined}) => {
// const a = products?.map(async(p) => await getCategorieById({id:15}))
    return (
        <>
            {
                cat === undefined  || cat.id < 1 ? (
                    <p className="bg-white p-5">Los filtros de productos son aplicables a las subcategorías,
                        elegí una en el menú de categorías.</p>
                )
                    : (
                        <p> hay cat {cat.nombre}</p>
                    )
            }
        </>
    )
}
