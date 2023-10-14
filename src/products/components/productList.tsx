import { getProducts } from "../services/productServices"
import { ProductCard } from "./productCard"

export const ProductList = async() => {

    const products = await getProducts()


  return (
    <ul 
        className="w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 "
    >
        {
            products.map(product => {
                if (product.imagenes)
                return (
                    <li key={product.id_producto} >
                        <ProductCard product={product}/>
                    </li>
                )
            })
        }
    </ul>
  )
}
